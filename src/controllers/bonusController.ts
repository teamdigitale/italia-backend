/**
 * This controller handles the bonus requests from the
 * app by forwarding the call to the API system.
 */

import * as express from "express";
import {
  IResponseErrorConflict,
  IResponseErrorInternal,
  IResponseErrorNotFound,
  IResponseErrorValidation,
  IResponseSuccessAccepted,
  IResponseSuccessJson,
  IResponseSuccessRedirectToResource
} from "italia-ts-commons/lib/responses";

import { BonusActivation } from "generated/io-bonus-api/BonusActivation";
import { NonEmptyString } from "italia-ts-commons/lib/strings";
import BonusService from "src/services/bonusService";
import { EligibilityCheck } from "../../generated/io-bonus-api/EligibilityCheck";
import { InstanceId } from "../../generated/io-bonus-api/InstanceId";
import { withUserFromRequest } from "../types/user";
import { withValidatedOrValidationError } from "../utils/responses";

export const withBonusIdFromRequest = async <T>(
  req: express.Request,
  f: (bonusId: NonEmptyString) => Promise<T>
): Promise<IResponseErrorValidation | T> =>
  withValidatedOrValidationError(
    NonEmptyString.decode(req.param("bonus_id")),
    f
  );

export default class BonusController {
  constructor(private readonly bonusService: BonusService) {}

  /**
   * Starts a request for a bonus for the current user.
   * Returns either an error or a reference to the request
   *
   */
  public readonly startBonusEligibilityCheck = (
    req: express.Request
  ): Promise<
    // tslint:disable-next-line:max-union-size
    | IResponseErrorValidation
    | IResponseErrorConflict
    | IResponseErrorInternal
    | IResponseSuccessAccepted
    | IResponseSuccessRedirectToResource<InstanceId, InstanceId>
  > =>
    withUserFromRequest(req, user =>
      this.bonusService.startBonusEligibilityCheck(user)
    );

  /**
   * Starts a request for a bonus for the current user.
   * Returns either an error or a reference to the request
   *
   */
  public readonly getBonusEligibilityCheck = (
    req: express.Request
  ): Promise<
    // tslint:disable-next-line:max-union-size
    | IResponseErrorValidation
    | IResponseErrorNotFound
    | IResponseErrorInternal
    | IResponseSuccessAccepted
    | IResponseSuccessJson<EligibilityCheck>
  > =>
    withUserFromRequest(req, user =>
      this.bonusService.getBonusEligibilityCheck(user)
    );

  /**
   * Get the activation details for the latest version
   * of the bonus entity identified by the provided id
   *
   */
  public readonly getLatestBonusActivationById = (
    req: express.Request
  ): Promise<
    // tslint:disable-next-line:max-union-size
    | IResponseErrorValidation
    | IResponseErrorNotFound
    | IResponseErrorInternal
    | IResponseSuccessAccepted
    | IResponseSuccessJson<BonusActivation>
  > =>
    withUserFromRequest(req, user =>
      withBonusIdFromRequest(req, bonusId =>
        this.bonusService.getLatestBonusActivationById(user, bonusId)
      )
    );
}