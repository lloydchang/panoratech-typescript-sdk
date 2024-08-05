/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The status of the ticket. Authorized values are OPEN or CLOSED.
 */
export enum Status {
    Open = "OPEN",
    Closed = "CLOSED",
}

/**
 * The type of the ticket. Authorized values are PROBLEM, QUESTION, or TASK
 */
export enum Type {
    Bug = "BUG",
    Subtask = "SUBTASK",
    Task = "TASK",
    ToDo = "TO-DO",
}

/**
 * The priority of the ticket. Authorized values are HIGH, MEDIUM or LOW.
 */
export enum Priority {
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW",
}

/**
 * The creator type of the comment. Authorized values are either USER or CONTACT
 */
export enum UnifiedTicketingTicketOutputCreatorType {
    User = "USER",
    Contact = "CONTACT",
}

/**
 * The comment of the ticket
 */
export type Comment = {
    /**
     * The body of the comment
     */
    body: string | null;
    /**
     * The html body of the comment
     */
    htmlBody?: string | null | undefined;
    /**
     * The public status of the comment
     */
    isPrivate?: boolean | null | undefined;
    /**
     * The creator type of the comment. Authorized values are either USER or CONTACT
     */
    creatorType?: UnifiedTicketingTicketOutputCreatorType | null | undefined;
    /**
     * The UUID of the ticket the comment is tied to
     */
    ticketId?: string | null | undefined;
    /**
     * The UUID of the contact which the comment belongs to (if no user_id specified)
     */
    contactId?: string | null | undefined;
    /**
     * The UUID of the user which the comment belongs to (if no contact_id specified)
     */
    userId?: string | null | undefined;
    /**
     * The attachements UUIDs tied to the comment
     */
    attachments?: Array<string> | null | undefined;
};

export type UnifiedTicketingTicketOutput = {
    /**
     * The name of the ticket
     */
    name: string | null;
    /**
     * The status of the ticket. Authorized values are OPEN or CLOSED.
     */
    status?: Status | null | undefined;
    /**
     * The description of the ticket
     */
    description: string | null;
    /**
     * The date the ticket is due
     */
    dueDate?: Date | null | undefined;
    /**
     * The type of the ticket. Authorized values are PROBLEM, QUESTION, or TASK
     */
    type?: Type | null | undefined;
    /**
     * The UUID of the parent ticket
     */
    parentTicket?: string | null | undefined;
    /**
     * The collection UUIDs the ticket belongs to
     */
    collections?: string | null | undefined;
    /**
     * The tags names of the ticket
     */
    tags?: Array<string> | null | undefined;
    /**
     * The date the ticket has been completed
     */
    completedAt?: Date | null | undefined;
    /**
     * The priority of the ticket. Authorized values are HIGH, MEDIUM or LOW.
     */
    priority?: Priority | null | undefined;
    /**
     * The users UUIDs the ticket is assigned to
     */
    assignedTo?: Array<string> | null | undefined;
    /**
     * The comment of the ticket
     */
    comment?: Comment | null | undefined;
    /**
     * The UUID of the account which the ticket belongs to
     */
    accountId?: string | null | undefined;
    /**
     * The UUID of the contact which the ticket belongs to
     */
    contactId?: string | null | undefined;
    /**
     * The attachements UUIDs tied to the ticket
     */
    attachments?: Array<string> | null | undefined;
    /**
     * The custom field mappings of the ticket between the remote 3rd party & Panora
     */
    fieldMappings?: { [k: string]: any } | null | undefined;
    /**
     * The UUID of the ticket
     */
    id?: string | null | undefined;
    /**
     * The id of the ticket in the context of the 3rd Party
     */
    remoteId?: string | null | undefined;
    /**
     * The remote data of the ticket in the context of the 3rd Party
     */
    remoteData?: { [k: string]: any } | null | undefined;
    /**
     * The created date of the object
     */
    createdAt?: Date | null | undefined;
    /**
     * The modified date of the object
     */
    modifiedAt?: Date | null | undefined;
};

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z.nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> = Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
    /** @deprecated use `Status$inboundSchema` instead. */
    export const inboundSchema = Status$inboundSchema;
    /** @deprecated use `Status$outboundSchema` instead. */
    export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(Type);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> = Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
    /** @deprecated use `Type$inboundSchema` instead. */
    export const inboundSchema = Type$inboundSchema;
    /** @deprecated use `Type$outboundSchema` instead. */
    export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const Priority$inboundSchema: z.ZodNativeEnum<typeof Priority> = z.nativeEnum(Priority);

/** @internal */
export const Priority$outboundSchema: z.ZodNativeEnum<typeof Priority> = Priority$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Priority$ {
    /** @deprecated use `Priority$inboundSchema` instead. */
    export const inboundSchema = Priority$inboundSchema;
    /** @deprecated use `Priority$outboundSchema` instead. */
    export const outboundSchema = Priority$outboundSchema;
}

/** @internal */
export const UnifiedTicketingTicketOutputCreatorType$inboundSchema: z.ZodNativeEnum<
    typeof UnifiedTicketingTicketOutputCreatorType
> = z.nativeEnum(UnifiedTicketingTicketOutputCreatorType);

/** @internal */
export const UnifiedTicketingTicketOutputCreatorType$outboundSchema: z.ZodNativeEnum<
    typeof UnifiedTicketingTicketOutputCreatorType
