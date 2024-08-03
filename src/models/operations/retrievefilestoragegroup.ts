/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type RetrieveFilestorageGroupRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the permission you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original File Storage software.
     */
    remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveFilestorageGroupRequest$inboundSchema: z.ZodType<
    RetrieveFilestorageGroupRequest,
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
export type RetrieveFilestorageGroupRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveFilestorageGroupRequest$outboundSchema: z.ZodType<
    RetrieveFilestorageGroupRequest$Outbound,
    z.ZodTypeDef,
    RetrieveFilestorageGroupRequest
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
export namespace RetrieveFilestorageGroupRequest$ {
    /** @deprecated use `RetrieveFilestorageGroupRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveFilestorageGroupRequest$inboundSchema;
    /** @deprecated use `RetrieveFilestorageGroupRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveFilestorageGroupRequest$outboundSchema;
    /** @deprecated use `RetrieveFilestorageGroupRequest$Outbound` instead. */
    export type Outbound = RetrieveFilestorageGroupRequest$Outbound;
}
