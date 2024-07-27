/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedAtsInterviewOutputFieldMappings = {};

export type UnifiedAtsInterviewOutputRemoteData = {};

export type UnifiedAtsInterviewOutputCreatedAt = {};

export type UnifiedAtsInterviewOutputModifiedAt = {};

export type UnifiedAtsInterviewOutput = {
    /**
     * The status of the interview
     */
    status?: string | undefined;
    /**
     * The UUID of the application
     */
    applicationId?: string | undefined;
    /**
     * The UUID of the job interview stage
     */
    jobInterviewStageId?: string | undefined;
    /**
     * The UUID of the organizer
     */
    organizedBy?: string | undefined;
    /**
     * The UUIDs of the interviewers
     */
    interviewers?: Array<string> | undefined;
    /**
     * The location of the interview
     */
    location?: string | undefined;
    /**
     * The start date and time of the interview
     */
    startAt?: Date | undefined;
    /**
     * The end date and time of the interview
     */
    endAt?: Date | undefined;
    /**
     * The remote creation date of the interview
     */
    remoteCreatedAt?: Date | undefined;
    /**
     * The remote modification date of the interview
     */
    remoteUpdatedAt?: Date | undefined;
    fieldMappings: UnifiedAtsInterviewOutputFieldMappings;
    /**
     * The UUID of the interview
     */
    id?: string | undefined;
    /**
     * The remote ID of the interview in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedAtsInterviewOutputRemoteData;
    createdAt: UnifiedAtsInterviewOutputCreatedAt;
    modifiedAt: UnifiedAtsInterviewOutputModifiedAt;
};

/** @internal */
export const UnifiedAtsInterviewOutputFieldMappings$inboundSchema: z.ZodType<
    UnifiedAtsInterviewOutputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsInterviewOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAtsInterviewOutputFieldMappings$outboundSchema: z.ZodType<
    UnifiedAtsInterviewOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAtsInterviewOutputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsInterviewOutputFieldMappings$ {
    /** @deprecated use `UnifiedAtsInterviewOutputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsInterviewOutputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedAtsInterviewOutputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsInterviewOutputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedAtsInterviewOutputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedAtsInterviewOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAtsInterviewOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedAtsInterviewOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsInterviewOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedAtsInterviewOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedAtsInterviewOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedAtsInterviewOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsInterviewOutputRemoteData$ {
    /** @deprecated use `UnifiedAtsInterviewOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsInterviewOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedAtsInterviewOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsInterviewOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedAtsInterviewOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedAtsInterviewOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedAtsInterviewOutputCreatedAt$inboundSchema: z.ZodType<
    UnifiedAtsInterviewOutputCreatedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsInterviewOutputCreatedAt$Outbound = {};

/** @internal */
export const UnifiedAtsInterviewOutputCreatedAt$outboundSchema: z.ZodType<
    UnifiedAtsInterviewOutputCreatedAt$Outbound,
    z.ZodTypeDef,
    UnifiedAtsInterviewOutputCreatedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsInterviewOutputCreatedAt$ {
    /** @deprecated use `UnifiedAtsInterviewOutputCreatedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsInterviewOutputCreatedAt$inboundSchema;
    /** @deprecated use `UnifiedAtsInterviewOutputCreatedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsInterviewOutputCreatedAt$outboundSchema;
    /** @deprecated use `UnifiedAtsInterviewOutputCreatedAt$Outbound` instead. */
    export type Outbound = UnifiedAtsInterviewOutputCreatedAt$Outbound;
}

/** @internal */
export const UnifiedAtsInterviewOutputModifiedAt$inboundSchema: z.ZodType<
    UnifiedAtsInterviewOutputModifiedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsInterviewOutputModifiedAt$Outbound = {};

/** @internal */
export const UnifiedAtsInterviewOutputModifiedAt$outboundSchema: z.ZodType<
    UnifiedAtsInterviewOutputModifiedAt$Outbound,
    z.ZodTypeDef,
    UnifiedAtsInterviewOutputModifiedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsInterviewOutputModifiedAt$ {
    /** @deprecated use `UnifiedAtsInterviewOutputModifiedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsInterviewOutputModifiedAt$inboundSchema;
    /** @deprecated use `UnifiedAtsInterviewOutputModifiedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsInterviewOutputModifiedAt$outboundSchema;
    /** @deprecated use `UnifiedAtsInterviewOutputModifiedAt$Outbound` instead. */
    export type Outbound = UnifiedAtsInterviewOutputModifiedAt$Outbound;
}

/** @internal */
export const UnifiedAtsInterviewOutput$inboundSchema: z.ZodType<
    UnifiedAtsInterviewOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: z.string().optional(),
        application_id: z.string().optional(),
        job_interview_stage_id: z.string().optional(),
        organized_by: z.string().optional(),
        interviewers: z.array(z.string()).optional(),
        location: z.string().optional(),
        start_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        end_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        remote_created_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        remote_updated_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        field_mappings: z.lazy(() => UnifiedAtsInterviewOutputFieldMappings$inboundSchema),
        id: z.string().optional(),
        remote_id: z.string().optional(),
        remote_data: z.lazy(() => UnifiedAtsInterviewOutputRemoteData$inboundSchema),
        created_at: z.lazy(() => UnifiedAtsInterviewOutputCreatedAt$inboundSchema),
        modified_at: z.lazy(() => UnifiedAtsInterviewOutputModifiedAt$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            application_id: "applicationId",
            job_interview_stage_id: "jobInterviewStageId",
            organized_by: "organizedBy",
            start_at: "startAt",
            end_at: "endAt",
            remote_created_at: "remoteCreatedAt",
            remote_updated_at: "remoteUpdatedAt",
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedAtsInterviewOutput$Outbound = {
    status?: string | undefined;
    application_id?: string | undefined;
    job_interview_stage_id?: string | undefined;
    organized_by?: string | undefined;
    interviewers?: Array<string> | undefined;
    location?: string | undefined;
    start_at?: string | undefined;
    end_at?: string | undefined;
    remote_created_at?: string | undefined;
    remote_updated_at?: string | undefined;
    field_mappings: UnifiedAtsInterviewOutputFieldMappings$Outbound;
    id?: string | undefined;
    remote_id?: string | undefined;
    remote_data: UnifiedAtsInterviewOutputRemoteData$Outbound;
    created_at: UnifiedAtsInterviewOutputCreatedAt$Outbound;
    modified_at: UnifiedAtsInterviewOutputModifiedAt$Outbound;
};

/** @internal */
export const UnifiedAtsInterviewOutput$outboundSchema: z.ZodType<
    UnifiedAtsInterviewOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAtsInterviewOutput
> = z
    .object({
        status: z.string().optional(),
        applicationId: z.string().optional(),
        jobInterviewStageId: z.string().optional(),
        organizedBy: z.string().optional(),
        interviewers: z.array(z.string()).optional(),
        location: z.string().optional(),
        startAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        endAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        remoteCreatedAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        remoteUpdatedAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        fieldMappings: z.lazy(() => UnifiedAtsInterviewOutputFieldMappings$outboundSchema),
        id: z.string().optional(),
        remoteId: z.string().optional(),
        remoteData: z.lazy(() => UnifiedAtsInterviewOutputRemoteData$outboundSchema),
        createdAt: z.lazy(() => UnifiedAtsInterviewOutputCreatedAt$outboundSchema),
        modifiedAt: z.lazy(() => UnifiedAtsInterviewOutputModifiedAt$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            applicationId: "application_id",
            jobInterviewStageId: "job_interview_stage_id",
            organizedBy: "organized_by",
            startAt: "start_at",
            endAt: "end_at",
            remoteCreatedAt: "remote_created_at",
            remoteUpdatedAt: "remote_updated_at",
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
export namespace UnifiedAtsInterviewOutput$ {
    /** @deprecated use `UnifiedAtsInterviewOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsInterviewOutput$inboundSchema;
    /** @deprecated use `UnifiedAtsInterviewOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsInterviewOutput$outboundSchema;
    /** @deprecated use `UnifiedAtsInterviewOutput$Outbound` instead. */
    export type Outbound = UnifiedAtsInterviewOutput$Outbound;
}
