/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAccountingBalanceSheetRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the balancesheet you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAccountingBalanceSheetResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAccountingBalancesheetOutput?:
        | components.UnifiedAccountingBalancesheetOutput
        | undefined;
};

/** @internal */
export const RetrieveAccountingBalanceSheetRequest$inboundSchema: z.ZodType<
    RetrieveAccountingBalanceSheetRequest,
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
export type RetrieveAccountingBalanceSheetRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingBalanceSheetRequest$outboundSchema: z.ZodType<
    RetrieveAccountingBalanceSheetRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingBalanceSheetRequest
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
export namespace RetrieveAccountingBalanceSheetRequest$ {
    /** @deprecated use `RetrieveAccountingBalanceSheetRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingBalanceSheetRequest$inboundSchema;
    /** @deprecated use `RetrieveAccountingBalanceSheetRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingBalanceSheetRequest$outboundSchema;
    /** @deprecated use `RetrieveAccountingBalanceSheetRequest$Outbound` instead. */
    export type Outbound = RetrieveAccountingBalanceSheetRequest$Outbound;
}

/** @internal */
export const RetrieveAccountingBalanceSheetResponse$inboundSchema: z.ZodType<
    RetrieveAccountingBalanceSheetResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAccountingBalancesheetOutput:
            components.UnifiedAccountingBalancesheetOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAccountingBalancesheetOutput: "unifiedAccountingBalancesheetOutput",
        });
    });

/** @internal */
export type RetrieveAccountingBalanceSheetResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAccountingBalancesheetOutput?:
        | components.UnifiedAccountingBalancesheetOutput$Outbound
        | undefined;
};

/** @internal */
export const RetrieveAccountingBalanceSheetResponse$outboundSchema: z.ZodType<
    RetrieveAccountingBalanceSheetResponse$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingBalanceSheetResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAccountingBalancesheetOutput:
            components.UnifiedAccountingBalancesheetOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAccountingBalancesheetOutput: "UnifiedAccountingBalancesheetOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAccountingBalanceSheetResponse$ {
    /** @deprecated use `RetrieveAccountingBalanceSheetResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingBalanceSheetResponse$inboundSchema;
    /** @deprecated use `RetrieveAccountingBalanceSheetResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingBalanceSheetResponse$outboundSchema;
    /** @deprecated use `RetrieveAccountingBalanceSheetResponse$Outbound` instead. */
    export type Outbound = RetrieveAccountingBalanceSheetResponse$Outbound;
}
