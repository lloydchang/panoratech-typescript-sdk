/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";
import {
  Email,
  Email$inboundSchema,
  Email$Outbound,
  Email$outboundSchema,
} from "./email.js";
import {
  Phone,
  Phone$inboundSchema,
  Phone$Outbound,
  Phone$outboundSchema,
} from "./phone.js";

export type UnifiedCrmContactOutput = {
  /**
   * The first name of the contact
   */
  firstName: string | null;
  /**
   * The last name of the contact
   */
  lastName: string | null;
  /**
   * The email addresses of the contact
   */
  emailAddresses?: Array<Email> | null | undefined;
  /**
   * The phone numbers of the contact
   */
  phoneNumbers?: Array<Phone> | null | undefined;
  /**
   * The addresses of the contact
   */
  addresses?: Array<Address> | null | undefined;
  /**
   * The UUID of the user who owns the contact
   */
  userId?: string | null | undefined;
  /**
   * The custom field mappings of the contact between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
  /**
   * The UUID of the contact
   */
  id?: string | null | undefined;
  /**
   * The id of the contact in the context of the Crm 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the contact in the context of the Crm 3rd Party
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
export const UnifiedCrmContactOutput$inboundSchema: z.ZodType<
  UnifiedCrmContactOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  first_name: z.nullable(z.string()),
  last_name: z.nullable(z.string()),
  email_addresses: z.nullable(z.array(Email$inboundSchema)).optional(),
  phone_numbers: z.nullable(z.array(Phone$inboundSchema)).optional(),
  addresses: z.nullable(z.array(Address$inboundSchema)).optional(),
  user_id: z.nullable(z.string()).optional(),
  field_mappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_data: z.nullable(z.record(z.any())).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "last_name": "lastName",
    "email_addresses": "emailAddresses",
    "phone_numbers": "phoneNumbers",
    "user_id": "userId",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedCrmContactOutput$Outbound = {
  first_name: string | null;
  last_name: string | null;
  email_addresses?: Array<Email$Outbound> | null | undefined;
  phone_numbers?: Array<Phone$Outbound> | null | undefined;
  addresses?: Array<Address$Outbound> | null | undefined;
  user_id?: string | null | undefined;
  field_mappings?: { [k: string]: any } | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedCrmContactOutput$outboundSchema: z.ZodType<
  UnifiedCrmContactOutput$Outbound,
  z.ZodTypeDef,
  UnifiedCrmContactOutput
> = z.object({
  firstName: z.nullable(z.string()),
  lastName: z.nullable(z.string()),
  emailAddresses: z.nullable(z.array(Email$outboundSchema)).optional(),
  phoneNumbers: z.nullable(z.array(Phone$outboundSchema)).optional(),
  addresses: z.nullable(z.array(Address$outboundSchema)).optional(),
  userId: z.nullable(z.string()).optional(),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
    emailAddresses: "email_addresses",
    phoneNumbers: "phone_numbers",
    userId: "user_id",
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
export namespace UnifiedCrmContactOutput$ {
  /** @deprecated use `UnifiedCrmContactOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedCrmContactOutput$inboundSchema;
  /** @deprecated use `UnifiedCrmContactOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedCrmContactOutput$outboundSchema;
  /** @deprecated use `UnifiedCrmContactOutput$Outbound` instead. */
  export type Outbound = UnifiedCrmContactOutput$Outbound;
}
