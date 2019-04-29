/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { EmailAddress } from "./EmailAddress";
import { BlockedInboxOrChannels } from "./BlockedInboxOrChannels";
import { PreferredLanguages } from "./PreferredLanguages";
import { IsInboxEnabled } from "./IsInboxEnabled";
import { IsWebhookEnabled } from "./IsWebhookEnabled";
import * as t from "io-ts";

/**
 * Describes the citizen's profile, mostly interesting for preferences
 * attributes.
 */

// required attributes
const ExtendedProfileR = t.interface({
  is_inbox_enabled: IsInboxEnabled,

  is_webhook_enabled: IsWebhookEnabled,

  version: t.Integer
});

// optional attributes
const ExtendedProfileO = t.partial({
  email: EmailAddress,

  blocked_inbox_or_channels: BlockedInboxOrChannels,

  preferred_languages: PreferredLanguages
});

export const ExtendedProfile = t.intersection(
  [ExtendedProfileR, ExtendedProfileO],
  "ExtendedProfile"
);

export type ExtendedProfile = t.TypeOf<typeof ExtendedProfile>;