/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { WithinRangeString } from "italia-ts-commons/lib/strings";
import * as t from "io-ts";

/**
 * The full version of the message, in plain text or Markdown format. The
 * content of this field will be delivered to channels that don't have any
 * limit in terms of content size (e.g. email, etc...).
 */

export type MessageBodyMarkdown = t.TypeOf<typeof MessageBodyMarkdown>;
export const MessageBodyMarkdown = WithinRangeString(80, 10001);