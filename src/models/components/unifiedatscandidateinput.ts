/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { Email, Email$inboundSchema, Email$Outbound, Email$outboundSchema } from "./email.js";
import { Phone, Phone$inboundSchema, Phone$Outbound, Phone$outboundSchema } from "./phone.js";
import {
    UnifiedAtsApplicationOutput,
    UnifiedAtsApplicationOutput$inboundSchema,
    UnifiedAtsApplicationOutput$Outbound,
    UnifiedAtsApplicationOutput$outboundSchema,
} from "./unifiedatsapplicationoutput.js";
import {
    UnifiedAtsAttachmentOutput,
    UnifiedAtsAttachmentOutput$inboundSchema,
    UnifiedAtsAttachmentOutput$Outbound,
    UnifiedAtsAttachmentOutput$outboundSchema,
} from "./unifiedatsattachmentoutput.js";
import {
    UnifiedAtsTagOutput,
    UnifiedAtsTagOutput$inboundSchema,
    UnifiedAtsTagOutput$Outbound,
    UnifiedAtsTagOutput$outboundSchema,
} from "./unifiedatstagoutput.js";
import { Url, Url$inboundSchema, Url$Outbound, Url$outboundSchema } from "./url.js";
import * as z from "zod";

export type UnifiedAtsCandidateInputAttachments = UnifiedAtsAttachmentOutput | string;

export type UnifiedAtsCandidateInputApplications = UnifiedAtsApplicationOutput | string;

export type UnifiedAtsCandidateInputTags = UnifiedAtsTagOutput | string;

