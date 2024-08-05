/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAtsJobInterviewStageRequest = {
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

export type ListAtsJobInterviewStageResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAtsJobinterviewstageOutput>;
};

/** @internal */
export const ListAtsJobInterviewStageRequest$inboundSchema: z.ZodType<
    ListAtsJobInterviewStageRequest,
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
export type ListAtsJobInterviewStageRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListAtsJobInterviewStageRequest$outboundSchema: z.ZodType<
    ListAtsJobInterviewStageRequest$Outbound,
    z.ZodTypeDef,
    ListAtsJobInterviewStageRequest
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
export namespace ListAtsJobInterviewStageRequest$ {
    /** @deprecated use `ListAtsJobInterviewStageRequest$inboundSchema` instead. */
    export const inboundSchema = ListAtsJobInterviewStageRequest$inboundSchema;
    /** @deprecated use `ListAtsJobInterviewStageRequest$outboundSchema` instead. */
    export const outboundSchema = ListAtsJobInterviewStageRequest$outboundSchema;
    /** @deprecated use `ListAtsJobInterviewStageRequest$Outbound` instead. */
    export type Outbound = ListAtsJobInterviewStageRequest$Outbound;
}

/** @internal */
export const ListAtsJobInterviewStageResponseBody$inboundSchema: z.ZodType<
    ListAtsJobInterviewStageResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAtsJobinterviewstageOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAtsJobInterviewStageResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAtsJobinterviewstageOutput$Outbound>;
};

/** @internal */
export const ListAtsJobInterviewStageResponseBody$outboundSchema: z.ZodType<
    ListAtsJobInterviewStageResponseBody$Outbound,
    z.ZodTypeDef,
    ListAtsJobInterviewStageResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAtsJobinterviewstageOutput$outboundSchema),
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
export namespace ListAtsJobInterviewStageResponseBody$ {
    /** @deprecated use `ListAtsJobInterviewStageResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAtsJobInterviewStageResponseBody$inboundSchema;
    /** @deprecated use `ListAtsJobInterviewStageResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAtsJobInterviewStageResponseBody$outboundSchema;
    /** @deprecated use `ListAtsJobInterviewStageResponseBody$Outbound` instead. */
    export type Outbound = ListAtsJobInterviewStageResponseBody$Outbound;
}
