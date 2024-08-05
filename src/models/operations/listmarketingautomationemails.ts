/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListMarketingautomationEmailsRequest = {
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

export type ListMarketingautomationEmailsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedMarketingautomationEmailOutput>;
};

/** @internal */
export const ListMarketingautomationEmailsRequest$inboundSchema: z.ZodType<
    ListMarketingautomationEmailsRequest,
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
export type ListMarketingautomationEmailsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListMarketingautomationEmailsRequest$outboundSchema: z.ZodType<
    ListMarketingautomationEmailsRequest$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationEmailsRequest
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
export namespace ListMarketingautomationEmailsRequest$ {
    /** @deprecated use `ListMarketingautomationEmailsRequest$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationEmailsRequest$inboundSchema;
    /** @deprecated use `ListMarketingautomationEmailsRequest$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationEmailsRequest$outboundSchema;
    /** @deprecated use `ListMarketingautomationEmailsRequest$Outbound` instead. */
    export type Outbound = ListMarketingautomationEmailsRequest$Outbound;
}

/** @internal */
export const ListMarketingautomationEmailsResponseBody$inboundSchema: z.ZodType<
    ListMarketingautomationEmailsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedMarketingautomationEmailOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListMarketingautomationEmailsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedMarketingautomationEmailOutput$Outbound>;
};

/** @internal */
export const ListMarketingautomationEmailsResponseBody$outboundSchema: z.ZodType<
    ListMarketingautomationEmailsResponseBody$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationEmailsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedMarketingautomationEmailOutput$outboundSchema),
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
export namespace ListMarketingautomationEmailsResponseBody$ {
    /** @deprecated use `ListMarketingautomationEmailsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationEmailsResponseBody$inboundSchema;
    /** @deprecated use `ListMarketingautomationEmailsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationEmailsResponseBody$outboundSchema;
    /** @deprecated use `ListMarketingautomationEmailsResponseBody$Outbound` instead. */
    export type Outbound = ListMarketingautomationEmailsResponseBody$Outbound;
}
