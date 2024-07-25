/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    UnifiedTicketingCommentInput,
    UnifiedTicketingCommentInput$inboundSchema,
    UnifiedTicketingCommentInput$Outbound,
    UnifiedTicketingCommentInput$outboundSchema,
} from "./unifiedticketingcommentinput.js";
import * as z from "zod";

export type FieldMappings = {};

export type RemoteData = {};

export type CreatedAt = {};

export type ModifiedAt = {};

export type UnifiedTicketingTicketOutput = {
    /**
     * The name of the ticket
     */
    name: string;
    /**
     * The status of the ticket. Authorized values are OPEN or CLOSED.
     */
    status?: string | undefined;
    /**
     * The description of the ticket
     */
    description: string;
    /**
     * The date the ticket is due
     */
    dueDate?: Date | undefined;
    /**
     * The type of the ticket. Authorized values are PROBLEM, QUESTION, or TASK
     */
    type?: string | undefined;
    /**
     * The UUID of the parent ticket
     */
    parentTicket?: string | undefined;
    /**
     * The collection UUIDs the ticket belongs to
     */
    collections?: string | undefined;
    /**
     * The tags names of the ticket
     */
    tags?: Array<string> | undefined;
    /**
     * The date the ticket has been completed
     */
    completedAt?: Date | undefined;
    /**
     * The priority of the ticket. Authorized values are HIGH, MEDIUM or LOW.
     */
    priority?: string | undefined;
    /**
     * The users UUIDs the ticket is assigned to
     */
    assignedTo?: Array<string> | undefined;
    /**
     * The comment of the ticket
     */
    comment?: UnifiedTicketingCommentInput | undefined;
    /**
     * The UUID of the account which the ticket belongs to
     */
    accountId?: string | undefined;
    /**
     * The UUID of the contact which the ticket belongs to
     */
    contactId?: string | undefined;
    /**
     * The attachements UUIDs tied to the ticket
     */
    attachments?: Array<string> | undefined;
    fieldMappings: FieldMappings;
    /**
     * The UUID of the ticket
     */
    id?: string | undefined;
    /**
     * The id of the ticket in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: RemoteData;
    createdAt: CreatedAt;
    modifiedAt: ModifiedAt;
};

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
export const CreatedAt$inboundSchema: z.ZodType<CreatedAt, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type CreatedAt$Outbound = {};

/** @internal */
export const CreatedAt$outboundSchema: z.ZodType<CreatedAt$Outbound, z.ZodTypeDef, CreatedAt> =
    z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatedAt$ {
    /** @deprecated use `CreatedAt$inboundSchema` instead. */
    export const inboundSchema = CreatedAt$inboundSchema;
    /** @deprecated use `CreatedAt$outboundSchema` instead. */
    export const outboundSchema = CreatedAt$outboundSchema;
    /** @deprecated use `CreatedAt$Outbound` instead. */
    export type Outbound = CreatedAt$Outbound;
}

/** @internal */
export const ModifiedAt$inboundSchema: z.ZodType<ModifiedAt, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type ModifiedAt$Outbound = {};

/** @internal */
export const ModifiedAt$outboundSchema: z.ZodType<ModifiedAt$Outbound, z.ZodTypeDef, ModifiedAt> =
    z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModifiedAt$ {
    /** @deprecated use `ModifiedAt$inboundSchema` instead. */
    export const inboundSchema = ModifiedAt$inboundSchema;
    /** @deprecated use `ModifiedAt$outboundSchema` instead. */
    export const outboundSchema = ModifiedAt$outboundSchema;
    /** @deprecated use `ModifiedAt$Outbound` instead. */
    export type Outbound = ModifiedAt$Outbound;
}

/** @internal */
export const UnifiedTicketingTicketOutput$inboundSchema: z.ZodType<
    UnifiedTicketingTicketOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string(),
        status: z.string().optional(),
        description: z.string(),
        due_date: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        type: z.string().optional(),
        parent_ticket: z.string().optional(),
        collections: z.string().optional(),
        tags: z.array(z.string()).optional(),
        completed_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        priority: z.string().optional(),
        assigned_to: z.array(z.string()).optional(),
        comment: UnifiedTicketingCommentInput$inboundSchema.optional(),
        account_id: z.string().optional(),
        contact_id: z.string().optional(),
        attachments: z.array(z.string()).optional(),
        field_mappings: z.lazy(() => FieldMappings$inboundSchema),
        id: z.string().optional(),
        remote_id: z.string().optional(),
        remote_data: z.lazy(() => RemoteData$inboundSchema),
        created_at: z.lazy(() => CreatedAt$inboundSchema),
        modified_at: z.lazy(() => ModifiedAt$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            due_date: "dueDate",
            parent_ticket: "parentTicket",
            completed_at: "completedAt",
            assigned_to: "assignedTo",
            account_id: "accountId",
            contact_id: "contactId",
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedTicketingTicketOutput$Outbound = {
    name: string;
    status?: string | undefined;
    description: string;
    due_date?: string | undefined;
    type?: string | undefined;
    parent_ticket?: string | undefined;
    collections?: string | undefined;
    tags?: Array<string> | undefined;
    completed_at?: string | undefined;
    priority?: string | undefined;
    assigned_to?: Array<string> | undefined;
    comment?: UnifiedTicketingCommentInput$Outbound | undefined;
    account_id?: string | undefined;
    contact_id?: string | undefined;
    attachments?: Array<string> | undefined;
    field_mappings: FieldMappings$Outbound;
    id?: string | undefined;
    remote_id?: string | undefined;
    remote_data: RemoteData$Outbound;
    created_at: CreatedAt$Outbound;
    modified_at: ModifiedAt$Outbound;
};

/** @internal */
export const UnifiedTicketingTicketOutput$outboundSchema: z.ZodType<
    UnifiedTicketingTicketOutput$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingTicketOutput
> = z
    .object({
        name: z.string(),
        status: z.string().optional(),
        description: z.string(),
        dueDate: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        type: z.string().optional(),
        parentTicket: z.string().optional(),
        collections: z.string().optional(),
        tags: z.array(z.string()).optional(),
        completedAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        priority: z.string().optional(),
        assignedTo: z.array(z.string()).optional(),
        comment: UnifiedTicketingCommentInput$outboundSchema.optional(),
        accountId: z.string().optional(),
        contactId: z.string().optional(),
        attachments: z.array(z.string()).optional(),
        fieldMappings: z.lazy(() => FieldMappings$outboundSchema),
        id: z.string().optional(),
        remoteId: z.string().optional(),
        remoteData: z.lazy(() => RemoteData$outboundSchema),
        createdAt: z.lazy(() => CreatedAt$outboundSchema),
        modifiedAt: z.lazy(() => ModifiedAt$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            dueDate: "due_date",
            parentTicket: "parent_ticket",
            completedAt: "completed_at",
            assignedTo: "assigned_to",
            accountId: "account_id",
            contactId: "contact_id",
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
export namespace UnifiedTicketingTicketOutput$ {
    /** @deprecated use `UnifiedTicketingTicketOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingTicketOutput$inboundSchema;
    /** @deprecated use `UnifiedTicketingTicketOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingTicketOutput$outboundSchema;
    /** @deprecated use `UnifiedTicketingTicketOutput$Outbound` instead. */
    export type Outbound = UnifiedTicketingTicketOutput$Outbound;
}