export type UnifiedAtsCandidateInput = {
    /**
     * The first name of the candidate
     */
    firstName?: string | null | undefined;
    /**
     * The last name of the candidate
     */
    lastName?: string | null | undefined;
    /**
     * The company of the candidate
     */
    company?: string | null | undefined;
    /**
     * The title of the candidate
     */
    title?: string | null | undefined;
    /**
     * The locations of the candidate
     */
    locations?: string | null | undefined;
    /**
     * Whether the candidate is private
     */
    isPrivate?: boolean | null | undefined;
    /**
     * Whether the candidate is reachable by email
     */
    emailReachable?: boolean | null | undefined;
    /**
     * The remote creation date of the candidate
     */
    remoteCreatedAt?: Date | null | undefined;
    /**
     * The remote modification date of the candidate
     */
    remoteModifiedAt?: Date | null | undefined;
    /**
     * The last interaction date with the candidate
     */
    lastInteractionAt?: Date | null | undefined;
    /**
     * The attachments UUIDs of the candidate
     */
    attachments?: Array<UnifiedAtsAttachmentOutput | string> | null | undefined;
    /**
     * The applications UUIDs of the candidate
     */
    applications?: Array<UnifiedAtsApplicationOutput | string> | null | undefined;
    /**
     * The tags of the candidate
     */
    tags?: Array<UnifiedAtsTagOutput | string> | null | undefined;
    /**
     * The urls of the candidate, possible values for Url type are WEBSITE, BLOG, LINKEDIN, GITHUB, or OTHER
     */
    urls?: Array<Url> | null | undefined;
    /**
     * The phone numbers of the candidate
     */
    phoneNumbers?: Array<Phone> | null | undefined;
    /**
     * The email addresses of the candidate
     */
    emailAddresses?: Array<Email> | null | undefined;
    /**
     * The custom field mappings of the object between the remote 3rd party & Panora
     */
    fieldMappings?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const UnifiedAtsCandidateInputAttachments$inboundSchema: z.ZodType<
    UnifiedAtsCandidateInputAttachments,
    z.ZodTypeDef,
    unknown
> = z.union([UnifiedAtsAttachmentOutput$inboundSchema, z.string()]);

/** @internal */
export type UnifiedAtsCandidateInputAttachments$Outbound =
    | UnifiedAtsAttachmentOutput$Outbound
    | string;

/** @internal */
export const UnifiedAtsCandidateInputAttachments$outboundSchema: z.ZodType<
    UnifiedAtsCandidateInputAttachments$Outbound,
    z.ZodTypeDef,
    UnifiedAtsCandidateInputAttachments
> = z.union([UnifiedAtsAttachmentOutput$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsCandidateInputAttachments$ {
    /** @deprecated use `UnifiedAtsCandidateInputAttachments$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsCandidateInputAttachments$inboundSchema;
    /** @deprecated use `UnifiedAtsCandidateInputAttachments$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsCandidateInputAttachments$outboundSchema;
    /** @deprecated use `UnifiedAtsCandidateInputAttachments$Outbound` instead. */
    export type Outbound = UnifiedAtsCandidateInputAttachments$Outbound;
}

/** @internal */
export const UnifiedAtsCandidateInputApplications$inboundSchema: z.ZodType<
    UnifiedAtsCandidateInputApplications,
    z.ZodTypeDef,
    unknown
> = z.union([UnifiedAtsApplicationOutput$inboundSchema, z.string()]);

/** @internal */
export type UnifiedAtsCandidateInputApplications$Outbound =
    | UnifiedAtsApplicationOutput$Outbound
    | string;

/** @internal */
export const UnifiedAtsCandidateInputApplications$outboundSchema: z.ZodType<
    UnifiedAtsCandidateInputApplications$Outbound,
    z.ZodTypeDef,
    UnifiedAtsCandidateInputApplications
> = z.union([UnifiedAtsApplicationOutput$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsCandidateInputApplications$ {
    /** @deprecated use `UnifiedAtsCandidateInputApplications$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsCandidateInputApplications$inboundSchema;
    /** @deprecated use `UnifiedAtsCandidateInputApplications$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsCandidateInputApplications$outboundSchema;
    /** @deprecated use `UnifiedAtsCandidateInputApplications$Outbound` instead. */
    export type Outbound = UnifiedAtsCandidateInputApplications$Outbound;
}

/** @internal */
export const UnifiedAtsCandidateInputTags$inboundSchema: z.ZodType<
    UnifiedAtsCandidateInputTags,
    z.ZodTypeDef,
    unknown
> = z.union([UnifiedAtsTagOutput$inboundSchema, z.string()]);

/** @internal */
export type UnifiedAtsCandidateInputTags$Outbound = UnifiedAtsTagOutput$Outbound | string;

/** @internal */
export const UnifiedAtsCandidateInputTags$outboundSchema: z.ZodType<
    UnifiedAtsCandidateInputTags$Outbound,
    z.ZodTypeDef,
    UnifiedAtsCandidateInputTags
> = z.union([UnifiedAtsTagOutput$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsCandidateInputTags$ {
    /** @deprecated use `UnifiedAtsCandidateInputTags$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsCandidateInputTags$inboundSchema;
    /** @deprecated use `UnifiedAtsCandidateInputTags$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsCandidateInputTags$outboundSchema;
    /** @deprecated use `UnifiedAtsCandidateInputTags$Outbound` instead. */
    export type Outbound = UnifiedAtsCandidateInputTags$Outbound;
}

/** @internal */
export const UnifiedAtsCandidateInput$inboundSchema: z.ZodType<
    UnifiedAtsCandidateInput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        first_name: z.nullable(z.string()).optional(),
        last_name: z.nullable(z.string()).optional(),
        company: z.nullable(z.string()).optional(),
        title: z.nullable(z.string()).optional(),
        locations: z.nullable(z.string()).optional(),
        is_private: z.nullable(z.boolean()).optional(),
        email_reachable: z.nullable(z.boolean()).optional(),
        remote_created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        remote_modified_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        last_interaction_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        attachments: z
            .nullable(z.array(z.union([UnifiedAtsAttachmentOutput$inboundSchema, z.string()])))
            .optional(),
        applications: z
            .nullable(z.array(z.union([UnifiedAtsApplicationOutput$inboundSchema, z.string()])))
            .optional(),
        tags: z
            .nullable(z.array(z.union([UnifiedAtsTagOutput$inboundSchema, z.string()])))
            .optional(),
        urls: z.nullable(z.array(Url$inboundSchema)).optional(),
        phone_numbers: z.nullable(z.array(Phone$inboundSchema)).optional(),
        email_addresses: z.nullable(z.array(Email$inboundSchema)).optional(),
        field_mappings: z.nullable(z.record(z.any())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            first_name: "firstName",
            last_name: "lastName",
            is_private: "isPrivate",
            email_reachable: "emailReachable",
            remote_created_at: "remoteCreatedAt",
            remote_modified_at: "remoteModifiedAt",
            last_interaction_at: "lastInteractionAt",
            phone_numbers: "phoneNumbers",
            email_addresses: "emailAddresses",
            field_mappings: "fieldMappings",
        });
    });

/** @internal */
export type UnifiedAtsCandidateInput$Outbound = {
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    company?: string | null | undefined;
    title?: string | null | undefined;
    locations?: string | null | undefined;
    is_private?: boolean | null | undefined;
    email_reachable?: boolean | null | undefined;
    remote_created_at?: string | null | undefined;
    remote_modified_at?: string | null | undefined;
    last_interaction_at?: string | null | undefined;
    attachments?: Array<UnifiedAtsAttachmentOutput$Outbound | string> | null | undefined;
    applications?: Array<UnifiedAtsApplicationOutput$Outbound | string> | null | undefined;
    tags?: Array<UnifiedAtsTagOutput$Outbound | string> | null | undefined;
    urls?: Array<Url$Outbound> | null | undefined;
    phone_numbers?: Array<Phone$Outbound> | null | undefined;
    email_addresses?: Array<Email$Outbound> | null | undefined;
    field_mappings?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const UnifiedAtsCandidateInput$outboundSchema: z.ZodType<
    UnifiedAtsCandidateInput$Outbound,
    z.ZodTypeDef,
    UnifiedAtsCandidateInput
> = z
    .object({
        firstName: z.nullable(z.string()).optional(),
        lastName: z.nullable(z.string()).optional(),
        company: z.nullable(z.string()).optional(),
        title: z.nullable(z.string()).optional(),
        locations: z.nullable(z.string()).optional(),
        isPrivate: z.nullable(z.boolean()).optional(),
        emailReachable: z.nullable(z.boolean()).optional(),
        remoteCreatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        remoteModifiedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        lastInteractionAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        attachments: z
            .nullable(z.array(z.union([UnifiedAtsAttachmentOutput$outboundSchema, z.string()])))
            .optional(),
        applications: z
            .nullable(z.array(z.union([UnifiedAtsApplicationOutput$outboundSchema, z.string()])))
            .optional(),
        tags: z
            .nullable(z.array(z.union([UnifiedAtsTagOutput$outboundSchema, z.string()])))
            .optional(),
        urls: z.nullable(z.array(Url$outboundSchema)).optional(),
        phoneNumbers: z.nullable(z.array(Phone$outboundSchema)).optional(),
        emailAddresses: z.nullable(z.array(Email$outboundSchema)).optional(),
        fieldMappings: z.nullable(z.record(z.any())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            firstName: "first_name",
            lastName: "last_name",
            isPrivate: "is_private",
            emailReachable: "email_reachable",
            remoteCreatedAt: "remote_created_at",
            remoteModifiedAt: "remote_modified_at",
            lastInteractionAt: "last_interaction_at",
            phoneNumbers: "phone_numbers",
            emailAddresses: "email_addresses",
            fieldMappings: "field_mappings",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsCandidateInput$ {
    /** @deprecated use `UnifiedAtsCandidateInput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsCandidateInput$inboundSchema;
    /** @deprecated use `UnifiedAtsCandidateInput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsCandidateInput$outboundSchema;
    /** @deprecated use `UnifiedAtsCandidateInput$Outbound` instead. */
    export type Outbound = UnifiedAtsCandidateInput$Outbound;
}
