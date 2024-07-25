/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedAtsInterviewInputFieldMappings = {};

export type UnifiedAtsInterviewInput = {
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
    fieldMappings: UnifiedAtsInterviewInputFieldMappings;
};

/** @internal */
export const UnifiedAtsInterviewInputFieldMappings$inboundSchema: z.ZodType<
    UnifiedAtsInterviewInputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAtsInterviewInputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAtsInterviewInputFieldMappings$outboundSchema: z.ZodType<
    UnifiedAtsInterviewInputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAtsInterviewInputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsInterviewInputFieldMappings$ {
    /** @deprecated use `UnifiedAtsInterviewInputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsInterviewInputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedAtsInterviewInputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsInterviewInputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedAtsInterviewInputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedAtsInterviewInputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAtsInterviewInput$inboundSchema: z.ZodType<
    UnifiedAtsInterviewInput,
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
        field_mappings: z.lazy(() => UnifiedAtsInterviewInputFieldMappings$inboundSchema),
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
        });
    });

/** @internal */
export type UnifiedAtsInterviewInput$Outbound = {
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
    field_mappings: UnifiedAtsInterviewInputFieldMappings$Outbound;
};

/** @internal */
export const UnifiedAtsInterviewInput$outboundSchema: z.ZodType<
    UnifiedAtsInterviewInput$Outbound,
    z.ZodTypeDef,
    UnifiedAtsInterviewInput
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
        fieldMappings: z.lazy(() => UnifiedAtsInterviewInputFieldMappings$outboundSchema),
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
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsInterviewInput$ {
    /** @deprecated use `UnifiedAtsInterviewInput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsInterviewInput$inboundSchema;
    /** @deprecated use `UnifiedAtsInterviewInput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsInterviewInput$outboundSchema;
    /** @deprecated use `UnifiedAtsInterviewInput$Outbound` instead. */
    export type Outbound = UnifiedAtsInterviewInput$Outbound;
}
