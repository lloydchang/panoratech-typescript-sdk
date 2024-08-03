/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type RetrieveAccountingVendorCreditRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the vendorcredit you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingVendorCreditRequest$inboundSchema: z.ZodType<
    RetrieveAccountingVendorCreditRequest,
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
export type RetrieveAccountingVendorCreditRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingVendorCreditRequest$outboundSchema: z.ZodType<
    RetrieveAccountingVendorCreditRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingVendorCreditRequest
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
export namespace RetrieveAccountingVendorCreditRequest$ {
    /** @deprecated use `RetrieveAccountingVendorCreditRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingVendorCreditRequest$inboundSchema;
    /** @deprecated use `RetrieveAccountingVendorCreditRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingVendorCreditRequest$outboundSchema;
    /** @deprecated use `RetrieveAccountingVendorCreditRequest$Outbound` instead. */
    export type Outbound = RetrieveAccountingVendorCreditRequest$Outbound;
}
