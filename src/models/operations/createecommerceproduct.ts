/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateEcommerceProductRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * Set to true to include data from the original Accounting software.
   */
  remoteData?: boolean | undefined;
  unifiedEcommerceProductInput: components.UnifiedEcommerceProductInput;
};

/** @internal */
export const CreateEcommerceProductRequest$inboundSchema: z.ZodType<
  CreateEcommerceProductRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  UnifiedEcommerceProductInput:
    components.UnifiedEcommerceProductInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
    "UnifiedEcommerceProductInput": "unifiedEcommerceProductInput",
  });
});

/** @internal */
export type CreateEcommerceProductRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  UnifiedEcommerceProductInput:
    components.UnifiedEcommerceProductInput$Outbound;
};

/** @internal */
export const CreateEcommerceProductRequest$outboundSchema: z.ZodType<
  CreateEcommerceProductRequest$Outbound,
  z.ZodTypeDef,
  CreateEcommerceProductRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  unifiedEcommerceProductInput:
    components.UnifiedEcommerceProductInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
    unifiedEcommerceProductInput: "UnifiedEcommerceProductInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEcommerceProductRequest$ {
  /** @deprecated use `CreateEcommerceProductRequest$inboundSchema` instead. */
  export const inboundSchema = CreateEcommerceProductRequest$inboundSchema;
  /** @deprecated use `CreateEcommerceProductRequest$outboundSchema` instead. */
  export const outboundSchema = CreateEcommerceProductRequest$outboundSchema;
  /** @deprecated use `CreateEcommerceProductRequest$Outbound` instead. */
  export type Outbound = CreateEcommerceProductRequest$Outbound;
}

export function createEcommerceProductRequestToJSON(
  createEcommerceProductRequest: CreateEcommerceProductRequest,
): string {
  return JSON.stringify(
    CreateEcommerceProductRequest$outboundSchema.parse(
      createEcommerceProductRequest,
    ),
  );
}

export function createEcommerceProductRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateEcommerceProductRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateEcommerceProductRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateEcommerceProductRequest' from JSON`,
  );
}
