/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListEcommerceFulfillmentsRequest = {
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

export type ListEcommerceFulfillmentsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedEcommerceFulfillmentOutput>;
};

export type ListEcommerceFulfillmentsResponse = {
    result: ListEcommerceFulfillmentsResponseBody;
};

/** @internal */
export const ListEcommerceFulfillmentsRequest$inboundSchema: z.ZodType<
    ListEcommerceFulfillmentsRequest,
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
export type ListEcommerceFulfillmentsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListEcommerceFulfillmentsRequest$outboundSchema: z.ZodType<
    ListEcommerceFulfillmentsRequest$Outbound,
    z.ZodTypeDef,
    ListEcommerceFulfillmentsRequest
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
export namespace ListEcommerceFulfillmentsRequest$ {
    /** @deprecated use `ListEcommerceFulfillmentsRequest$inboundSchema` instead. */
    export const inboundSchema = ListEcommerceFulfillmentsRequest$inboundSchema;
    /** @deprecated use `ListEcommerceFulfillmentsRequest$outboundSchema` instead. */
    export const outboundSchema = ListEcommerceFulfillmentsRequest$outboundSchema;
    /** @deprecated use `ListEcommerceFulfillmentsRequest$Outbound` instead. */
    export type Outbound = ListEcommerceFulfillmentsRequest$Outbound;
}

/** @internal */
export const ListEcommerceFulfillmentsResponseBody$inboundSchema: z.ZodType<
    ListEcommerceFulfillmentsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedEcommerceFulfillmentOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListEcommerceFulfillmentsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedEcommerceFulfillmentOutput$Outbound>;
};

/** @internal */
export const ListEcommerceFulfillmentsResponseBody$outboundSchema: z.ZodType<
    ListEcommerceFulfillmentsResponseBody$Outbound,
    z.ZodTypeDef,
    ListEcommerceFulfillmentsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedEcommerceFulfillmentOutput$outboundSchema),
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
export namespace ListEcommerceFulfillmentsResponseBody$ {
    /** @deprecated use `ListEcommerceFulfillmentsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListEcommerceFulfillmentsResponseBody$inboundSchema;
    /** @deprecated use `ListEcommerceFulfillmentsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListEcommerceFulfillmentsResponseBody$outboundSchema;
    /** @deprecated use `ListEcommerceFulfillmentsResponseBody$Outbound` instead. */
    export type Outbound = ListEcommerceFulfillmentsResponseBody$Outbound;
}

/** @internal */
export const ListEcommerceFulfillmentsResponse$inboundSchema: z.ZodType<
    ListEcommerceFulfillmentsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListEcommerceFulfillmentsResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListEcommerceFulfillmentsResponse$Outbound = {
    Result: ListEcommerceFulfillmentsResponseBody$Outbound;
};

/** @internal */
export const ListEcommerceFulfillmentsResponse$outboundSchema: z.ZodType<
    ListEcommerceFulfillmentsResponse$Outbound,
    z.ZodTypeDef,
    ListEcommerceFulfillmentsResponse
> = z
    .object({
        result: z.lazy(() => ListEcommerceFulfillmentsResponseBody$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            result: "Result",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListEcommerceFulfillmentsResponse$ {
    /** @deprecated use `ListEcommerceFulfillmentsResponse$inboundSchema` instead. */
    export const inboundSchema = ListEcommerceFulfillmentsResponse$inboundSchema;
    /** @deprecated use `ListEcommerceFulfillmentsResponse$outboundSchema` instead. */
    export const outboundSchema = ListEcommerceFulfillmentsResponse$outboundSchema;
    /** @deprecated use `ListEcommerceFulfillmentsResponse$Outbound` instead. */
    export type Outbound = ListEcommerceFulfillmentsResponse$Outbound;
}