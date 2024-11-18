/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateAccountingAccountRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * Set to true to include data from the original Accounting software.
   */
  remoteData?: boolean | undefined;
  unifiedAccountingAccountInput: components.UnifiedAccountingAccountInput;
};

/** @internal */
export const CreateAccountingAccountRequest$inboundSchema: z.ZodType<
  CreateAccountingAccountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  UnifiedAccountingAccountInput:
    components.UnifiedAccountingAccountInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
    "UnifiedAccountingAccountInput": "unifiedAccountingAccountInput",
  });
});

/** @internal */
export type CreateAccountingAccountRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  UnifiedAccountingAccountInput:
    components.UnifiedAccountingAccountInput$Outbound;
};

/** @internal */
export const CreateAccountingAccountRequest$outboundSchema: z.ZodType<
  CreateAccountingAccountRequest$Outbound,
  z.ZodTypeDef,
  CreateAccountingAccountRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  unifiedAccountingAccountInput:
    components.UnifiedAccountingAccountInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
    unifiedAccountingAccountInput: "UnifiedAccountingAccountInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountingAccountRequest$ {
  /** @deprecated use `CreateAccountingAccountRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAccountingAccountRequest$inboundSchema;
  /** @deprecated use `CreateAccountingAccountRequest$outboundSchema` instead. */
  export const outboundSchema = CreateAccountingAccountRequest$outboundSchema;
  /** @deprecated use `CreateAccountingAccountRequest$Outbound` instead. */
  export type Outbound = CreateAccountingAccountRequest$Outbound;
}

export function createAccountingAccountRequestToJSON(
  createAccountingAccountRequest: CreateAccountingAccountRequest,
): string {
  return JSON.stringify(
    CreateAccountingAccountRequest$outboundSchema.parse(
      createAccountingAccountRequest,
    ),
  );
}

export function createAccountingAccountRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateAccountingAccountRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAccountingAccountRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAccountingAccountRequest' from JSON`,
  );
}
