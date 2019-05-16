import { errorsToReadableMessages } from "italia-ts-commons/lib/reporters";
import nodeFetch from "node-fetch";
import { DOMParser } from "xmldom";
import { IDPEntityDescriptor } from "../types/IDPEntityDescriptor";
import { log } from "./logger";

const EntityDescriptorTAG = "md:EntityDescriptor";
const X509CertificateTAG = "ds:X509Certificate";
const SingleSignOnServiceTAG = "md:SingleSignOnService";
const SingleLogoutServiceTAG = "md:SingleLogoutService";

export async function parseIdpMetadata(
  ipdMetadataPage: string
): Promise<ReadonlyArray<IDPEntityDescriptor>> {
  const domParser = new DOMParser().parseFromString(ipdMetadataPage);
  const entityDescriptors = domParser.getElementsByTagName(EntityDescriptorTAG);
  return Array.from(entityDescriptors).reduce(
    (idps: ReadonlyArray<IDPEntityDescriptor>, element: Element) => {
      const certs = Array.from(
        element.getElementsByTagName(X509CertificateTAG)
      ).map(_ => {
        if (_.textContent) {
          return _.textContent.replace(/[\n\s]/g, "");
        }
        return "";
      });
      const elementInfoOrErrors = IDPEntityDescriptor.decode({
        cert: certs,
        entityID: element.getAttribute("entityID"),
        entryPoint: (element
          .getElementsByTagName(SingleSignOnServiceTAG)
          .item(0) as Element).getAttribute("Location"),
        logoutUrl: (element
          .getElementsByTagName(SingleLogoutServiceTAG)
          .item(0) as Element).getAttribute("Location")
      });
      if (elementInfoOrErrors.isLeft()) {
        log.warn(
          "Invalid md:EntityDescriptor. %s",
          errorsToReadableMessages(elementInfoOrErrors.value).join(" / ")
        );
        return idps;
      }
      return [...idps, elementInfoOrErrors.value];
    },
    []
  );
}

export async function fetchIdpMetadata(
  idpMetadataUrl: string
): Promise<string> {
  const idpMetadataRequest = await nodeFetch(idpMetadataUrl);
  return await idpMetadataRequest.text();
}