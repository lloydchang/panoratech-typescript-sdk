/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListMarketingautomationCampaignRequest = {
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

export type ListMarketingautomationCampaignResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedCampaignOutput>;
};

export type ListMarketingautomationCampaignResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListMarketingautomationCampaignResponseBody | undefined;
};

/** @internal */
export const ListMarketingautomationCampaignRequest$inboundSchema: z.ZodType<
    ListMarketingautomationCampaignRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        limit: z.number().default(50),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type ListMarketingautomationCampaignRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListMarketingautomationCampaignRequest$outboundSchema: z.ZodType<
    ListMarketingautomationCampaignRequest$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationCampaignRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        limit: z.number().default(50),
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
export namespace ListMarketingautomationCampaignRequest$ {
    /** @deprecated use `ListMarketingautomationCampaignRequest$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationCampaignRequest$inboundSchema;
    /** @deprecated use `ListMarketingautomationCampaignRequest$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationCampaignRequest$outboundSchema;
    /** @deprecated use `ListMarketingautomationCampaignRequest$Outbound` instead. */
    export type Outbound = ListMarketingautomationCampaignRequest$Outbound;
}

/** @internal */
export const ListMarketingautomationCampaignResponseBody$inboundSchema: z.ZodType<
    ListMarketingautomationCampaignResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedCampaignOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListMarketingautomationCampaignResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedCampaignOutput$Outbound>;
};

/** @internal */
export const ListMarketingautomationCampaignResponseBody$outboundSchema: z.ZodType<
    ListMarketingautomationCampaignResponseBody$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationCampaignResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedCampaignOutput$outboundSchema),
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
export namespace ListMarketingautomationCampaignResponseBody$ {
    /** @deprecated use `ListMarketingautomationCampaignResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationCampaignResponseBody$inboundSchema;
    /** @deprecated use `ListMarketingautomationCampaignResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationCampaignResponseBody$outboundSchema;
    /** @deprecated use `ListMarketingautomationCampaignResponseBody$Outbound` instead. */
    export type Outbound = ListMarketingautomationCampaignResponseBody$Outbound;
}

/** @internal */
export const ListMarketingautomationCampaignResponse$inboundSchema: z.ZodType<
    ListMarketingautomationCampaignResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListMarketingautomationCampaignResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListMarketingautomationCampaignResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListMarketingautomationCampaignResponseBody$Outbound | undefined;
};

/** @internal */
export const ListMarketingautomationCampaignResponse$outboundSchema: z.ZodType<
    ListMarketingautomationCampaignResponse$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationCampaignResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListMarketingautomationCampaignResponseBody$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMarketingautomationCampaignResponse$ {
    /** @deprecated use `ListMarketingautomationCampaignResponse$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationCampaignResponse$inboundSchema;
    /** @deprecated use `ListMarketingautomationCampaignResponse$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationCampaignResponse$outboundSchema;
    /** @deprecated use `ListMarketingautomationCampaignResponse$Outbound` instead. */
    export type Outbound = ListMarketingautomationCampaignResponse$Outbound;
}
