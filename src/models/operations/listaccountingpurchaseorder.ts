/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAccountingPurchaseOrderRequest = {
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

export type ListAccountingPurchaseOrderResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAccountingPurchaseorderOutput>;
};

/** @internal */
export const ListAccountingPurchaseOrderRequest$inboundSchema: z.ZodType<
    ListAccountingPurchaseOrderRequest,
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
export type ListAccountingPurchaseOrderRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAccountingPurchaseOrderRequest$outboundSchema: z.ZodType<
    ListAccountingPurchaseOrderRequest$Outbound,
    z.ZodTypeDef,
    ListAccountingPurchaseOrderRequest
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
export namespace ListAccountingPurchaseOrderRequest$ {
    /** @deprecated use `ListAccountingPurchaseOrderRequest$inboundSchema` instead. */
    export const inboundSchema = ListAccountingPurchaseOrderRequest$inboundSchema;
    /** @deprecated use `ListAccountingPurchaseOrderRequest$outboundSchema` instead. */
    export const outboundSchema = ListAccountingPurchaseOrderRequest$outboundSchema;
    /** @deprecated use `ListAccountingPurchaseOrderRequest$Outbound` instead. */
    export type Outbound = ListAccountingPurchaseOrderRequest$Outbound;
}

/** @internal */
export const ListAccountingPurchaseOrderResponseBody$inboundSchema: z.ZodType<
    ListAccountingPurchaseOrderResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingPurchaseorderOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAccountingPurchaseOrderResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAccountingPurchaseorderOutput$Outbound>;
};

/** @internal */
export const ListAccountingPurchaseOrderResponseBody$outboundSchema: z.ZodType<
    ListAccountingPurchaseOrderResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingPurchaseOrderResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingPurchaseorderOutput$outboundSchema),
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
export namespace ListAccountingPurchaseOrderResponseBody$ {
    /** @deprecated use `ListAccountingPurchaseOrderResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAccountingPurchaseOrderResponseBody$inboundSchema;
    /** @deprecated use `ListAccountingPurchaseOrderResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAccountingPurchaseOrderResponseBody$outboundSchema;
    /** @deprecated use `ListAccountingPurchaseOrderResponseBody$Outbound` instead. */
    export type Outbound = ListAccountingPurchaseOrderResponseBody$Outbound;
}
