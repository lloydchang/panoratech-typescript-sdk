/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type PassThroughResponseData = {};

export type PassThroughResponse = {
    url: string;
    status: number;
    data: PassThroughResponseData;
};

/** @internal */
export const PassThroughResponseData$inboundSchema: z.ZodType<
    PassThroughResponseData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type PassThroughResponseData$Outbound = {};

/** @internal */
export const PassThroughResponseData$outboundSchema: z.ZodType<
    PassThroughResponseData$Outbound,
    z.ZodTypeDef,
    PassThroughResponseData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PassThroughResponseData$ {
    /** @deprecated use `PassThroughResponseData$inboundSchema` instead. */
    export const inboundSchema = PassThroughResponseData$inboundSchema;
    /** @deprecated use `PassThroughResponseData$outboundSchema` instead. */
    export const outboundSchema = PassThroughResponseData$outboundSchema;
    /** @deprecated use `PassThroughResponseData$Outbound` instead. */
    export type Outbound = PassThroughResponseData$Outbound;
}

/** @internal */
export const PassThroughResponse$inboundSchema: z.ZodType<
    PassThroughResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    url: z.string(),
    status: z.number(),
    data: z.lazy(() => PassThroughResponseData$inboundSchema),
});

/** @internal */
export type PassThroughResponse$Outbound = {
    url: string;
    status: number;
    data: PassThroughResponseData$Outbound;
};

/** @internal */
export const PassThroughResponse$outboundSchema: z.ZodType<
    PassThroughResponse$Outbound,
    z.ZodTypeDef,
    PassThroughResponse
> = z.object({
    url: z.string(),
    status: z.number(),
    data: z.lazy(() => PassThroughResponseData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PassThroughResponse$ {
    /** @deprecated use `PassThroughResponse$inboundSchema` instead. */
    export const inboundSchema = PassThroughResponse$inboundSchema;
    /** @deprecated use `PassThroughResponse$outboundSchema` instead. */
    export const outboundSchema = PassThroughResponse$outboundSchema;
    /** @deprecated use `PassThroughResponse$Outbound` instead. */
    export type Outbound = PassThroughResponse$Outbound;
}
