/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedMarketingautomationActionInput = {};

/** @internal */
export const UnifiedMarketingautomationActionInput$inboundSchema: z.ZodType<
    UnifiedMarketingautomationActionInput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedMarketingautomationActionInput$Outbound = {};

/** @internal */
export const UnifiedMarketingautomationActionInput$outboundSchema: z.ZodType<
    UnifiedMarketingautomationActionInput$Outbound,
    z.ZodTypeDef,
    UnifiedMarketingautomationActionInput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedMarketingautomationActionInput$ {
    /** @deprecated use `UnifiedMarketingautomationActionInput$inboundSchema` instead. */
    export const inboundSchema = UnifiedMarketingautomationActionInput$inboundSchema;
    /** @deprecated use `UnifiedMarketingautomationActionInput$outboundSchema` instead. */
    export const outboundSchema = UnifiedMarketingautomationActionInput$outboundSchema;
    /** @deprecated use `UnifiedMarketingautomationActionInput$Outbound` instead. */
    export type Outbound = UnifiedMarketingautomationActionInput$Outbound;
}
