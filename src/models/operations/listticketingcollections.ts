/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListTicketingCollectionsRequest = {
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

export type ListTicketingCollectionsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedTicketingCollectionOutput>;
};

/** @internal */
export const ListTicketingCollectionsRequest$inboundSchema: z.ZodType<
    ListTicketingCollectionsRequest,
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
export type ListTicketingCollectionsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListTicketingCollectionsRequest$outboundSchema: z.ZodType<
    ListTicketingCollectionsRequest$Outbound,
    z.ZodTypeDef,
    ListTicketingCollectionsRequest
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
export namespace ListTicketingCollectionsRequest$ {
    /** @deprecated use `ListTicketingCollectionsRequest$inboundSchema` instead. */
    export const inboundSchema = ListTicketingCollectionsRequest$inboundSchema;
    /** @deprecated use `ListTicketingCollectionsRequest$outboundSchema` instead. */
    export const outboundSchema = ListTicketingCollectionsRequest$outboundSchema;
    /** @deprecated use `ListTicketingCollectionsRequest$Outbound` instead. */
    export type Outbound = ListTicketingCollectionsRequest$Outbound;
}

/** @internal */
export const ListTicketingCollectionsResponseBody$inboundSchema: z.ZodType<
    ListTicketingCollectionsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedTicketingCollectionOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListTicketingCollectionsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedTicketingCollectionOutput$Outbound>;
};

/** @internal */
export const ListTicketingCollectionsResponseBody$outboundSchema: z.ZodType<
    ListTicketingCollectionsResponseBody$Outbound,
    z.ZodTypeDef,
    ListTicketingCollectionsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedTicketingCollectionOutput$outboundSchema),
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
export namespace ListTicketingCollectionsResponseBody$ {
    /** @deprecated use `ListTicketingCollectionsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListTicketingCollectionsResponseBody$inboundSchema;
    /** @deprecated use `ListTicketingCollectionsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListTicketingCollectionsResponseBody$outboundSchema;
    /** @deprecated use `ListTicketingCollectionsResponseBody$Outbound` instead. */
    export type Outbound = ListTicketingCollectionsResponseBody$Outbound;
}
