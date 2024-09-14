/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RetrieveAccountingPaymentRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the payment you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Accounting software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingPaymentRequest$inboundSchema: z.ZodType<
  RetrieveAccountingPaymentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  id: z.string(),
  remote_data: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
  });
});

/** @internal */
export type RetrieveAccountingPaymentRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingPaymentRequest$outboundSchema: z.ZodType<
  RetrieveAccountingPaymentRequest$Outbound,
  z.ZodTypeDef,
  RetrieveAccountingPaymentRequest
> = z.object({
  xConnectionToken: z.string(),
  id: z.string(),
  remoteData: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAccountingPaymentRequest$ {
  /** @deprecated use `RetrieveAccountingPaymentRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveAccountingPaymentRequest$inboundSchema;
  /** @deprecated use `RetrieveAccountingPaymentRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveAccountingPaymentRequest$outboundSchema;
  /** @deprecated use `RetrieveAccountingPaymentRequest$Outbound` instead. */
  export type Outbound = RetrieveAccountingPaymentRequest$Outbound;
}
