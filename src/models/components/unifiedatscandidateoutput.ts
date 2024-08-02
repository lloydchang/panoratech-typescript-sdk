/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { Email, Email$inboundSchema, Email$Outbound, Email$outboundSchema } from "./email.js";
import { Phone, Phone$inboundSchema, Phone$Outbound, Phone$outboundSchema } from "./phone.js";
import { Url, Url$inboundSchema, Url$Outbound, Url$outboundSchema } from "./url.js";
import * as z from "zod";

export type UnifiedAtsCandidateOutput = {
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
    attachments?: Array<string> | null | undefined;
    /**
     * The applications UUIDs of the candidate
     */
    applications?: Array<string> | null | undefined;
    /**
     * The tags of the candidate
     */
    tags?: Array<string> | null | undefined;
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
    /**
     * The UUID of the candidate
     */
    id?: string | null | undefined;
    /**
     * The id of the candidate in the context of the 3rd Party
     */
    remoteId?: string | null | undefined;
    /**
     * The remote data of the candidate in the context of the 3rd Party
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
export const UnifiedAtsCandidateOutput$inboundSchema: z.ZodType<
    UnifiedAtsCandidateOutput,
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
        attachments: z.nullable(z.array(z.string())).optional(),
        applications: z.nullable(z.array(z.string())).optional(),
        tags: z.nullable(z.array(z.string())).optional(),
        urls: z.nullable(z.array(Url$inboundSchema)).optional(),
        phone_numbers: z.nullable(z.array(Phone$inboundSchema)).optional(),
        email_addresses: z.nullable(z.array(Email$inboundSchema)).optional(),
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
            remote_id: "remoteId",
            remote_data: "remoteData",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedAtsCandidateOutput$Outbound = {
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
    attachments?: Array<string> | null | undefined;
    applications?: Array<string> | null | undefined;
    tags?: Array<string> | null | undefined;
    urls?: Array<Url$Outbound> | null | undefined;
    phone_numbers?: Array<Phone$Outbound> | null | undefined;
    email_addresses?: Array<Email$Outbound> | null | undefined;
    field_mappings?: { [k: string]: any } | null | undefined;
    id?: string | null | undefined;
    remote_id?: string | null | undefined;
    remote_data?: { [k: string]: any } | null | undefined;
    created_at?: string | null | undefined;
    modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAtsCandidateOutput$outboundSchema: z.ZodType<
    UnifiedAtsCandidateOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAtsCandidateOutput
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
        attachments: z.nullable(z.array(z.string())).optional(),
        applications: z.nullable(z.array(z.string())).optional(),
        tags: z.nullable(z.array(z.string())).optional(),
        urls: z.nullable(z.array(Url$outboundSchema)).optional(),
        phoneNumbers: z.nullable(z.array(Phone$outboundSchema)).optional(),
        emailAddresses: z.nullable(z.array(Email$outboundSchema)).optional(),
        fieldMappings: z.nullable(z.record(z.any())).optional(),
        id: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteData: z.nullable(z.record(z.any())).optional(),
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        modifiedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
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
export namespace UnifiedAtsCandidateOutput$ {
    /** @deprecated use `UnifiedAtsCandidateOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsCandidateOutput$inboundSchema;
    /** @deprecated use `UnifiedAtsCandidateOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsCandidateOutput$outboundSchema;
    /** @deprecated use `UnifiedAtsCandidateOutput$Outbound` instead. */
    export type Outbound = UnifiedAtsCandidateOutput$Outbound;
}
