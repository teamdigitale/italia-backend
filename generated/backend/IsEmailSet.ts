/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import * as t from "io-ts";
import { withDefault } from "italia-ts-commons/lib/types";

/**
 * True if the user has presonalized the email.
 */

export type IsEmailSet = t.TypeOf<typeof IsEmailSetBase>;
const IsEmailSetBase = t.boolean;

export const IsEmailSet = withDefault(IsEmailSetBase, false as IsEmailSet);