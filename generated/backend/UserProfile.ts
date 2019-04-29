/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import * as t from "io-ts";
import { InitializedProfile } from "./InitializedProfile";
import { AuthenticatedProfile } from "./AuthenticatedProfile";

export const UserProfile = t.union(
  [InitializedProfile, AuthenticatedProfile],
  "UserProfile"
);

export type UserProfile = t.TypeOf<typeof UserProfile>;