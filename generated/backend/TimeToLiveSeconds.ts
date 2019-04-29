/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { WithinRangeInteger } from "italia-ts-commons/lib/numbers";
import * as t from "io-ts";
import { withDefault } from "italia-ts-commons/lib/types";

/**
 * This parameter specifies for how long (in seconds) the system will
 * try to deliver the message to the channels configured by the user.
 */

export type TimeToLiveSeconds = t.TypeOf<typeof TimeToLiveSecondsBase>;
const TimeToLiveSecondsBase = WithinRangeInteger(3600, 604800);

export const TimeToLiveSeconds = withDefault(
  TimeToLiveSecondsBase,
  3600 as TimeToLiveSeconds
);