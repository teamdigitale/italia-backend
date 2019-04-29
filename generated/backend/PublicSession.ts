/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { SpidLevel } from "./SpidLevel";
import * as t from "io-ts";

/**
 * Describe the current session of an authenticated user.
 */

// required attributes
const PublicSessionR = t.interface({
  spidLevel: SpidLevel,

  walletToken: t.string
});

// optional attributes
const PublicSessionO = t.partial({});

export const PublicSession = t.exact(
  t.intersection([PublicSessionR, PublicSessionO], "PublicSession")
);

export type PublicSession = t.TypeOf<typeof PublicSession>;