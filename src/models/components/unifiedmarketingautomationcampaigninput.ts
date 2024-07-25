/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedMarketingautomationCampaignInput = {};

/** @internal */
export const UnifiedMarketingautomationCampaignInput$inboundSchema: z.ZodType<
    UnifiedMarketingautomationCampaignInput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedMarketingautomationCampaignInput$Outbound = {};

/** @internal */
export const UnifiedMarketingautomationCampaignInput$outboundSchema: z.ZodType<
    UnifiedMarketingautomationCampaignInput$Outbound,
    z.ZodTypeDef,
    UnifiedMarketingautomationCampaignInput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedMarketingautomationCampaignInput$ {
    /** @deprecated use `UnifiedMarketingautomationCampaignInput$inboundSchema` instead. */
    export const inboundSchema = UnifiedMarketingautomationCampaignInput$inboundSchema;
    /** @deprecated use `UnifiedMarketingautomationCampaignInput$outboundSchema` instead. */
    export const outboundSchema = UnifiedMarketingautomationCampaignInput$outboundSchema;
    /** @deprecated use `UnifiedMarketingautomationCampaignInput$Outbound` instead. */
    export type Outbound = UnifiedMarketingautomationCampaignInput$Outbound;
}
