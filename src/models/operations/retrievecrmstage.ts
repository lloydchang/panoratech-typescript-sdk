/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveCrmStageRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the stage you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Crm software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveCrmStageRequest$inboundSchema: z.ZodType<
  RetrieveCrmStageRequest,
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
export type RetrieveCrmStageRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveCrmStageRequest$outboundSchema: z.ZodType<
  RetrieveCrmStageRequest$Outbound,
  z.ZodTypeDef,
  RetrieveCrmStageRequest
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
export namespace RetrieveCrmStageRequest$ {
  /** @deprecated use `RetrieveCrmStageRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveCrmStageRequest$inboundSchema;
  /** @deprecated use `RetrieveCrmStageRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveCrmStageRequest$outboundSchema;
  /** @deprecated use `RetrieveCrmStageRequest$Outbound` instead. */
  export type Outbound = RetrieveCrmStageRequest$Outbound;
}

export function retrieveCrmStageRequestToJSON(
  retrieveCrmStageRequest: RetrieveCrmStageRequest,
): string {
  return JSON.stringify(
    RetrieveCrmStageRequest$outboundSchema.parse(retrieveCrmStageRequest),
  );
}

export function retrieveCrmStageRequestFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveCrmStageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveCrmStageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveCrmStageRequest' from JSON`,
  );
}
