/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    Variant,
    Variant$inboundSchema,
    Variant$Outbound,
    Variant$outboundSchema,
} from "./variant.js";
import * as z from "zod";

/**
 * The status of the product. Either ACTIVE, DRAFT OR ARCHIVED.
 */
export enum ProductStatus {
    Archived = "ARCHIVED",
    Active = "ACTIVE",
    Draft = "DRAFT",
}

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
    productUrl?: string | null | undefined;
    /**
     * The type of the product
     */
    productType?: string | null | undefined;
    /**
     * The status of the product. Either ACTIVE, DRAFT OR ARCHIVED.
     */
    productStatus?: ProductStatus | null | undefined;
    /**
     * The URLs of the product images
     */
    imagesUrls?: Array<string> | null | undefined;
    /**
     * The description of the product
     */
    description?: string | null | undefined;
    /**
     * The vendor of the product
     */
    vendor?: string | null | undefined;
    /**
     * The variants of the product
     */
    variants?: Array<Variant> | undefined;
    /**
     * The tags associated with the product
     */
    tags?: Array<string> | null | undefined;
    /**
     * The custom field mappings of the object between the remote 3rd party & Panora
     */
    fieldMappings?: FieldMappings | null | undefined;
    /**
     * The UUID of the product
     */
    id?: string | null | undefined;
    /**
     * The remote ID of the product in the context of the 3rd Party
     */
    remoteId?: string | null | undefined;
    /**
     * The remote data of the customer in the context of the 3rd Party
     */
    remoteData?: RemoteData | null | undefined;
    /**
     * The created date of the object
     */
    createdAt?: string | null | undefined;
    /**
     * The modified date of the object
     */
    modifiedAt?: string | null | undefined;
};

/** @internal */
export const ProductStatus$inboundSchema: z.ZodNativeEnum<typeof ProductStatus> =
    z.nativeEnum(ProductStatus);

/** @internal */
export const ProductStatus$outboundSchema: z.ZodNativeEnum<typeof ProductStatus> =
    ProductStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductStatus$ {
    /** @deprecated use `ProductStatus$inboundSchema` instead. */
    export const inboundSchema = ProductStatus$inboundSchema;
    /** @deprecated use `ProductStatus$outboundSchema` instead. */
    export const outboundSchema = ProductStatus$outboundSchema;
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
        product_url: z.nullable(z.string()).optional(),
        product_type: z.nullable(z.string()).optional(),
        product_status: z.nullable(ProductStatus$inboundSchema).optional(),
        images_urls: z.nullable(z.array(z.string())).optional(),
        description: z.nullable(z.string()).optional(),
        vendor: z.nullable(z.string()).optional(),
        variants: z.array(Variant$inboundSchema).optional(),
        tags: z.nullable(z.array(z.string())).optional(),
        field_mappings: z.nullable(z.lazy(() => FieldMappings$inboundSchema)).optional(),
        id: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        remote_data: z.nullable(z.lazy(() => RemoteData$inboundSchema)).optional(),
        created_at: z.nullable(z.string()).optional(),
        modified_at: z.nullable(z.string()).optional(),
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
    product_url?: string | null | undefined;
    product_type?: string | null | undefined;
    product_status?: string | null | undefined;
    images_urls?: Array<string> | null | undefined;
    description?: string | null | undefined;
    vendor?: string | null | undefined;
    variants?: Array<Variant$Outbound> | undefined;
    tags?: Array<string> | null | undefined;
    field_mappings?: FieldMappings$Outbound | null | undefined;
    id?: string | null | undefined;
    remote_id?: string | null | undefined;
    remote_data?: RemoteData$Outbound | null | undefined;
    created_at?: string | null | undefined;
    modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedEcommerceProductOutput$outboundSchema: z.ZodType<
    UnifiedEcommerceProductOutput$Outbound,
    z.ZodTypeDef,
    UnifiedEcommerceProductOutput
> = z
    .object({
        productUrl: z.nullable(z.string()).optional(),
        productType: z.nullable(z.string()).optional(),
        productStatus: z.nullable(ProductStatus$outboundSchema).optional(),
        imagesUrls: z.nullable(z.array(z.string())).optional(),
        description: z.nullable(z.string()).optional(),
        vendor: z.nullable(z.string()).optional(),
        variants: z.array(Variant$outboundSchema).optional(),
        tags: z.nullable(z.array(z.string())).optional(),
        fieldMappings: z.nullable(z.lazy(() => FieldMappings$outboundSchema)).optional(),
        id: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteData: z.nullable(z.lazy(() => RemoteData$outboundSchema)).optional(),
        createdAt: z.nullable(z.string()).optional(),
        modifiedAt: z.nullable(z.string()).optional(),
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
