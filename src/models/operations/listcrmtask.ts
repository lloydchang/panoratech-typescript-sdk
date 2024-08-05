/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListCrmTaskRequest = {
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

export type ListCrmTaskResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedCrmTaskOutput>;
};

/** @internal */
export const ListCrmTaskRequest$inboundSchema: z.ZodType<
    ListCrmTaskRequest,
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
export type ListCrmTaskRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListCrmTaskRequest$outboundSchema: z.ZodType<
    ListCrmTaskRequest$Outbound,
    z.ZodTypeDef,
    ListCrmTaskRequest
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
export namespace ListCrmTaskRequest$ {
    /** @deprecated use `ListCrmTaskRequest$inboundSchema` instead. */
    export const inboundSchema = ListCrmTaskRequest$inboundSchema;
    /** @deprecated use `ListCrmTaskRequest$outboundSchema` instead. */
    export const outboundSchema = ListCrmTaskRequest$outboundSchema;
    /** @deprecated use `ListCrmTaskRequest$Outbound` instead. */
    export type Outbound = ListCrmTaskRequest$Outbound;
}

/** @internal */
export const ListCrmTaskResponseBody$inboundSchema: z.ZodType<
    ListCrmTaskResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedCrmTaskOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListCrmTaskResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedCrmTaskOutput$Outbound>;
};

/** @internal */
export const ListCrmTaskResponseBody$outboundSchema: z.ZodType<
    ListCrmTaskResponseBody$Outbound,
    z.ZodTypeDef,
    ListCrmTaskResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedCrmTaskOutput$outboundSchema),
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
export namespace ListCrmTaskResponseBody$ {
    /** @deprecated use `ListCrmTaskResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListCrmTaskResponseBody$inboundSchema;
    /** @deprecated use `ListCrmTaskResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListCrmTaskResponseBody$outboundSchema;
    /** @deprecated use `ListCrmTaskResponseBody$Outbound` instead. */
    export type Outbound = ListCrmTaskResponseBody$Outbound;
}
