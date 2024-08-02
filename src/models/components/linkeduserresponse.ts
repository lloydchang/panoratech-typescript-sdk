/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type LinkedUserResponse = {
    idLinkedUser: string | null;
    linkedUserOriginId: string | null;
    alias: string | null;
    idProject: string | null;
};

/** @internal */
export const LinkedUserResponse$inboundSchema: z.ZodType<
    LinkedUserResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id_linked_user: z.nullable(z.string()),
        linked_user_origin_id: z.nullable(z.string()),
        alias: z.nullable(z.string()),
        id_project: z.nullable(z.string()),
    })
    .transform((v) => {
        return remap$(v, {
            id_linked_user: "idLinkedUser",
            linked_user_origin_id: "linkedUserOriginId",
            id_project: "idProject",
        });
    });

/** @internal */
export type LinkedUserResponse$Outbound = {
    id_linked_user: string | null;
    linked_user_origin_id: string | null;
    alias: string | null;
    id_project: string | null;
};

/** @internal */
export const LinkedUserResponse$outboundSchema: z.ZodType<
    LinkedUserResponse$Outbound,
    z.ZodTypeDef,
    LinkedUserResponse
> = z
    .object({
        idLinkedUser: z.nullable(z.string()),
        linkedUserOriginId: z.nullable(z.string()),
        alias: z.nullable(z.string()),
        idProject: z.nullable(z.string()),
    })
    .transform((v) => {
        return remap$(v, {
            idLinkedUser: "id_linked_user",
            linkedUserOriginId: "linked_user_origin_id",
            idProject: "id_project",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkedUserResponse$ {
    /** @deprecated use `LinkedUserResponse$inboundSchema` instead. */
    export const inboundSchema = LinkedUserResponse$inboundSchema;
    /** @deprecated use `LinkedUserResponse$outboundSchema` instead. */
    export const outboundSchema = LinkedUserResponse$outboundSchema;
    /** @deprecated use `LinkedUserResponse$Outbound` instead. */
    export type Outbound = LinkedUserResponse$Outbound;
}
