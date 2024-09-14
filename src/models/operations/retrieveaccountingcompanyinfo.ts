/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RetrieveAccountingCompanyInfoRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the companyinfo you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Accounting software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingCompanyInfoRequest$inboundSchema: z.ZodType<
  RetrieveAccountingCompanyInfoRequest,
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
export type RetrieveAccountingCompanyInfoRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingCompanyInfoRequest$outboundSchema: z.ZodType<
  RetrieveAccountingCompanyInfoRequest$Outbound,
  z.ZodTypeDef,
  RetrieveAccountingCompanyInfoRequest
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
export namespace RetrieveAccountingCompanyInfoRequest$ {
  /** @deprecated use `RetrieveAccountingCompanyInfoRequest$inboundSchema` instead. */
  export const inboundSchema =
    RetrieveAccountingCompanyInfoRequest$inboundSchema;
  /** @deprecated use `RetrieveAccountingCompanyInfoRequest$outboundSchema` instead. */
  export const outboundSchema =
    RetrieveAccountingCompanyInfoRequest$outboundSchema;
  /** @deprecated use `RetrieveAccountingCompanyInfoRequest$Outbound` instead. */
  export type Outbound = RetrieveAccountingCompanyInfoRequest$Outbound;
}
