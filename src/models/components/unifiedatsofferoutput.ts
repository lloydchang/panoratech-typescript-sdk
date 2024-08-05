/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The status of the offer
 */
export enum UnifiedAtsOfferOutputStatus {
    Draft = "DRAFT",
    ApprovalSent = "APPROVAL_SENT",
    Approved = "APPROVED",
    Sent = "SENT",
    SentManually = "SENT_MANUALLY",
    Opened = "OPENED",
    Denied = "DENIED",
    Signed = "SIGNED",
    Deprecated = "DEPRECATED",
}

/**
 * The created date of the object
 */
export type UnifiedAtsOfferOutputCreatedAt = {};

/**
 * The modified date of the object
 */
export type UnifiedAtsOfferOutputModifiedAt = {};

export type UnifiedAtsOfferOutput = {
    /**
     * The UUID of the creator
     */
    createdBy?: string | null | undefined;
    /**
     * The remote creation date of the offer
     */
    remoteCreatedAt?: Date | null | undefined;
    /**
     * The closing date of the offer
     */
    closedAt?: Date | null | undefined;
    /**
     * The sending date of the offer
     */
    sentAt?: Date | null | undefined;
    /**
     * The start date of the offer
     */
    startDate?: Date | null | undefined;
    /**
     * The status of the offer
     */
    status?: UnifiedAtsOfferOutputStatus | null | undefined;
    /**
     * The UUID of the application
     */
    applicationId?: string | null | undefined;
    /**
     * The custom field mappings of the object between the remote 3rd party & Panora
     */
    fieldMappings?: { [k: string]: any } | null | undefined;
    /**
     * The UUID of the offer
     */
    id?: string | null | undefined;
    /**
     * The remote ID of the offer in the context of the 3rd Party
     */
    remoteId?: string | null | undefined;
    /**
     * The remote data of the offer in the context of the 3rd Party
     */
    remoteData?: { [k: string]: any } | null | undefined;
    /**
     * The created date of the object
     */
    createdAt?: UnifiedAtsOfferOutputCreatedAt | null | undefined;
    /**
     * The modified date of the object
     */
    modifiedAt?: UnifiedAtsOfferOutputModifiedAt | null | undefined;
};

/** @internal */
export const UnifiedAtsOfferOutputStatus$inboundSchema: z.ZodNativeEnum<
    typeof UnifiedAtsOfferOutputStatus
> = z.nativeEnum(UnifiedAtsOfferOutputStatus);

/** @internal */
export const UnifiedAtsOfferOutputStatus$outboundSchema: z.ZodNativeEnum<
    typeof UnifiedAtsOfferOutputStatus
> = UnifiedAtsOfferOutputStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsOfferOutputStatus$ {
    /** @deprecated use `UnifiedAtsOfferOutputStatus$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsOfferOutputStatus$inboundSchema;
    /** @deprecated use `UnifiedAtsOfferOutputStatus$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsOfferOutputStatus$outboundSchema;
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
        created_by: z.nullable(z.string()).optional(),
        remote_created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        closed_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        sent_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        start_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        status: z.nullable(UnifiedAtsOfferOutputStatus$inboundSchema).optional(),
        application_id: z.nullable(z.string()).optional(),
        field_mappings: z.nullable(z.record(z.any())).optional(),
        id: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        remote_data: z.nullable(z.record(z.any())).optional(),
        created_at: z
            .nullable(z.lazy(() => UnifiedAtsOfferOutputCreatedAt$inboundSchema))
            .optional(),
        modified_at: z
            .nullable(z.lazy(() => UnifiedAtsOfferOutputModifiedAt$inboundSchema))
            .optional(),
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
    created_by?: string | null | undefined;
    remote_created_at?: string | null | undefined;
    closed_at?: string | null | undefined;
    sent_at?: string | null | undefined;
    start_date?: string | null | undefined;
    status?: string | null | undefined;
    application_id?: string | null | undefined;
    field_mappings?: { [k: string]: any } | null | undefined;
    id?: string | null | undefined;
    remote_id?: string | null | undefined;
    remote_data?: { [k: string]: any } | null | undefined;
    created_at?: UnifiedAtsOfferOutputCreatedAt$Outbound | null | undefined;
    modified_at?: UnifiedAtsOfferOutputModifiedAt$Outbound | null | undefined;
};

/** @internal */
export const UnifiedAtsOfferOutput$outboundSchema: z.ZodType<
    UnifiedAtsOfferOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAtsOfferOutput
> = z
    .object({
        createdBy: z.nullable(z.string()).optional(),
        remoteCreatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        closedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        sentAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        startDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        status: z.nullable(UnifiedAtsOfferOutputStatus$outboundSchema).optional(),
        applicationId: z.nullable(z.string()).optional(),
        fieldMappings: z.nullable(z.record(z.any())).optional(),
        id: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteData: z.nullable(z.record(z.any())).optional(),
        createdAt: z
            .nullable(z.lazy(() => UnifiedAtsOfferOutputCreatedAt$outboundSchema))
            .optional(),
        modifiedAt: z
            .nullable(z.lazy(() => UnifiedAtsOfferOutputModifiedAt$outboundSchema))
            .optional(),
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