> = UnifiedTicketingTicketOutputCreatorType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingTicketOutputCreatorType$ {
    /** @deprecated use `UnifiedTicketingTicketOutputCreatorType$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingTicketOutputCreatorType$inboundSchema;
    /** @deprecated use `UnifiedTicketingTicketOutputCreatorType$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingTicketOutputCreatorType$outboundSchema;
}

/** @internal */
export const Comment$inboundSchema: z.ZodType<Comment, z.ZodTypeDef, unknown> = z
    .object({
        body: z.nullable(z.string()),
        html_body: z.nullable(z.string()).optional(),
        is_private: z.nullable(z.boolean()).optional(),
        creator_type: z.nullable(UnifiedTicketingTicketOutputCreatorType$inboundSchema).optional(),
        ticket_id: z.nullable(z.string()).optional(),
        contact_id: z.nullable(z.string()).optional(),
        user_id: z.nullable(z.string()).optional(),
        attachments: z.nullable(z.array(z.string())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            html_body: "htmlBody",
            is_private: "isPrivate",
            creator_type: "creatorType",
            ticket_id: "ticketId",
            contact_id: "contactId",
            user_id: "userId",
        });
    });

/** @internal */
export type Comment$Outbound = {
    body: string | null;
    html_body?: string | null | undefined;
    is_private?: boolean | null | undefined;
    creator_type?: string | null | undefined;
    ticket_id?: string | null | undefined;
    contact_id?: string | null | undefined;
    user_id?: string | null | undefined;
    attachments?: Array<string> | null | undefined;
};

/** @internal */
export const Comment$outboundSchema: z.ZodType<Comment$Outbound, z.ZodTypeDef, Comment> = z
    .object({
        body: z.nullable(z.string()),
        htmlBody: z.nullable(z.string()).optional(),
        isPrivate: z.nullable(z.boolean()).optional(),
        creatorType: z.nullable(UnifiedTicketingTicketOutputCreatorType$outboundSchema).optional(),
        ticketId: z.nullable(z.string()).optional(),
        contactId: z.nullable(z.string()).optional(),
        userId: z.nullable(z.string()).optional(),
        attachments: z.nullable(z.array(z.string())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            htmlBody: "html_body",
            isPrivate: "is_private",
            creatorType: "creator_type",
            ticketId: "ticket_id",
            contactId: "contact_id",
            userId: "user_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Comment$ {
    /** @deprecated use `Comment$inboundSchema` instead. */
    export const inboundSchema = Comment$inboundSchema;
    /** @deprecated use `Comment$outboundSchema` instead. */
    export const outboundSchema = Comment$outboundSchema;
    /** @deprecated use `Comment$Outbound` instead. */
    export type Outbound = Comment$Outbound;
}

/** @internal */
export const UnifiedTicketingTicketOutput$inboundSchema: z.ZodType<
    UnifiedTicketingTicketOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.nullable(z.string()),
        status: z.nullable(Status$inboundSchema).optional(),
        description: z.nullable(z.string()),
        due_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        type: z.nullable(Type$inboundSchema).optional(),
        parent_ticket: z.nullable(z.string()).optional(),
        collections: z.nullable(z.string()).optional(),
        tags: z.nullable(z.array(z.string())).optional(),
        completed_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        priority: z.nullable(Priority$inboundSchema).optional(),
        assigned_to: z.nullable(z.array(z.string())).optional(),
        comment: z.nullable(z.lazy(() => Comment$inboundSchema)).optional(),
        account_id: z.nullable(z.string()).optional(),
        contact_id: z.nullable(z.string()).optional(),
        attachments: z.nullable(z.array(z.string())).optional(),
        field_mappings: z.nullable(z.record(z.any())).optional(),
        id: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        remote_data: z.nullable(z.record(z.any())).optional(),
        created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        modified_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
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
    name: string | null;
    status?: string | null | undefined;
    description: string | null;
    due_date?: string | null | undefined;
    type?: string | null | undefined;
    parent_ticket?: string | null | undefined;
    collections?: string | null | undefined;
    tags?: Array<string> | null | undefined;
    completed_at?: string | null | undefined;
    priority?: string | null | undefined;
    assigned_to?: Array<string> | null | undefined;
    comment?: Comment$Outbound | null | undefined;
    account_id?: string | null | undefined;
    contact_id?: string | null | undefined;
    attachments?: Array<string> | null | undefined;
    field_mappings?: { [k: string]: any } | null | undefined;
    id?: string | null | undefined;
    remote_id?: string | null | undefined;
    remote_data?: { [k: string]: any } | null | undefined;
    created_at?: string | null | undefined;
    modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedTicketingTicketOutput$outboundSchema: z.ZodType<
    UnifiedTicketingTicketOutput$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingTicketOutput
> = z
    .object({
        name: z.nullable(z.string()),
        status: z.nullable(Status$outboundSchema).optional(),
        description: z.nullable(z.string()),
        dueDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        type: z.nullable(Type$outboundSchema).optional(),
        parentTicket: z.nullable(z.string()).optional(),
        collections: z.nullable(z.string()).optional(),
        tags: z.nullable(z.array(z.string())).optional(),
        completedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        priority: z.nullable(Priority$outboundSchema).optional(),
        assignedTo: z.nullable(z.array(z.string())).optional(),
        comment: z.nullable(z.lazy(() => Comment$outboundSchema)).optional(),
        accountId: z.nullable(z.string()).optional(),
        contactId: z.nullable(z.string()).optional(),
        attachments: z.nullable(z.array(z.string())).optional(),
        fieldMappings: z.nullable(z.record(z.any())).optional(),
        id: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteData: z.nullable(z.record(z.any())).optional(),
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        modifiedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
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
