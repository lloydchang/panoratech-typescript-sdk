/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAtsApplicationRequest = {
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

export type ListAtsApplicationResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAtsApplicationOutput>;
};

/** @internal */
export const ListAtsApplicationRequest$inboundSchema: z.ZodType<
    ListAtsApplicationRequest,
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
export type ListAtsApplicationRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListAtsApplicationRequest$outboundSchema: z.ZodType<
    ListAtsApplicationRequest$Outbound,
    z.ZodTypeDef,
    ListAtsApplicationRequest
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
export namespace ListAtsApplicationRequest$ {
    /** @deprecated use `ListAtsApplicationRequest$inboundSchema` instead. */
    export const inboundSchema = ListAtsApplicationRequest$inboundSchema;
    /** @deprecated use `ListAtsApplicationRequest$outboundSchema` instead. */
    export const outboundSchema = ListAtsApplicationRequest$outboundSchema;
    /** @deprecated use `ListAtsApplicationRequest$Outbound` instead. */
    export type Outbound = ListAtsApplicationRequest$Outbound;
}

/** @internal */
export const ListAtsApplicationResponseBody$inboundSchema: z.ZodType<
    ListAtsApplicationResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAtsApplicationOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAtsApplicationResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAtsApplicationOutput$Outbound>;
};

/** @internal */
export const ListAtsApplicationResponseBody$outboundSchema: z.ZodType<
    ListAtsApplicationResponseBody$Outbound,
    z.ZodTypeDef,
    ListAtsApplicationResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAtsApplicationOutput$outboundSchema),
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
export namespace ListAtsApplicationResponseBody$ {
    /** @deprecated use `ListAtsApplicationResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAtsApplicationResponseBody$inboundSchema;
    /** @deprecated use `ListAtsApplicationResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAtsApplicationResponseBody$outboundSchema;
    /** @deprecated use `ListAtsApplicationResponseBody$Outbound` instead. */
    export type Outbound = ListAtsApplicationResponseBody$Outbound;
}
