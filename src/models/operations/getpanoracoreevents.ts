/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetPanoraCoreEventsRequest = {
  page?: number | undefined;
  limit?: number | undefined;
};

/** @internal */
export const GetPanoraCoreEventsRequest$inboundSchema: z.ZodType<
  GetPanoraCoreEventsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
});

/** @internal */
export type GetPanoraCoreEventsRequest$Outbound = {
  page?: number | undefined;
  limit?: number | undefined;
};

/** @internal */
export const GetPanoraCoreEventsRequest$outboundSchema: z.ZodType<
  GetPanoraCoreEventsRequest$Outbound,
  z.ZodTypeDef,
  GetPanoraCoreEventsRequest
> = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPanoraCoreEventsRequest$ {
  /** @deprecated use `GetPanoraCoreEventsRequest$inboundSchema` instead. */
  export const inboundSchema = GetPanoraCoreEventsRequest$inboundSchema;
  /** @deprecated use `GetPanoraCoreEventsRequest$outboundSchema` instead. */
  export const outboundSchema = GetPanoraCoreEventsRequest$outboundSchema;
  /** @deprecated use `GetPanoraCoreEventsRequest$Outbound` instead. */
  export type Outbound = GetPanoraCoreEventsRequest$Outbound;
}

export function getPanoraCoreEventsRequestToJSON(
  getPanoraCoreEventsRequest: GetPanoraCoreEventsRequest,
): string {
  return JSON.stringify(
    GetPanoraCoreEventsRequest$outboundSchema.parse(getPanoraCoreEventsRequest),
  );
}

export function getPanoraCoreEventsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetPanoraCoreEventsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPanoraCoreEventsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPanoraCoreEventsRequest' from JSON`,
  );
}
