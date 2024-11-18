/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UnifiedMarketingautomationListOutput = {};

/** @internal */
export const UnifiedMarketingautomationListOutput$inboundSchema: z.ZodType<
  UnifiedMarketingautomationListOutput,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UnifiedMarketingautomationListOutput$Outbound = {};

/** @internal */
export const UnifiedMarketingautomationListOutput$outboundSchema: z.ZodType<
  UnifiedMarketingautomationListOutput$Outbound,
  z.ZodTypeDef,
  UnifiedMarketingautomationListOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedMarketingautomationListOutput$ {
  /** @deprecated use `UnifiedMarketingautomationListOutput$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedMarketingautomationListOutput$inboundSchema;
  /** @deprecated use `UnifiedMarketingautomationListOutput$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedMarketingautomationListOutput$outboundSchema;
  /** @deprecated use `UnifiedMarketingautomationListOutput$Outbound` instead. */
  export type Outbound = UnifiedMarketingautomationListOutput$Outbound;
}

export function unifiedMarketingautomationListOutputToJSON(
  unifiedMarketingautomationListOutput: UnifiedMarketingautomationListOutput,
): string {
  return JSON.stringify(
    UnifiedMarketingautomationListOutput$outboundSchema.parse(
      unifiedMarketingautomationListOutput,
    ),
  );
}

export function unifiedMarketingautomationListOutputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedMarketingautomationListOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UnifiedMarketingautomationListOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedMarketingautomationListOutput' from JSON`,
  );
}
