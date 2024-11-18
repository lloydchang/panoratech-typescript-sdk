/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateCrmNoteRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * Set to true to include data from the original Crm software.
   */
  remoteData?: boolean | undefined;
  unifiedCrmNoteInput: components.UnifiedCrmNoteInput;
};

/** @internal */
export const CreateCrmNoteRequest$inboundSchema: z.ZodType<
  CreateCrmNoteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  UnifiedCrmNoteInput: components.UnifiedCrmNoteInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
    "UnifiedCrmNoteInput": "unifiedCrmNoteInput",
  });
});

/** @internal */
export type CreateCrmNoteRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  UnifiedCrmNoteInput: components.UnifiedCrmNoteInput$Outbound;
};

/** @internal */
export const CreateCrmNoteRequest$outboundSchema: z.ZodType<
  CreateCrmNoteRequest$Outbound,
  z.ZodTypeDef,
  CreateCrmNoteRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  unifiedCrmNoteInput: components.UnifiedCrmNoteInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
    unifiedCrmNoteInput: "UnifiedCrmNoteInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCrmNoteRequest$ {
  /** @deprecated use `CreateCrmNoteRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCrmNoteRequest$inboundSchema;
  /** @deprecated use `CreateCrmNoteRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCrmNoteRequest$outboundSchema;
  /** @deprecated use `CreateCrmNoteRequest$Outbound` instead. */
  export type Outbound = CreateCrmNoteRequest$Outbound;
}

export function createCrmNoteRequestToJSON(
  createCrmNoteRequest: CreateCrmNoteRequest,
): string {
  return JSON.stringify(
    CreateCrmNoteRequest$outboundSchema.parse(createCrmNoteRequest),
  );
}

export function createCrmNoteRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateCrmNoteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCrmNoteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCrmNoteRequest' from JSON`,
  );
}
