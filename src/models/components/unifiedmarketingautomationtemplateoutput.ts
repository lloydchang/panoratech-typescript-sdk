/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UnifiedMarketingautomationTemplateOutput = {};

/** @internal */
export const UnifiedMarketingautomationTemplateOutput$inboundSchema: z.ZodType<
  UnifiedMarketingautomationTemplateOutput,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UnifiedMarketingautomationTemplateOutput$Outbound = {};

/** @internal */
export const UnifiedMarketingautomationTemplateOutput$outboundSchema: z.ZodType<
  UnifiedMarketingautomationTemplateOutput$Outbound,
  z.ZodTypeDef,
  UnifiedMarketingautomationTemplateOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedMarketingautomationTemplateOutput$ {
  /** @deprecated use `UnifiedMarketingautomationTemplateOutput$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedMarketingautomationTemplateOutput$inboundSchema;
  /** @deprecated use `UnifiedMarketingautomationTemplateOutput$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedMarketingautomationTemplateOutput$outboundSchema;
  /** @deprecated use `UnifiedMarketingautomationTemplateOutput$Outbound` instead. */
  export type Outbound = UnifiedMarketingautomationTemplateOutput$Outbound;
}

export function unifiedMarketingautomationTemplateOutputToJSON(
  unifiedMarketingautomationTemplateOutput:
    UnifiedMarketingautomationTemplateOutput,
): string {
  return JSON.stringify(
    UnifiedMarketingautomationTemplateOutput$outboundSchema.parse(
      unifiedMarketingautomationTemplateOutput,
    ),
  );
}

export function unifiedMarketingautomationTemplateOutputFromJSON(
  jsonString: string,
): SafeParseResult<
  UnifiedMarketingautomationTemplateOutput,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UnifiedMarketingautomationTemplateOutput$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UnifiedMarketingautomationTemplateOutput' from JSON`,
  );
}
