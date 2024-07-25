/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAtsOfferRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the offer you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAtsOfferResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAtsOfferOutput?: components.UnifiedAtsOfferOutput | undefined;
};

/** @internal */
export const RetrieveAtsOfferRequest$inboundSchema: z.ZodType<
    RetrieveAtsOfferRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        id: z.string(),
        remote_data: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type RetrieveAtsOfferRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAtsOfferRequest$outboundSchema: z.ZodType<
    RetrieveAtsOfferRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAtsOfferRequest
> = z
    .object({
        xConnectionToken: z.string(),
        id: z.string(),
        remoteData: z.boolean().optional(),
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
export namespace RetrieveAtsOfferRequest$ {
    /** @deprecated use `RetrieveAtsOfferRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAtsOfferRequest$inboundSchema;
    /** @deprecated use `RetrieveAtsOfferRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAtsOfferRequest$outboundSchema;
    /** @deprecated use `RetrieveAtsOfferRequest$Outbound` instead. */
    export type Outbound = RetrieveAtsOfferRequest$Outbound;
}

/** @internal */
export const RetrieveAtsOfferResponse$inboundSchema: z.ZodType<
    RetrieveAtsOfferResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAtsOfferOutput: components.UnifiedAtsOfferOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAtsOfferOutput: "unifiedAtsOfferOutput",
        });
    });

/** @internal */
export type RetrieveAtsOfferResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAtsOfferOutput?: components.UnifiedAtsOfferOutput$Outbound | undefined;
};

/** @internal */
export const RetrieveAtsOfferResponse$outboundSchema: z.ZodType<
    RetrieveAtsOfferResponse$Outbound,
    z.ZodTypeDef,
    RetrieveAtsOfferResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAtsOfferOutput: components.UnifiedAtsOfferOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAtsOfferOutput: "UnifiedAtsOfferOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAtsOfferResponse$ {
    /** @deprecated use `RetrieveAtsOfferResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveAtsOfferResponse$inboundSchema;
    /** @deprecated use `RetrieveAtsOfferResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveAtsOfferResponse$outboundSchema;
    /** @deprecated use `RetrieveAtsOfferResponse$Outbound` instead. */
    export type Outbound = RetrieveAtsOfferResponse$Outbound;
}
