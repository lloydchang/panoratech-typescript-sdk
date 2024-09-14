/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RetrieveAtsDepartmentRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the department you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Ats software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveAtsDepartmentRequest$inboundSchema: z.ZodType<
  RetrieveAtsDepartmentRequest,
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
export type RetrieveAtsDepartmentRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAtsDepartmentRequest$outboundSchema: z.ZodType<
  RetrieveAtsDepartmentRequest$Outbound,
  z.ZodTypeDef,
  RetrieveAtsDepartmentRequest
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
export namespace RetrieveAtsDepartmentRequest$ {
  /** @deprecated use `RetrieveAtsDepartmentRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveAtsDepartmentRequest$inboundSchema;
  /** @deprecated use `RetrieveAtsDepartmentRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveAtsDepartmentRequest$outboundSchema;
  /** @deprecated use `RetrieveAtsDepartmentRequest$Outbound` instead. */
  export type Outbound = RetrieveAtsDepartmentRequest$Outbound;
}
