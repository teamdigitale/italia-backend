// DO NOT EDIT THIS FILE
// This file has been generated by gen-api-models
// tslint:disable:max-union-size
// tslint:disable:no-identical-functions

import * as t from "io-ts";

import * as r from "italia-ts-commons/lib/requests";

import { PaymentRequestsGetResponse } from "./PaymentRequestsGetResponse";

import { ProblemJson } from "./ProblemJson";

import { PaymentProblemJson } from "./PaymentProblemJson";

import { PaymentActivationsPostRequest } from "./PaymentActivationsPostRequest";

import { PaymentActivationsPostResponse } from "./PaymentActivationsPostResponse";

import { PaymentActivationsGetResponse } from "./PaymentActivationsGetResponse";

/****************************************************************
 * getPaymentInfo
 */

// Request type definition
export type GetPaymentInfoT = r.IGetApiRequestType<
  { readonly rptId: string },
  never,
  never,
  | r.IResponseType<200, PaymentRequestsGetResponse>
  | r.IResponseType<400, ProblemJson>
  | r.IResponseType<500, PaymentProblemJson>
>;

// Decodes the success response with a custom success type
export function getPaymentInfoDecoder<A, O>(type: t.Type<A, O>) {
  return r.composeResponseDecoders(
    r.composeResponseDecoders(
      r.ioResponseDecoder<200, (typeof type)["_A"], (typeof type)["_O"]>(
        200,
        type
      ),
      r.ioResponseDecoder<
        400,
        (typeof ProblemJson)["_A"],
        (typeof ProblemJson)["_O"]
      >(400, ProblemJson)
    ),
    r.ioResponseDecoder<
      500,
      (typeof PaymentProblemJson)["_A"],
      (typeof PaymentProblemJson)["_O"]
    >(500, PaymentProblemJson)
  );
}

// Decodes the success response with the type defined in the specs
export const getPaymentInfoDefaultDecoder = () =>
  getPaymentInfoDecoder(PaymentRequestsGetResponse);

/****************************************************************
 * activatePayment
 */

// Request type definition
export type ActivatePaymentT = r.IPostApiRequestType<
  { readonly paymentActivationsPostRequest: PaymentActivationsPostRequest },
  "Content-Type",
  never,
  | r.IResponseType<200, PaymentActivationsPostResponse>
  | r.IResponseType<400, ProblemJson>
  | r.IResponseType<500, PaymentProblemJson>
>;

// Decodes the success response with a custom success type
export function activatePaymentDecoder<A, O>(type: t.Type<A, O>) {
  return r.composeResponseDecoders(
    r.composeResponseDecoders(
      r.ioResponseDecoder<200, (typeof type)["_A"], (typeof type)["_O"]>(
        200,
        type
      ),
      r.ioResponseDecoder<
        400,
        (typeof ProblemJson)["_A"],
        (typeof ProblemJson)["_O"]
      >(400, ProblemJson)
    ),
    r.ioResponseDecoder<
      500,
      (typeof PaymentProblemJson)["_A"],
      (typeof PaymentProblemJson)["_O"]
    >(500, PaymentProblemJson)
  );
}

// Decodes the success response with the type defined in the specs
export const activatePaymentDefaultDecoder = () =>
  activatePaymentDecoder(PaymentActivationsPostResponse);

/****************************************************************
 * getActivationStatus
 */

// Request type definition
export type GetActivationStatusT = r.IGetApiRequestType<
  { readonly codiceContestoPagamento: string },
  never,
  never,
  | r.IResponseType<200, PaymentActivationsGetResponse>
  | r.IResponseType<400, ProblemJson>
  | r.IResponseType<404, ProblemJson>
  | r.IResponseType<500, ProblemJson>
>;

// Decodes the success response with a custom success type
export function getActivationStatusDecoder<A, O>(type: t.Type<A, O>) {
  return r.composeResponseDecoders(
    r.composeResponseDecoders(
      r.composeResponseDecoders(
        r.ioResponseDecoder<200, (typeof type)["_A"], (typeof type)["_O"]>(
          200,
          type
        ),
        r.ioResponseDecoder<
          400,
          (typeof ProblemJson)["_A"],
          (typeof ProblemJson)["_O"]
        >(400, ProblemJson)
      ),
      r.ioResponseDecoder<
        404,
        (typeof ProblemJson)["_A"],
        (typeof ProblemJson)["_O"]
      >(404, ProblemJson)
    ),
    r.ioResponseDecoder<
      500,
      (typeof ProblemJson)["_A"],
      (typeof ProblemJson)["_O"]
    >(500, ProblemJson)
  );
}

// Decodes the success response with the type defined in the specs
export const getActivationStatusDefaultDecoder = () =>
  getActivationStatusDecoder(PaymentActivationsGetResponse);