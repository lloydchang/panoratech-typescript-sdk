/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAccountingCashflowStatementRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the cashflowstatement you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAccountingCashflowStatementResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAccountingCashflowstatementOutput?:
        | components.UnifiedAccountingCashflowstatementOutput
        | undefined;
};

/** @internal */
export const RetrieveAccountingCashflowStatementRequest$inboundSchema: z.ZodType<
    RetrieveAccountingCashflowStatementRequest,
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
export type RetrieveAccountingCashflowStatementRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingCashflowStatementRequest$outboundSchema: z.ZodType<
    RetrieveAccountingCashflowStatementRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingCashflowStatementRequest
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
export namespace RetrieveAccountingCashflowStatementRequest$ {
    /** @deprecated use `RetrieveAccountingCashflowStatementRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingCashflowStatementRequest$inboundSchema;
    /** @deprecated use `RetrieveAccountingCashflowStatementRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingCashflowStatementRequest$outboundSchema;
    /** @deprecated use `RetrieveAccountingCashflowStatementRequest$Outbound` instead. */
    export type Outbound = RetrieveAccountingCashflowStatementRequest$Outbound;
}

/** @internal */
export const RetrieveAccountingCashflowStatementResponse$inboundSchema: z.ZodType<
    RetrieveAccountingCashflowStatementResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAccountingCashflowstatementOutput:
            components.UnifiedAccountingCashflowstatementOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAccountingCashflowstatementOutput: "unifiedAccountingCashflowstatementOutput",
        });
    });

/** @internal */
export type RetrieveAccountingCashflowStatementResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAccountingCashflowstatementOutput?:
        | components.UnifiedAccountingCashflowstatementOutput$Outbound
        | undefined;
};

/** @internal */
export const RetrieveAccountingCashflowStatementResponse$outboundSchema: z.ZodType<
    RetrieveAccountingCashflowStatementResponse$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingCashflowStatementResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAccountingCashflowstatementOutput:
            components.UnifiedAccountingCashflowstatementOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAccountingCashflowstatementOutput: "UnifiedAccountingCashflowstatementOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAccountingCashflowStatementResponse$ {
    /** @deprecated use `RetrieveAccountingCashflowStatementResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingCashflowStatementResponse$inboundSchema;
    /** @deprecated use `RetrieveAccountingCashflowStatementResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingCashflowStatementResponse$outboundSchema;
    /** @deprecated use `RetrieveAccountingCashflowStatementResponse$Outbound` instead. */
    export type Outbound = RetrieveAccountingCashflowStatementResponse$Outbound;
}
