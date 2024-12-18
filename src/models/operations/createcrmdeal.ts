/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateCrmDealRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * Set to true to include data from the original Crm software.
   */
  remoteData?: boolean | undefined;
  unifiedCrmDealInput: components.UnifiedCrmDealInput;
};

/** @internal */
export const CreateCrmDealRequest$inboundSchema: z.ZodType<
  CreateCrmDealRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  UnifiedCrmDealInput: components.UnifiedCrmDealInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
    "UnifiedCrmDealInput": "unifiedCrmDealInput",
  });
});

/** @internal */
export type CreateCrmDealRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  UnifiedCrmDealInput: components.UnifiedCrmDealInput$Outbound;
};

/** @internal */
export const CreateCrmDealRequest$outboundSchema: z.ZodType<
  CreateCrmDealRequest$Outbound,
  z.ZodTypeDef,
  CreateCrmDealRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  unifiedCrmDealInput: components.UnifiedCrmDealInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
    unifiedCrmDealInput: "UnifiedCrmDealInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCrmDealRequest$ {
  /** @deprecated use `CreateCrmDealRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCrmDealRequest$inboundSchema;
  /** @deprecated use `CreateCrmDealRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCrmDealRequest$outboundSchema;
  /** @deprecated use `CreateCrmDealRequest$Outbound` instead. */
  export type Outbound = CreateCrmDealRequest$Outbound;
}

export function createCrmDealRequestToJSON(
  createCrmDealRequest: CreateCrmDealRequest,
): string {
  return JSON.stringify(
    CreateCrmDealRequest$outboundSchema.parse(createCrmDealRequest),
  );
}

export function createCrmDealRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateCrmDealRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCrmDealRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCrmDealRequest' from JSON`,
  );
}
