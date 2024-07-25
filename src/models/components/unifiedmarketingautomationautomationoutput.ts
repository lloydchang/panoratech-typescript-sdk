/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedMarketingautomationAutomationOutput = {};

/** @internal */
export const UnifiedMarketingautomationAutomationOutput$inboundSchema: z.ZodType<
    UnifiedMarketingautomationAutomationOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedMarketingautomationAutomationOutput$Outbound = {};

/** @internal */
export const UnifiedMarketingautomationAutomationOutput$outboundSchema: z.ZodType<
    UnifiedMarketingautomationAutomationOutput$Outbound,
    z.ZodTypeDef,
    UnifiedMarketingautomationAutomationOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedMarketingautomationAutomationOutput$ {
    /** @deprecated use `UnifiedMarketingautomationAutomationOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedMarketingautomationAutomationOutput$inboundSchema;
    /** @deprecated use `UnifiedMarketingautomationAutomationOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedMarketingautomationAutomationOutput$outboundSchema;
    /** @deprecated use `UnifiedMarketingautomationAutomationOutput$Outbound` instead. */
    export type Outbound = UnifiedMarketingautomationAutomationOutput$Outbound;
}
