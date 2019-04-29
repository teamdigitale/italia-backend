/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { EmailAddress } from "./EmailAddress";
import * as t from "io-ts";

/**
 * Default addresses for notifying the recipient of the message in case
 * no address for the related channel is set in his profile.
 */

// required attributes
const NewMessageDefaultAddressesR = t.interface({});

// optional attributes
const NewMessageDefaultAddressesO = t.partial({
  email: EmailAddress
});

export const NewMessageDefaultAddresses = t.intersection(
  [NewMessageDefaultAddressesR, NewMessageDefaultAddressesO],
  "NewMessageDefaultAddresses"
);

export type NewMessageDefaultAddresses = t.TypeOf<
  typeof NewMessageDefaultAddresses
>;