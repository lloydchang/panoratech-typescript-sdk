/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedAtsOfferOutputFieldMappings = {};

export type UnifiedAtsOfferOutputRemoteData = {};

export type UnifiedAtsOfferOutputCreatedAt = {};

export type UnifiedAtsOfferOutputModifiedAt = {};

export type UnifiedAtsOfferOutput = {
    /**
     * The UUID of the creator
     */
    createdBy?: string | undefined;
    /**
     * The remote creation date of the offer
     */
    remoteCreatedAt?: Date | undefined;
    /**
     * The closing date of the offer
     */
    closedAt?: Date | undefined;
    /**
     * The sending date of the offer
     */
    sentAt?: Date | undefined;
    /**
     * The start date of the offer
     */
    startDate?: Date | undefined;
    /**
     * The status of the offer
     */
    status?: string | undefined;
    /**
     * The UUID of the application
     */
    applicationId?: string | undefined;
    fieldMappings: UnifiedAtsOfferOutputFieldMappings;
    /**
     * The UUID of the offer
     */
    id?: string | undefined;
    /**
     * The remote ID of the offer in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedAtsOfferOutputRemoteData;
    createdAt: UnifiedAtsOfferOutputCreatedAt;
    modifiedAt: UnifiedAtsOfferOutputModifiedAt;
};

/** @internal */
export const UnifiedAtsOfferOutputFieldMappings$inboundSchema: z.ZodType<
    UnifiedAtsOfferOutputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsOfferOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAtsOfferOutputFieldMappings$outboundSchema: z.ZodType<
    UnifiedAtsOfferOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAtsOfferOutputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsOfferOutputFieldMappings$ {
    /** @deprecated use `UnifiedAtsOfferOutputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsOfferOutputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedAtsOfferOutputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsOfferOutputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedAtsOfferOutputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedAtsOfferOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAtsOfferOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedAtsOfferOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsOfferOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedAtsOfferOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedAtsOfferOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedAtsOfferOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsOfferOutputRemoteData$ {
    /** @deprecated use `UnifiedAtsOfferOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsOfferOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedAtsOfferOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsOfferOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedAtsOfferOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedAtsOfferOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedAtsOfferOutputCreatedAt$inboundSchema: z.ZodType<
    UnifiedAtsOfferOutputCreatedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsOfferOutputCreatedAt$Outbound = {};

/** @internal */
export const UnifiedAtsOfferOutputCreatedAt$outboundSchema: z.ZodType<
    UnifiedAtsOfferOutputCreatedAt$Outbound,
    z.ZodTypeDef,
    UnifiedAtsOfferOutputCreatedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsOfferOutputCreatedAt$ {
    /** @deprecated use `UnifiedAtsOfferOutputCreatedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsOfferOutputCreatedAt$inboundSchema;
    /** @deprecated use `UnifiedAtsOfferOutputCreatedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsOfferOutputCreatedAt$outboundSchema;
    /** @deprecated use `UnifiedAtsOfferOutputCreatedAt$Outbound` instead. */
    export type Outbound = UnifiedAtsOfferOutputCreatedAt$Outbound;
}

/** @internal */
export const UnifiedAtsOfferOutputModifiedAt$inboundSchema: z.ZodType<
    UnifiedAtsOfferOutputModifiedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsOfferOutputModifiedAt$Outbound = {};

/** @internal */
export const UnifiedAtsOfferOutputModifiedAt$outboundSchema: z.ZodType<
    UnifiedAtsOfferOutputModifiedAt$Outbound,
    z.ZodTypeDef,
    UnifiedAtsOfferOutputModifiedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsOfferOutputModifiedAt$ {
    /** @deprecated use `UnifiedAtsOfferOutputModifiedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsOfferOutputModifiedAt$inboundSchema;
    /** @deprecated use `UnifiedAtsOfferOutputModifiedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsOfferOutputModifiedAt$outboundSchema;
    /** @deprecated use `UnifiedAtsOfferOutputModifiedAt$Outbound` instead. */
    export type Outbound = UnifiedAtsOfferOutputModifiedAt$Outbound;
}

/** @internal */
export const UnifiedAtsOfferOutput$inboundSchema: z.ZodType<
    UnifiedAtsOfferOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        created_by: z.string().optional(),
        remote_created_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        closed_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        sent_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        start_date: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        status: z.string().optional(),
        application_id: z.string().optional(),
        field_mappings: z.lazy(() => UnifiedAtsOfferOutputFieldMappings$inboundSchema),
        id: z.string().optional(),
        remote_id: z.string().optional(),
        remote_data: z.lazy(() => UnifiedAtsOfferOutputRemoteData$inboundSchema),
        created_at: z.lazy(() => UnifiedAtsOfferOutputCreatedAt$inboundSchema),
        modified_at: z.lazy(() => UnifiedAtsOfferOutputModifiedAt$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            created_by: "createdBy",
            remote_created_at: "remoteCreatedAt",
            closed_at: "closedAt",
            sent_at: "sentAt",
            start_date: "startDate",
            application_id: "applicationId",
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedAtsOfferOutput$Outbound = {
    created_by?: string | undefined;
    remote_created_at?: string | undefined;
    closed_at?: string | undefined;
    sent_at?: string | undefined;
    start_date?: string | undefined;
    status?: string | undefined;
    application_id?: string | undefined;
    field_mappings: UnifiedAtsOfferOutputFieldMappings$Outbound;
    id?: string | undefined;
    remote_id?: string | undefined;
    remote_data: UnifiedAtsOfferOutputRemoteData$Outbound;
    created_at: UnifiedAtsOfferOutputCreatedAt$Outbound;
    modified_at: UnifiedAtsOfferOutputModifiedAt$Outbound;
};

/** @internal */
export const UnifiedAtsOfferOutput$outboundSchema: z.ZodType<
    UnifiedAtsOfferOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAtsOfferOutput
> = z
    .object({
        createdBy: z.string().optional(),
        remoteCreatedAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        closedAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        sentAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        startDate: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        status: z.string().optional(),
        applicationId: z.string().optional(),
        fieldMappings: z.lazy(() => UnifiedAtsOfferOutputFieldMappings$outboundSchema),
        id: z.string().optional(),
        remoteId: z.string().optional(),
        remoteData: z.lazy(() => UnifiedAtsOfferOutputRemoteData$outboundSchema),
        createdAt: z.lazy(() => UnifiedAtsOfferOutputCreatedAt$outboundSchema),
        modifiedAt: z.lazy(() => UnifiedAtsOfferOutputModifiedAt$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            createdBy: "created_by",
            remoteCreatedAt: "remote_created_at",
            closedAt: "closed_at",
            sentAt: "sent_at",
            startDate: "start_date",
            applicationId: "application_id",
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
export namespace UnifiedAtsOfferOutput$ {
    /** @deprecated use `UnifiedAtsOfferOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsOfferOutput$inboundSchema;
    /** @deprecated use `UnifiedAtsOfferOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsOfferOutput$outboundSchema;
    /** @deprecated use `UnifiedAtsOfferOutput$Outbound` instead. */
    export type Outbound = UnifiedAtsOfferOutput$Outbound;
}
