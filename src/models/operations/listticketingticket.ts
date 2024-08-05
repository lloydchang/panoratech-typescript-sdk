/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListTicketingTicketRequest = {
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

export type ListTicketingTicketResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedTicketingTicketOutput>;
};

/** @internal */
export const ListTicketingTicketRequest$inboundSchema: z.ZodType<
    ListTicketingTicketRequest,
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
export type ListTicketingTicketRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListTicketingTicketRequest$outboundSchema: z.ZodType<
    ListTicketingTicketRequest$Outbound,
    z.ZodTypeDef,
    ListTicketingTicketRequest
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
export namespace ListTicketingTicketRequest$ {
    /** @deprecated use `ListTicketingTicketRequest$inboundSchema` instead. */
    export const inboundSchema = ListTicketingTicketRequest$inboundSchema;
    /** @deprecated use `ListTicketingTicketRequest$outboundSchema` instead. */
    export const outboundSchema = ListTicketingTicketRequest$outboundSchema;
    /** @deprecated use `ListTicketingTicketRequest$Outbound` instead. */
    export type Outbound = ListTicketingTicketRequest$Outbound;
}

/** @internal */
export const ListTicketingTicketResponseBody$inboundSchema: z.ZodType<
    ListTicketingTicketResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedTicketingTicketOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListTicketingTicketResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedTicketingTicketOutput$Outbound>;
};

/** @internal */
export const ListTicketingTicketResponseBody$outboundSchema: z.ZodType<
    ListTicketingTicketResponseBody$Outbound,
    z.ZodTypeDef,
    ListTicketingTicketResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedTicketingTicketOutput$outboundSchema),
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
export namespace ListTicketingTicketResponseBody$ {
    /** @deprecated use `ListTicketingTicketResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListTicketingTicketResponseBody$inboundSchema;
    /** @deprecated use `ListTicketingTicketResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListTicketingTicketResponseBody$outboundSchema;
    /** @deprecated use `ListTicketingTicketResponseBody$Outbound` instead. */
    export type Outbound = ListTicketingTicketResponseBody$Outbound;
}
