/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListMarketingautomationCampaignsRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original software.
     */
    remoteData?: boolean | undefined;
    /**
     * Set to get the number of records.
     */
    limit?: number | undefined;
    /**
     * Set to get the number of records after this cursor.
     */
    cursor?: string | undefined;
};

export type ListMarketingautomationCampaignsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedMarketingautomationCampaignOutput>;
};

/** @internal */
export const ListMarketingautomationCampaignsRequest$inboundSchema: z.ZodType<
    ListMarketingautomationCampaignsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        limit: z.number().optional(),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type ListMarketingautomationCampaignsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListMarketingautomationCampaignsRequest$outboundSchema: z.ZodType<
    ListMarketingautomationCampaignsRequest$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationCampaignsRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        limit: z.number().optional(),
        cursor: z.string().optional(),
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
export namespace ListMarketingautomationCampaignsRequest$ {
    /** @deprecated use `ListMarketingautomationCampaignsRequest$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationCampaignsRequest$inboundSchema;
    /** @deprecated use `ListMarketingautomationCampaignsRequest$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationCampaignsRequest$outboundSchema;
    /** @deprecated use `ListMarketingautomationCampaignsRequest$Outbound` instead. */
    export type Outbound = ListMarketingautomationCampaignsRequest$Outbound;
}

/** @internal */
export const ListMarketingautomationCampaignsResponseBody$inboundSchema: z.ZodType<
    ListMarketingautomationCampaignsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedMarketingautomationCampaignOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListMarketingautomationCampaignsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedMarketingautomationCampaignOutput$Outbound>;
};

/** @internal */
export const ListMarketingautomationCampaignsResponseBody$outboundSchema: z.ZodType<
    ListMarketingautomationCampaignsResponseBody$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationCampaignsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedMarketingautomationCampaignOutput$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prevCursor: "prev_cursor",
            nextCursor: "next_cursor",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMarketingautomationCampaignsResponseBody$ {
    /** @deprecated use `ListMarketingautomationCampaignsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationCampaignsResponseBody$inboundSchema;
    /** @deprecated use `ListMarketingautomationCampaignsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationCampaignsResponseBody$outboundSchema;
    /** @deprecated use `ListMarketingautomationCampaignsResponseBody$Outbound` instead. */
    export type Outbound = ListMarketingautomationCampaignsResponseBody$Outbound;
}