/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type RetrieveMarketingautomationCampaignRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the campaign you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveMarketingautomationCampaignRequest$inboundSchema: z.ZodType<
    RetrieveMarketingautomationCampaignRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        id: z.string(),
        remote_data: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type RetrieveMarketingautomationCampaignRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveMarketingautomationCampaignRequest$outboundSchema: z.ZodType<
    RetrieveMarketingautomationCampaignRequest$Outbound,
    z.ZodTypeDef,
    RetrieveMarketingautomationCampaignRequest
> = z
    .object({
        xConnectionToken: z.string(),
        id: z.string(),
        remoteData: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveMarketingautomationCampaignRequest$ {
    /** @deprecated use `RetrieveMarketingautomationCampaignRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveMarketingautomationCampaignRequest$inboundSchema;
    /** @deprecated use `RetrieveMarketingautomationCampaignRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveMarketingautomationCampaignRequest$outboundSchema;
    /** @deprecated use `RetrieveMarketingautomationCampaignRequest$Outbound` instead. */
    export type Outbound = RetrieveMarketingautomationCampaignRequest$Outbound;
}
