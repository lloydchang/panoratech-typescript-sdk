/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAccountingAccountRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the account you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAccountingAccountResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAccountingAccountOutput?: components.UnifiedAccountingAccountOutput | undefined;
};

/** @internal */
export const RetrieveAccountingAccountRequest$inboundSchema: z.ZodType<
    RetrieveAccountingAccountRequest,
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
export type RetrieveAccountingAccountRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingAccountRequest$outboundSchema: z.ZodType<
    RetrieveAccountingAccountRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingAccountRequest
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
export namespace RetrieveAccountingAccountRequest$ {
    /** @deprecated use `RetrieveAccountingAccountRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingAccountRequest$inboundSchema;
    /** @deprecated use `RetrieveAccountingAccountRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingAccountRequest$outboundSchema;
    /** @deprecated use `RetrieveAccountingAccountRequest$Outbound` instead. */
    export type Outbound = RetrieveAccountingAccountRequest$Outbound;
}

/** @internal */
export const RetrieveAccountingAccountResponse$inboundSchema: z.ZodType<
    RetrieveAccountingAccountResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAccountingAccountOutput:
            components.UnifiedAccountingAccountOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAccountingAccountOutput: "unifiedAccountingAccountOutput",
        });
    });

/** @internal */
export type RetrieveAccountingAccountResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAccountingAccountOutput?: components.UnifiedAccountingAccountOutput$Outbound | undefined;
};

/** @internal */
export const RetrieveAccountingAccountResponse$outboundSchema: z.ZodType<
    RetrieveAccountingAccountResponse$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingAccountResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAccountingAccountOutput:
            components.UnifiedAccountingAccountOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAccountingAccountOutput: "UnifiedAccountingAccountOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAccountingAccountResponse$ {
    /** @deprecated use `RetrieveAccountingAccountResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingAccountResponse$inboundSchema;
    /** @deprecated use `RetrieveAccountingAccountResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingAccountResponse$outboundSchema;
    /** @deprecated use `RetrieveAccountingAccountResponse$Outbound` instead. */
    export type Outbound = RetrieveAccountingAccountResponse$Outbound;
}
