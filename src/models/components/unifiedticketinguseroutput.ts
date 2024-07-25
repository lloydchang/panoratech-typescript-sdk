/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedTicketingUserOutputFieldMappings = {};

export type UnifiedTicketingUserOutputRemoteData = {};

export type UnifiedTicketingUserOutputCreatedAt = {};

export type UnifiedTicketingUserOutputModifiedAt = {};

export type UnifiedTicketingUserOutput = {
    /**
     * The name of the user
     */
    name: string;
    /**
     * The email address of the user
     */
    emailAddress: string;
    /**
     * The teams whose the user is part of
     */
    teams?: Array<string> | undefined;
    /**
     * The account or organization the user is part of
     */
    accountId?: string | undefined;
    fieldMappings: UnifiedTicketingUserOutputFieldMappings;
    /**
     * The UUID of the user
     */
    id?: string | undefined;
    /**
     * The id of the user in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedTicketingUserOutputRemoteData;
    createdAt: UnifiedTicketingUserOutputCreatedAt;
    modifiedAt: UnifiedTicketingUserOutputModifiedAt;
};

/** @internal */
export const UnifiedTicketingUserOutputFieldMappings$inboundSchema: z.ZodType<
    UnifiedTicketingUserOutputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingUserOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedTicketingUserOutputFieldMappings$outboundSchema: z.ZodType<
    UnifiedTicketingUserOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingUserOutputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingUserOutputFieldMappings$ {
    /** @deprecated use `UnifiedTicketingUserOutputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingUserOutputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedTicketingUserOutputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingUserOutputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedTicketingUserOutputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedTicketingUserOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedTicketingUserOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedTicketingUserOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingUserOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedTicketingUserOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedTicketingUserOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingUserOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingUserOutputRemoteData$ {
    /** @deprecated use `UnifiedTicketingUserOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingUserOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedTicketingUserOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingUserOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedTicketingUserOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedTicketingUserOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedTicketingUserOutputCreatedAt$inboundSchema: z.ZodType<
    UnifiedTicketingUserOutputCreatedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingUserOutputCreatedAt$Outbound = {};

/** @internal */
export const UnifiedTicketingUserOutputCreatedAt$outboundSchema: z.ZodType<
    UnifiedTicketingUserOutputCreatedAt$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingUserOutputCreatedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingUserOutputCreatedAt$ {
    /** @deprecated use `UnifiedTicketingUserOutputCreatedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingUserOutputCreatedAt$inboundSchema;
    /** @deprecated use `UnifiedTicketingUserOutputCreatedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingUserOutputCreatedAt$outboundSchema;
    /** @deprecated use `UnifiedTicketingUserOutputCreatedAt$Outbound` instead. */
    export type Outbound = UnifiedTicketingUserOutputCreatedAt$Outbound;
}

/** @internal */
export const UnifiedTicketingUserOutputModifiedAt$inboundSchema: z.ZodType<
    UnifiedTicketingUserOutputModifiedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingUserOutputModifiedAt$Outbound = {};

/** @internal */
export const UnifiedTicketingUserOutputModifiedAt$outboundSchema: z.ZodType<
    UnifiedTicketingUserOutputModifiedAt$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingUserOutputModifiedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingUserOutputModifiedAt$ {
    /** @deprecated use `UnifiedTicketingUserOutputModifiedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingUserOutputModifiedAt$inboundSchema;
    /** @deprecated use `UnifiedTicketingUserOutputModifiedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingUserOutputModifiedAt$outboundSchema;
    /** @deprecated use `UnifiedTicketingUserOutputModifiedAt$Outbound` instead. */
    export type Outbound = UnifiedTicketingUserOutputModifiedAt$Outbound;
}

/** @internal */
export const UnifiedTicketingUserOutput$inboundSchema: z.ZodType<
    UnifiedTicketingUserOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string(),
        email_address: z.string(),
        teams: z.array(z.string()).optional(),
        account_id: z.string().optional(),
        field_mappings: z.lazy(() => UnifiedTicketingUserOutputFieldMappings$inboundSchema),
        id: z.string().optional(),
        remote_id: z.string().optional(),
        remote_data: z.lazy(() => UnifiedTicketingUserOutputRemoteData$inboundSchema),
        created_at: z.lazy(() => UnifiedTicketingUserOutputCreatedAt$inboundSchema),
        modified_at: z.lazy(() => UnifiedTicketingUserOutputModifiedAt$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            email_address: "emailAddress",
            account_id: "accountId",
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedTicketingUserOutput$Outbound = {
    name: string;
    email_address: string;
    teams?: Array<string> | undefined;
    account_id?: string | undefined;
    field_mappings: UnifiedTicketingUserOutputFieldMappings$Outbound;
    id?: string | undefined;
    remote_id?: string | undefined;
    remote_data: UnifiedTicketingUserOutputRemoteData$Outbound;
    created_at: UnifiedTicketingUserOutputCreatedAt$Outbound;
    modified_at: UnifiedTicketingUserOutputModifiedAt$Outbound;
};

/** @internal */
export const UnifiedTicketingUserOutput$outboundSchema: z.ZodType<
    UnifiedTicketingUserOutput$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingUserOutput
> = z
    .object({
        name: z.string(),
        emailAddress: z.string(),
        teams: z.array(z.string()).optional(),
        accountId: z.string().optional(),
        fieldMappings: z.lazy(() => UnifiedTicketingUserOutputFieldMappings$outboundSchema),
        id: z.string().optional(),
        remoteId: z.string().optional(),
        remoteData: z.lazy(() => UnifiedTicketingUserOutputRemoteData$outboundSchema),
        createdAt: z.lazy(() => UnifiedTicketingUserOutputCreatedAt$outboundSchema),
        modifiedAt: z.lazy(() => UnifiedTicketingUserOutputModifiedAt$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            emailAddress: "email_address",
            accountId: "account_id",
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
export namespace UnifiedTicketingUserOutput$ {
    /** @deprecated use `UnifiedTicketingUserOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingUserOutput$inboundSchema;
    /** @deprecated use `UnifiedTicketingUserOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingUserOutput$outboundSchema;
    /** @deprecated use `UnifiedTicketingUserOutput$Outbound` instead. */
    export type Outbound = UnifiedTicketingUserOutput$Outbound;
}
