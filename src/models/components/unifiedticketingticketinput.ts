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

export type UnifiedTicketingTicketInputFieldMappings = {};

export type UnifiedTicketingTicketInput = {
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
    fieldMappings: UnifiedTicketingTicketInputFieldMappings;
};

/** @internal */
export const UnifiedTicketingTicketInputFieldMappings$inboundSchema: z.ZodType<
    UnifiedTicketingTicketInputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingTicketInputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedTicketingTicketInputFieldMappings$outboundSchema: z.ZodType<
    UnifiedTicketingTicketInputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingTicketInputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingTicketInputFieldMappings$ {
    /** @deprecated use `UnifiedTicketingTicketInputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingTicketInputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedTicketingTicketInputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingTicketInputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedTicketingTicketInputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedTicketingTicketInputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedTicketingTicketInput$inboundSchema: z.ZodType<
    UnifiedTicketingTicketInput,
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
        field_mappings: z.lazy(() => UnifiedTicketingTicketInputFieldMappings$inboundSchema),
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
        });
    });

/** @internal */
export type UnifiedTicketingTicketInput$Outbound = {
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
    field_mappings: UnifiedTicketingTicketInputFieldMappings$Outbound;
};

/** @internal */
export const UnifiedTicketingTicketInput$outboundSchema: z.ZodType<
    UnifiedTicketingTicketInput$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingTicketInput
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
        fieldMappings: z.lazy(() => UnifiedTicketingTicketInputFieldMappings$outboundSchema),
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
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingTicketInput$ {
    /** @deprecated use `UnifiedTicketingTicketInput$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingTicketInput$inboundSchema;
    /** @deprecated use `UnifiedTicketingTicketInput$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingTicketInput$outboundSchema;
    /** @deprecated use `UnifiedTicketingTicketInput$Outbound` instead. */
    export type Outbound = UnifiedTicketingTicketInput$Outbound;
}
