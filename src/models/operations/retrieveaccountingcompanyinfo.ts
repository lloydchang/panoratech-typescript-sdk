/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAccountingCompanyInfoRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the companyinfo you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAccountingCompanyInfoResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAccountingCompanyinfoOutput?: components.UnifiedAccountingCompanyinfoOutput | undefined;
};

/** @internal */
export const RetrieveAccountingCompanyInfoRequest$inboundSchema: z.ZodType<
    RetrieveAccountingCompanyInfoRequest,
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
export type RetrieveAccountingCompanyInfoRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingCompanyInfoRequest$outboundSchema: z.ZodType<
    RetrieveAccountingCompanyInfoRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingCompanyInfoRequest
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
export namespace RetrieveAccountingCompanyInfoRequest$ {
    /** @deprecated use `RetrieveAccountingCompanyInfoRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingCompanyInfoRequest$inboundSchema;
    /** @deprecated use `RetrieveAccountingCompanyInfoRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingCompanyInfoRequest$outboundSchema;
    /** @deprecated use `RetrieveAccountingCompanyInfoRequest$Outbound` instead. */
    export type Outbound = RetrieveAccountingCompanyInfoRequest$Outbound;
}

/** @internal */
export const RetrieveAccountingCompanyInfoResponse$inboundSchema: z.ZodType<
    RetrieveAccountingCompanyInfoResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAccountingCompanyinfoOutput:
            components.UnifiedAccountingCompanyinfoOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAccountingCompanyinfoOutput: "unifiedAccountingCompanyinfoOutput",
        });
    });

/** @internal */
export type RetrieveAccountingCompanyInfoResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAccountingCompanyinfoOutput?:
        | components.UnifiedAccountingCompanyinfoOutput$Outbound
        | undefined;
};

/** @internal */
export const RetrieveAccountingCompanyInfoResponse$outboundSchema: z.ZodType<
    RetrieveAccountingCompanyInfoResponse$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingCompanyInfoResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAccountingCompanyinfoOutput:
            components.UnifiedAccountingCompanyinfoOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAccountingCompanyinfoOutput: "UnifiedAccountingCompanyinfoOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAccountingCompanyInfoResponse$ {
    /** @deprecated use `RetrieveAccountingCompanyInfoResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingCompanyInfoResponse$inboundSchema;
    /** @deprecated use `RetrieveAccountingCompanyInfoResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingCompanyInfoResponse$outboundSchema;
    /** @deprecated use `RetrieveAccountingCompanyInfoResponse$Outbound` instead. */
    export type Outbound = RetrieveAccountingCompanyInfoResponse$Outbound;
}
