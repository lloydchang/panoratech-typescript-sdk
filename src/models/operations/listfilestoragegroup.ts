/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListFilestorageGroupRequest = {
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

export type ListFilestorageGroupResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedFilestorageGroupOutput>;
};

/** @internal */
export const ListFilestorageGroupRequest$inboundSchema: z.ZodType<
    ListFilestorageGroupRequest,
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
export type ListFilestorageGroupRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListFilestorageGroupRequest$outboundSchema: z.ZodType<
    ListFilestorageGroupRequest$Outbound,
    z.ZodTypeDef,
    ListFilestorageGroupRequest
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
export namespace ListFilestorageGroupRequest$ {
    /** @deprecated use `ListFilestorageGroupRequest$inboundSchema` instead. */
    export const inboundSchema = ListFilestorageGroupRequest$inboundSchema;
    /** @deprecated use `ListFilestorageGroupRequest$outboundSchema` instead. */
    export const outboundSchema = ListFilestorageGroupRequest$outboundSchema;
    /** @deprecated use `ListFilestorageGroupRequest$Outbound` instead. */
    export type Outbound = ListFilestorageGroupRequest$Outbound;
}

/** @internal */
export const ListFilestorageGroupResponseBody$inboundSchema: z.ZodType<
    ListFilestorageGroupResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedFilestorageGroupOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListFilestorageGroupResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedFilestorageGroupOutput$Outbound>;
};

/** @internal */
export const ListFilestorageGroupResponseBody$outboundSchema: z.ZodType<
    ListFilestorageGroupResponseBody$Outbound,
    z.ZodTypeDef,
    ListFilestorageGroupResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedFilestorageGroupOutput$outboundSchema),
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
export namespace ListFilestorageGroupResponseBody$ {
    /** @deprecated use `ListFilestorageGroupResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListFilestorageGroupResponseBody$inboundSchema;
    /** @deprecated use `ListFilestorageGroupResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListFilestorageGroupResponseBody$outboundSchema;
    /** @deprecated use `ListFilestorageGroupResponseBody$Outbound` instead. */
    export type Outbound = ListFilestorageGroupResponseBody$Outbound;
}
