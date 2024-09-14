/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RetrieveAtsJobInterviewStageRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the jobinterviewstage you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Ats software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveAtsJobInterviewStageRequest$inboundSchema: z.ZodType<
  RetrieveAtsJobInterviewStageRequest,
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
export type RetrieveAtsJobInterviewStageRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAtsJobInterviewStageRequest$outboundSchema: z.ZodType<
  RetrieveAtsJobInterviewStageRequest$Outbound,
  z.ZodTypeDef,
  RetrieveAtsJobInterviewStageRequest
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
export namespace RetrieveAtsJobInterviewStageRequest$ {
  /** @deprecated use `RetrieveAtsJobInterviewStageRequest$inboundSchema` instead. */
  export const inboundSchema =
    RetrieveAtsJobInterviewStageRequest$inboundSchema;
  /** @deprecated use `RetrieveAtsJobInterviewStageRequest$outboundSchema` instead. */
  export const outboundSchema =
    RetrieveAtsJobInterviewStageRequest$outboundSchema;
  /** @deprecated use `RetrieveAtsJobInterviewStageRequest$Outbound` instead. */
  export type Outbound = RetrieveAtsJobInterviewStageRequest$Outbound;
}
