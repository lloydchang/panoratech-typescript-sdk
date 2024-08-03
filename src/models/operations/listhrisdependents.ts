/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListHrisDependentsRequest = {
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

export type ListHrisDependentsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedHrisDependentOutput>;
};

/** @internal */
export const ListHrisDependentsRequest$inboundSchema: z.ZodType<
    ListHrisDependentsRequest,
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
export type ListHrisDependentsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListHrisDependentsRequest$outboundSchema: z.ZodType<
    ListHrisDependentsRequest$Outbound,
    z.ZodTypeDef,
    ListHrisDependentsRequest
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
export namespace ListHrisDependentsRequest$ {
    /** @deprecated use `ListHrisDependentsRequest$inboundSchema` instead. */
    export const inboundSchema = ListHrisDependentsRequest$inboundSchema;
    /** @deprecated use `ListHrisDependentsRequest$outboundSchema` instead. */
    export const outboundSchema = ListHrisDependentsRequest$outboundSchema;
    /** @deprecated use `ListHrisDependentsRequest$Outbound` instead. */
    export type Outbound = ListHrisDependentsRequest$Outbound;
}

/** @internal */
export const ListHrisDependentsResponseBody$inboundSchema: z.ZodType<
    ListHrisDependentsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedHrisDependentOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListHrisDependentsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedHrisDependentOutput$Outbound>;
};

/** @internal */
export const ListHrisDependentsResponseBody$outboundSchema: z.ZodType<
    ListHrisDependentsResponseBody$Outbound,
    z.ZodTypeDef,
    ListHrisDependentsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedHrisDependentOutput$outboundSchema),
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
export namespace ListHrisDependentsResponseBody$ {
    /** @deprecated use `ListHrisDependentsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListHrisDependentsResponseBody$inboundSchema;
    /** @deprecated use `ListHrisDependentsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListHrisDependentsResponseBody$outboundSchema;
    /** @deprecated use `ListHrisDependentsResponseBody$Outbound` instead. */
    export type Outbound = ListHrisDependentsResponseBody$Outbound;
}
