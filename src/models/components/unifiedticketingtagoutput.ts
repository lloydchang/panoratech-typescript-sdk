/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedTicketingTagOutputFieldMappings = {};

export type UnifiedTicketingTagOutputRemoteData = {};

export type UnifiedTicketingTagOutputCreatedAt = {};

export type UnifiedTicketingTagOutputModifiedAt = {};

export type UnifiedTicketingTagOutput = {
    /**
     * The name of the tag
     */
    name: string;
    fieldMappings: UnifiedTicketingTagOutputFieldMappings;
    /**
     * The UUID of the tag
     */
    id?: string | undefined;
    /**
     * The id of the tag in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedTicketingTagOutputRemoteData;
    createdAt: UnifiedTicketingTagOutputCreatedAt;
    modifiedAt: UnifiedTicketingTagOutputModifiedAt;
};

/** @internal */
export const UnifiedTicketingTagOutputFieldMappings$inboundSchema: z.ZodType<
    UnifiedTicketingTagOutputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingTagOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedTicketingTagOutputFieldMappings$outboundSchema: z.ZodType<
    UnifiedTicketingTagOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingTagOutputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingTagOutputFieldMappings$ {
    /** @deprecated use `UnifiedTicketingTagOutputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingTagOutputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedTicketingTagOutputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingTagOutputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedTicketingTagOutputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedTicketingTagOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedTicketingTagOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedTicketingTagOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingTagOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedTicketingTagOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedTicketingTagOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingTagOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingTagOutputRemoteData$ {
    /** @deprecated use `UnifiedTicketingTagOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingTagOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedTicketingTagOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingTagOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedTicketingTagOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedTicketingTagOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedTicketingTagOutputCreatedAt$inboundSchema: z.ZodType<
    UnifiedTicketingTagOutputCreatedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingTagOutputCreatedAt$Outbound = {};

/** @internal */
export const UnifiedTicketingTagOutputCreatedAt$outboundSchema: z.ZodType<
    UnifiedTicketingTagOutputCreatedAt$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingTagOutputCreatedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingTagOutputCreatedAt$ {
    /** @deprecated use `UnifiedTicketingTagOutputCreatedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingTagOutputCreatedAt$inboundSchema;
    /** @deprecated use `UnifiedTicketingTagOutputCreatedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingTagOutputCreatedAt$outboundSchema;
    /** @deprecated use `UnifiedTicketingTagOutputCreatedAt$Outbound` instead. */
    export type Outbound = UnifiedTicketingTagOutputCreatedAt$Outbound;
}

/** @internal */
export const UnifiedTicketingTagOutputModifiedAt$inboundSchema: z.ZodType<
    UnifiedTicketingTagOutputModifiedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingTagOutputModifiedAt$Outbound = {};

/** @internal */
export const UnifiedTicketingTagOutputModifiedAt$outboundSchema: z.ZodType<
    UnifiedTicketingTagOutputModifiedAt$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingTagOutputModifiedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingTagOutputModifiedAt$ {
    /** @deprecated use `UnifiedTicketingTagOutputModifiedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingTagOutputModifiedAt$inboundSchema;
    /** @deprecated use `UnifiedTicketingTagOutputModifiedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingTagOutputModifiedAt$outboundSchema;
    /** @deprecated use `UnifiedTicketingTagOutputModifiedAt$Outbound` instead. */
    export type Outbound = UnifiedTicketingTagOutputModifiedAt$Outbound;
}

/** @internal */
export const UnifiedTicketingTagOutput$inboundSchema: z.ZodType<
    UnifiedTicketingTagOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string(),
        field_mappings: z.lazy(() => UnifiedTicketingTagOutputFieldMappings$inboundSchema),
        id: z.string().optional(),
        remote_id: z.string().optional(),
        remote_data: z.lazy(() => UnifiedTicketingTagOutputRemoteData$inboundSchema),
        created_at: z.lazy(() => UnifiedTicketingTagOutputCreatedAt$inboundSchema),
        modified_at: z.lazy(() => UnifiedTicketingTagOutputModifiedAt$inboundSchema),
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
export type UnifiedTicketingTagOutput$Outbound = {
    name: string;
    field_mappings: UnifiedTicketingTagOutputFieldMappings$Outbound;
    id?: string | undefined;
    remote_id?: string | undefined;
    remote_data: UnifiedTicketingTagOutputRemoteData$Outbound;
    created_at: UnifiedTicketingTagOutputCreatedAt$Outbound;
    modified_at: UnifiedTicketingTagOutputModifiedAt$Outbound;
};

/** @internal */
export const UnifiedTicketingTagOutput$outboundSchema: z.ZodType<
    UnifiedTicketingTagOutput$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingTagOutput
> = z
    .object({
        name: z.string(),
        fieldMappings: z.lazy(() => UnifiedTicketingTagOutputFieldMappings$outboundSchema),
        id: z.string().optional(),
        remoteId: z.string().optional(),
        remoteData: z.lazy(() => UnifiedTicketingTagOutputRemoteData$outboundSchema),
        createdAt: z.lazy(() => UnifiedTicketingTagOutputCreatedAt$outboundSchema),
        modifiedAt: z.lazy(() => UnifiedTicketingTagOutputModifiedAt$outboundSchema),
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
export namespace UnifiedTicketingTagOutput$ {
    /** @deprecated use `UnifiedTicketingTagOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingTagOutput$inboundSchema;
    /** @deprecated use `UnifiedTicketingTagOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingTagOutput$outboundSchema;
    /** @deprecated use `UnifiedTicketingTagOutput$Outbound` instead. */
    export type Outbound = UnifiedTicketingTagOutput$Outbound;
}
