/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedAtsOfficeOutputFieldMappings = {};

export type UnifiedAtsOfficeOutputRemoteData = {};

export type UnifiedAtsOfficeOutputCreatedAt = {};

export type UnifiedAtsOfficeOutputModifiedAt = {};

export type UnifiedAtsOfficeOutput = {
    /**
     * The name of the office
     */
    name?: string | undefined;
    /**
     * The location of the office
     */
    location?: string | undefined;
    fieldMappings: UnifiedAtsOfficeOutputFieldMappings;
    /**
     * The UUID of the office
     */
    id?: string | undefined;
    /**
     * The remote ID of the office in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedAtsOfficeOutputRemoteData;
    createdAt: UnifiedAtsOfficeOutputCreatedAt;
    modifiedAt: UnifiedAtsOfficeOutputModifiedAt;
};

/** @internal */
export const UnifiedAtsOfficeOutputFieldMappings$inboundSchema: z.ZodType<
    UnifiedAtsOfficeOutputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsOfficeOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAtsOfficeOutputFieldMappings$outboundSchema: z.ZodType<
    UnifiedAtsOfficeOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAtsOfficeOutputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsOfficeOutputFieldMappings$ {
    /** @deprecated use `UnifiedAtsOfficeOutputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsOfficeOutputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedAtsOfficeOutputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsOfficeOutputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedAtsOfficeOutputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedAtsOfficeOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAtsOfficeOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedAtsOfficeOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsOfficeOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedAtsOfficeOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedAtsOfficeOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedAtsOfficeOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsOfficeOutputRemoteData$ {
    /** @deprecated use `UnifiedAtsOfficeOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsOfficeOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedAtsOfficeOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsOfficeOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedAtsOfficeOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedAtsOfficeOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedAtsOfficeOutputCreatedAt$inboundSchema: z.ZodType<
    UnifiedAtsOfficeOutputCreatedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsOfficeOutputCreatedAt$Outbound = {};

/** @internal */
export const UnifiedAtsOfficeOutputCreatedAt$outboundSchema: z.ZodType<
    UnifiedAtsOfficeOutputCreatedAt$Outbound,
    z.ZodTypeDef,
    UnifiedAtsOfficeOutputCreatedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsOfficeOutputCreatedAt$ {
    /** @deprecated use `UnifiedAtsOfficeOutputCreatedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsOfficeOutputCreatedAt$inboundSchema;
    /** @deprecated use `UnifiedAtsOfficeOutputCreatedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsOfficeOutputCreatedAt$outboundSchema;
    /** @deprecated use `UnifiedAtsOfficeOutputCreatedAt$Outbound` instead. */
    export type Outbound = UnifiedAtsOfficeOutputCreatedAt$Outbound;
}

/** @internal */
export const UnifiedAtsOfficeOutputModifiedAt$inboundSchema: z.ZodType<
    UnifiedAtsOfficeOutputModifiedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsOfficeOutputModifiedAt$Outbound = {};

/** @internal */
export const UnifiedAtsOfficeOutputModifiedAt$outboundSchema: z.ZodType<
    UnifiedAtsOfficeOutputModifiedAt$Outbound,
    z.ZodTypeDef,
    UnifiedAtsOfficeOutputModifiedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsOfficeOutputModifiedAt$ {
    /** @deprecated use `UnifiedAtsOfficeOutputModifiedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsOfficeOutputModifiedAt$inboundSchema;
    /** @deprecated use `UnifiedAtsOfficeOutputModifiedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsOfficeOutputModifiedAt$outboundSchema;
    /** @deprecated use `UnifiedAtsOfficeOutputModifiedAt$Outbound` instead. */
    export type Outbound = UnifiedAtsOfficeOutputModifiedAt$Outbound;
}

/** @internal */
export const UnifiedAtsOfficeOutput$inboundSchema: z.ZodType<
    UnifiedAtsOfficeOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string().optional(),
        location: z.string().optional(),
        field_mappings: z.lazy(() => UnifiedAtsOfficeOutputFieldMappings$inboundSchema),
        id: z.string().optional(),
        remote_id: z.string().optional(),
        remote_data: z.lazy(() => UnifiedAtsOfficeOutputRemoteData$inboundSchema),
        created_at: z.lazy(() => UnifiedAtsOfficeOutputCreatedAt$inboundSchema),
        modified_at: z.lazy(() => UnifiedAtsOfficeOutputModifiedAt$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedAtsOfficeOutput$Outbound = {
    name?: string | undefined;
    location?: string | undefined;
    field_mappings: UnifiedAtsOfficeOutputFieldMappings$Outbound;
    id?: string | undefined;
    remote_id?: string | undefined;
    remote_data: UnifiedAtsOfficeOutputRemoteData$Outbound;
    created_at: UnifiedAtsOfficeOutputCreatedAt$Outbound;
    modified_at: UnifiedAtsOfficeOutputModifiedAt$Outbound;
};

/** @internal */
export const UnifiedAtsOfficeOutput$outboundSchema: z.ZodType<
    UnifiedAtsOfficeOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAtsOfficeOutput
> = z
    .object({
        name: z.string().optional(),
        location: z.string().optional(),
        fieldMappings: z.lazy(() => UnifiedAtsOfficeOutputFieldMappings$outboundSchema),
        id: z.string().optional(),
        remoteId: z.string().optional(),
        remoteData: z.lazy(() => UnifiedAtsOfficeOutputRemoteData$outboundSchema),
        createdAt: z.lazy(() => UnifiedAtsOfficeOutputCreatedAt$outboundSchema),
        modifiedAt: z.lazy(() => UnifiedAtsOfficeOutputModifiedAt$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
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
export namespace UnifiedAtsOfficeOutput$ {
    /** @deprecated use `UnifiedAtsOfficeOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsOfficeOutput$inboundSchema;
    /** @deprecated use `UnifiedAtsOfficeOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsOfficeOutput$outboundSchema;
    /** @deprecated use `UnifiedAtsOfficeOutput$Outbound` instead. */
    export type Outbound = UnifiedAtsOfficeOutput$Outbound;
}
