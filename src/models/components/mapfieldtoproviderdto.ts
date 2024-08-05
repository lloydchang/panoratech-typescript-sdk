/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type MapFieldToProviderDto = {
    /**
     * The attribute ID
     */
    attributeId: string | null;
    /**
     * The source custom field ID
     */
    sourceCustomFieldId: string | null;
    /**
     * The source provider
     */
    sourceProvider: string | null;
    /**
     * The linked user ID
     */
    linkedUserId: string | null;
};

/** @internal */
export const MapFieldToProviderDto$inboundSchema: z.ZodType<
    MapFieldToProviderDto,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        attributeId: z.nullable(z.string()),
        source_custom_field_id: z.nullable(z.string()),
        source_provider: z.nullable(z.string()),
        linked_user_id: z.nullable(z.string()),
    })
    .transform((v) => {
        return remap$(v, {
            source_custom_field_id: "sourceCustomFieldId",
            source_provider: "sourceProvider",
            linked_user_id: "linkedUserId",
        });
    });

/** @internal */
export type MapFieldToProviderDto$Outbound = {
    attributeId: string | null;
    source_custom_field_id: string | null;
    source_provider: string | null;
    linked_user_id: string | null;
};

/** @internal */
export const MapFieldToProviderDto$outboundSchema: z.ZodType<
    MapFieldToProviderDto$Outbound,
    z.ZodTypeDef,
    MapFieldToProviderDto
> = z
    .object({
        attributeId: z.nullable(z.string()),
        sourceCustomFieldId: z.nullable(z.string()),
        sourceProvider: z.nullable(z.string()),
        linkedUserId: z.nullable(z.string()),
    })
    .transform((v) => {
        return remap$(v, {
            sourceCustomFieldId: "source_custom_field_id",
            sourceProvider: "source_provider",
            linkedUserId: "linked_user_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MapFieldToProviderDto$ {
    /** @deprecated use `MapFieldToProviderDto$inboundSchema` instead. */
    export const inboundSchema = MapFieldToProviderDto$inboundSchema;
    /** @deprecated use `MapFieldToProviderDto$outboundSchema` instead. */
    export const outboundSchema = MapFieldToProviderDto$outboundSchema;
    /** @deprecated use `MapFieldToProviderDto$Outbound` instead. */
    export type Outbound = MapFieldToProviderDto$Outbound;
}
