/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type Variants = {};

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type FieldMappings = {};

/**
 * The remote data of the customer in the context of the 3rd Party
 */
export type RemoteData = {};

export type UnifiedEcommerceProductOutput = {
    /**
     * The URL of the product
     */
    productUrl?: string | undefined;
    /**
     * The type of the product
     */
    productType?: string | undefined;
    /**
     * The status of the product. Either ACTIVE, DRAFT OR ARCHIVED.
     */
    productStatus?: string | undefined;
    /**
     * The URLs of the product images
     */
    imagesUrls?: Array<string> | undefined;
    /**
     * The description of the product
     */
    description?: string | undefined;
    /**
     * The vendor of the product
     */
    vendor?: string | undefined;
    /**
     * The variants of the product
     */
    variants?: Array<Variants> | undefined;
    /**
     * The tags associated with the product
     */
    tags?: Array<string> | undefined;
    /**
     * The custom field mappings of the object between the remote 3rd party & Panora
     */
    fieldMappings?: FieldMappings | undefined;
    /**
     * The UUID of the product
     */
    id?: string | undefined;
    /**
     * The remote ID of the product in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    /**
     * The remote data of the customer in the context of the 3rd Party
     */
    remoteData?: RemoteData | undefined;
    /**
     * The created date of the object
     */
    createdAt?: string | undefined;
    /**
     * The modified date of the object
     */
    modifiedAt?: string | undefined;
};

/** @internal */
export const Variants$inboundSchema: z.ZodType<Variants, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Variants$Outbound = {};

/** @internal */
export const Variants$outboundSchema: z.ZodType<Variants$Outbound, z.ZodTypeDef, Variants> =
    z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Variants$ {
    /** @deprecated use `Variants$inboundSchema` instead. */
    export const inboundSchema = Variants$inboundSchema;
    /** @deprecated use `Variants$outboundSchema` instead. */
    export const outboundSchema = Variants$outboundSchema;
    /** @deprecated use `Variants$Outbound` instead. */
    export type Outbound = Variants$Outbound;
}

/** @internal */
export const FieldMappings$inboundSchema: z.ZodType<FieldMappings, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type FieldMappings$Outbound = {};

/** @internal */
export const FieldMappings$outboundSchema: z.ZodType<
    FieldMappings$Outbound,
    z.ZodTypeDef,
    FieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldMappings$ {
    /** @deprecated use `FieldMappings$inboundSchema` instead. */
    export const inboundSchema = FieldMappings$inboundSchema;
    /** @deprecated use `FieldMappings$outboundSchema` instead. */
    export const outboundSchema = FieldMappings$outboundSchema;
    /** @deprecated use `FieldMappings$Outbound` instead. */
    export type Outbound = FieldMappings$Outbound;
}

/** @internal */
export const RemoteData$inboundSchema: z.ZodType<RemoteData, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type RemoteData$Outbound = {};

/** @internal */
export const RemoteData$outboundSchema: z.ZodType<RemoteData$Outbound, z.ZodTypeDef, RemoteData> =
    z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoteData$ {
    /** @deprecated use `RemoteData$inboundSchema` instead. */
    export const inboundSchema = RemoteData$inboundSchema;
    /** @deprecated use `RemoteData$outboundSchema` instead. */
    export const outboundSchema = RemoteData$outboundSchema;
    /** @deprecated use `RemoteData$Outbound` instead. */
    export type Outbound = RemoteData$Outbound;
}

/** @internal */
export const UnifiedEcommerceProductOutput$inboundSchema: z.ZodType<
    UnifiedEcommerceProductOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        product_url: z.string().optional(),
        product_type: z.string().optional(),
        product_status: z.string().optional(),
        images_urls: z.array(z.string()).optional(),
        description: z.string().optional(),
        vendor: z.string().optional(),
        variants: z.array(z.lazy(() => Variants$inboundSchema)).optional(),
        tags: z.array(z.string()).optional(),
        field_mappings: z.lazy(() => FieldMappings$inboundSchema).optional(),
        id: z.string().optional(),
        remote_id: z.string().optional(),
        remote_data: z.lazy(() => RemoteData$inboundSchema).optional(),
        created_at: z.string().optional(),
        modified_at: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            product_url: "productUrl",
            product_type: "productType",
            product_status: "productStatus",
            images_urls: "imagesUrls",
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedEcommerceProductOutput$Outbound = {
    product_url?: string | undefined;
    product_type?: string | undefined;
    product_status?: string | undefined;
    images_urls?: Array<string> | undefined;
    description?: string | undefined;
    vendor?: string | undefined;
    variants?: Array<Variants$Outbound> | undefined;
    tags?: Array<string> | undefined;
    field_mappings?: FieldMappings$Outbound | undefined;
    id?: string | undefined;
    remote_id?: string | undefined;
    remote_data?: RemoteData$Outbound | undefined;
    created_at?: string | undefined;
    modified_at?: string | undefined;
};

/** @internal */
export const UnifiedEcommerceProductOutput$outboundSchema: z.ZodType<
    UnifiedEcommerceProductOutput$Outbound,
    z.ZodTypeDef,
    UnifiedEcommerceProductOutput
> = z
    .object({
        productUrl: z.string().optional(),
        productType: z.string().optional(),
        productStatus: z.string().optional(),
        imagesUrls: z.array(z.string()).optional(),
        description: z.string().optional(),
        vendor: z.string().optional(),
        variants: z.array(z.lazy(() => Variants$outboundSchema)).optional(),
        tags: z.array(z.string()).optional(),
        fieldMappings: z.lazy(() => FieldMappings$outboundSchema).optional(),
        id: z.string().optional(),
        remoteId: z.string().optional(),
        remoteData: z.lazy(() => RemoteData$outboundSchema).optional(),
        createdAt: z.string().optional(),
        modifiedAt: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            productUrl: "product_url",
            productType: "product_type",
            productStatus: "product_status",
            imagesUrls: "images_urls",
            fieldMappings: "field_mappings",
            remoteId: "remote_id",
            remoteData: "remote_data",
            createdAt: "created_at",
            modifiedAt: "modified_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedEcommerceProductOutput$ {
    /** @deprecated use `UnifiedEcommerceProductOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedEcommerceProductOutput$inboundSchema;
    /** @deprecated use `UnifiedEcommerceProductOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedEcommerceProductOutput$outboundSchema;
    /** @deprecated use `UnifiedEcommerceProductOutput$Outbound` instead. */
    export type Outbound = UnifiedEcommerceProductOutput$Outbound;
}
