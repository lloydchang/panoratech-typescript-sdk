/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAccountingTaxRateRequest = {
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

export type ListAccountingTaxRateResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAccountingTaxrateOutput>;
};

export type ListAccountingTaxRateResponse = {
    result: ListAccountingTaxRateResponseBody;
};

/** @internal */
export const ListAccountingTaxRateRequest$inboundSchema: z.ZodType<
    ListAccountingTaxRateRequest,
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
export type ListAccountingTaxRateRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListAccountingTaxRateRequest$outboundSchema: z.ZodType<
    ListAccountingTaxRateRequest$Outbound,
    z.ZodTypeDef,
    ListAccountingTaxRateRequest
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
export namespace ListAccountingTaxRateRequest$ {
    /** @deprecated use `ListAccountingTaxRateRequest$inboundSchema` instead. */
    export const inboundSchema = ListAccountingTaxRateRequest$inboundSchema;
    /** @deprecated use `ListAccountingTaxRateRequest$outboundSchema` instead. */
    export const outboundSchema = ListAccountingTaxRateRequest$outboundSchema;
    /** @deprecated use `ListAccountingTaxRateRequest$Outbound` instead. */
    export type Outbound = ListAccountingTaxRateRequest$Outbound;
}

/** @internal */
export const ListAccountingTaxRateResponseBody$inboundSchema: z.ZodType<
    ListAccountingTaxRateResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingTaxrateOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAccountingTaxRateResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAccountingTaxrateOutput$Outbound>;
};

/** @internal */
export const ListAccountingTaxRateResponseBody$outboundSchema: z.ZodType<
    ListAccountingTaxRateResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingTaxRateResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingTaxrateOutput$outboundSchema),
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
export namespace ListAccountingTaxRateResponseBody$ {
    /** @deprecated use `ListAccountingTaxRateResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAccountingTaxRateResponseBody$inboundSchema;
    /** @deprecated use `ListAccountingTaxRateResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAccountingTaxRateResponseBody$outboundSchema;
    /** @deprecated use `ListAccountingTaxRateResponseBody$Outbound` instead. */
    export type Outbound = ListAccountingTaxRateResponseBody$Outbound;
}

/** @internal */
export const ListAccountingTaxRateResponse$inboundSchema: z.ZodType<
    ListAccountingTaxRateResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListAccountingTaxRateResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListAccountingTaxRateResponse$Outbound = {
    Result: ListAccountingTaxRateResponseBody$Outbound;
};

/** @internal */
export const ListAccountingTaxRateResponse$outboundSchema: z.ZodType<
    ListAccountingTaxRateResponse$Outbound,
    z.ZodTypeDef,
    ListAccountingTaxRateResponse
> = z
    .object({
        result: z.lazy(() => ListAccountingTaxRateResponseBody$outboundSchema),
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
export namespace ListAccountingTaxRateResponse$ {
    /** @deprecated use `ListAccountingTaxRateResponse$inboundSchema` instead. */
    export const inboundSchema = ListAccountingTaxRateResponse$inboundSchema;
    /** @deprecated use `ListAccountingTaxRateResponse$outboundSchema` instead. */
    export const outboundSchema = ListAccountingTaxRateResponse$outboundSchema;
    /** @deprecated use `ListAccountingTaxRateResponse$Outbound` instead. */
    export type Outbound = ListAccountingTaxRateResponse$Outbound;
}
