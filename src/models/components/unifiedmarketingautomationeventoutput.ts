/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedMarketingautomationEventOutput = {};

/** @internal */
export const UnifiedMarketingautomationEventOutput$inboundSchema: z.ZodType<
    UnifiedMarketingautomationEventOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedMarketingautomationEventOutput$Outbound = {};

/** @internal */
export const UnifiedMarketingautomationEventOutput$outboundSchema: z.ZodType<
    UnifiedMarketingautomationEventOutput$Outbound,
    z.ZodTypeDef,
    UnifiedMarketingautomationEventOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedMarketingautomationEventOutput$ {
    /** @deprecated use `UnifiedMarketingautomationEventOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedMarketingautomationEventOutput$inboundSchema;
    /** @deprecated use `UnifiedMarketingautomationEventOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedMarketingautomationEventOutput$outboundSchema;
    /** @deprecated use `UnifiedMarketingautomationEventOutput$Outbound` instead. */
    export type Outbound = UnifiedMarketingautomationEventOutput$Outbound;
}
