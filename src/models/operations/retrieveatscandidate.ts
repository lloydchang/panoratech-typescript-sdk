/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type RetrieveAtsCandidateRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the candidate you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveAtsCandidateRequest$inboundSchema: z.ZodType<
    RetrieveAtsCandidateRequest,
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
export type RetrieveAtsCandidateRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAtsCandidateRequest$outboundSchema: z.ZodType<
    RetrieveAtsCandidateRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAtsCandidateRequest
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
export namespace RetrieveAtsCandidateRequest$ {
    /** @deprecated use `RetrieveAtsCandidateRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAtsCandidateRequest$inboundSchema;
    /** @deprecated use `RetrieveAtsCandidateRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAtsCandidateRequest$outboundSchema;
    /** @deprecated use `RetrieveAtsCandidateRequest$Outbound` instead. */
    export type Outbound = RetrieveAtsCandidateRequest$Outbound;
}
