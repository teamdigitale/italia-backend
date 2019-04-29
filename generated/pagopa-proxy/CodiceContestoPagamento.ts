/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { WithinRangeString } from "italia-ts-commons/lib/strings";
import * as t from "io-ts";

/**
 * Transaction Id used to identify the communication flow
 */

export type CodiceContestoPagamento = t.TypeOf<typeof CodiceContestoPagamento>;
export const CodiceContestoPagamento = WithinRangeString(32, 33);