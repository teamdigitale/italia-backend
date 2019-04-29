/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { Platform } from "./Platform";
import { PushChannel } from "./PushChannel";
import * as t from "io-ts";

/**
 * Describes an app installation.
 */

// required attributes
const InstallationR = t.interface({
  platform: Platform,

  pushChannel: PushChannel
});

// optional attributes
const InstallationO = t.partial({});

export const Installation = t.exact(
  t.intersection([InstallationR, InstallationO], "Installation")
);

export type Installation = t.TypeOf<typeof Installation>;