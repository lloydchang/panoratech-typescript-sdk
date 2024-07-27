/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAccountingIncomeStatementRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the incomestatement you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAccountingIncomeStatementResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAccountingIncomestatementOutput?:
        | components.UnifiedAccountingIncomestatementOutput
        | undefined;
};

/** @internal */
export const RetrieveAccountingIncomeStatementRequest$inboundSchema: z.ZodType<
    RetrieveAccountingIncomeStatementRequest,
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
export type RetrieveAccountingIncomeStatementRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingIncomeStatementRequest$outboundSchema: z.ZodType<
    RetrieveAccountingIncomeStatementRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingIncomeStatementRequest
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
export namespace RetrieveAccountingIncomeStatementRequest$ {
    /** @deprecated use `RetrieveAccountingIncomeStatementRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingIncomeStatementRequest$inboundSchema;
    /** @deprecated use `RetrieveAccountingIncomeStatementRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingIncomeStatementRequest$outboundSchema;
    /** @deprecated use `RetrieveAccountingIncomeStatementRequest$Outbound` instead. */
    export type Outbound = RetrieveAccountingIncomeStatementRequest$Outbound;
}

/** @internal */
export const RetrieveAccountingIncomeStatementResponse$inboundSchema: z.ZodType<
    RetrieveAccountingIncomeStatementResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAccountingIncomestatementOutput:
            components.UnifiedAccountingIncomestatementOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAccountingIncomestatementOutput: "unifiedAccountingIncomestatementOutput",
        });
    });

/** @internal */
export type RetrieveAccountingIncomeStatementResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAccountingIncomestatementOutput?:
        | components.UnifiedAccountingIncomestatementOutput$Outbound
        | undefined;
};

/** @internal */
export const RetrieveAccountingIncomeStatementResponse$outboundSchema: z.ZodType<
    RetrieveAccountingIncomeStatementResponse$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingIncomeStatementResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAccountingIncomestatementOutput:
            components.UnifiedAccountingIncomestatementOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAccountingIncomestatementOutput: "UnifiedAccountingIncomestatementOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAccountingIncomeStatementResponse$ {
    /** @deprecated use `RetrieveAccountingIncomeStatementResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingIncomeStatementResponse$inboundSchema;
    /** @deprecated use `RetrieveAccountingIncomeStatementResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingIncomeStatementResponse$outboundSchema;
    /** @deprecated use `RetrieveAccountingIncomeStatementResponse$Outbound` instead. */
    export type Outbound = RetrieveAccountingIncomeStatementResponse$Outbound;
}
