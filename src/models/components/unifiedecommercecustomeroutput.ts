/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedEcommerceCustomerOutputFieldMappings = {};

/**
 * The remote data of the customer in the context of the 3rd Party
 */
export type UnifiedEcommerceCustomerOutputRemoteData = {};

export type UnifiedEcommerceCustomerOutput = {
  /**
   * The email of the customer
   */
  email?: string | null | undefined;
  /**
   * The first name of the customer
   */
  firstName?: string | null | undefined;
  /**
   * The last name of the customer
   */
  lastName?: string | null | undefined;
  /**
   * The phone number of the customer
   */
  phoneNumber?: string | null | undefined;
  /**
   * The addresses of the customer
   */
  addresses?: Array<Address> | null | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?:
    | UnifiedEcommerceCustomerOutputFieldMappings
    | null
    | undefined;
  /**
   * The UUID of the customer
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the customer in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the customer in the context of the 3rd Party
   */
  remoteData?: UnifiedEcommerceCustomerOutputRemoteData | null | undefined;
  /**
   * The created date of the object
   */
  createdAt?: string | null | undefined;
  /**
   * The modified date of the object
   */
  modifiedAt?: string | null | undefined;
};

/** @internal */
export const UnifiedEcommerceCustomerOutputFieldMappings$inboundSchema:
  z.ZodType<
    UnifiedEcommerceCustomerOutputFieldMappings,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedEcommerceCustomerOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedEcommerceCustomerOutputFieldMappings$outboundSchema:
  z.ZodType<
    UnifiedEcommerceCustomerOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedEcommerceCustomerOutputFieldMappings
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedEcommerceCustomerOutputFieldMappings$ {
  /** @deprecated use `UnifiedEcommerceCustomerOutputFieldMappings$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedEcommerceCustomerOutputFieldMappings$inboundSchema;
  /** @deprecated use `UnifiedEcommerceCustomerOutputFieldMappings$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedEcommerceCustomerOutputFieldMappings$outboundSchema;
  /** @deprecated use `UnifiedEcommerceCustomerOutputFieldMappings$Outbound` instead. */
  export type Outbound = UnifiedEcommerceCustomerOutputFieldMappings$Outbound;
}

export function unifiedEcommerceCustomerOutputFieldMappingsToJSON(
  unifiedEcommerceCustomerOutputFieldMappings:
    UnifiedEcommerceCustomerOutputFieldMappings,
): string {
  return JSON.stringify(
    UnifiedEcommerceCustomerOutputFieldMappings$outboundSchema.parse(
      unifiedEcommerceCustomerOutputFieldMappings,
    ),
  );
}

export function unifiedEcommerceCustomerOutputFieldMappingsFromJSON(
  jsonString: string,
): SafeParseResult<
  UnifiedEcommerceCustomerOutputFieldMappings,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UnifiedEcommerceCustomerOutputFieldMappings$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UnifiedEcommerceCustomerOutputFieldMappings' from JSON`,
  );
}

/** @internal */
export const UnifiedEcommerceCustomerOutputRemoteData$inboundSchema: z.ZodType<
  UnifiedEcommerceCustomerOutputRemoteData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UnifiedEcommerceCustomerOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedEcommerceCustomerOutputRemoteData$outboundSchema: z.ZodType<
  UnifiedEcommerceCustomerOutputRemoteData$Outbound,
  z.ZodTypeDef,
  UnifiedEcommerceCustomerOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedEcommerceCustomerOutputRemoteData$ {
  /** @deprecated use `UnifiedEcommerceCustomerOutputRemoteData$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedEcommerceCustomerOutputRemoteData$inboundSchema;
  /** @deprecated use `UnifiedEcommerceCustomerOutputRemoteData$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedEcommerceCustomerOutputRemoteData$outboundSchema;
  /** @deprecated use `UnifiedEcommerceCustomerOutputRemoteData$Outbound` instead. */
  export type Outbound = UnifiedEcommerceCustomerOutputRemoteData$Outbound;
}

export function unifiedEcommerceCustomerOutputRemoteDataToJSON(
  unifiedEcommerceCustomerOutputRemoteData:
    UnifiedEcommerceCustomerOutputRemoteData,
): string {
  return JSON.stringify(
    UnifiedEcommerceCustomerOutputRemoteData$outboundSchema.parse(
      unifiedEcommerceCustomerOutputRemoteData,
    ),
  );
}

export function unifiedEcommerceCustomerOutputRemoteDataFromJSON(
  jsonString: string,
): SafeParseResult<
  UnifiedEcommerceCustomerOutputRemoteData,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UnifiedEcommerceCustomerOutputRemoteData$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UnifiedEcommerceCustomerOutputRemoteData' from JSON`,
  );
}

/** @internal */
export const UnifiedEcommerceCustomerOutput$inboundSchema: z.ZodType<
  UnifiedEcommerceCustomerOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.nullable(z.string()).optional(),
  first_name: z.nullable(z.string()).optional(),
  last_name: z.nullable(z.string()).optional(),
  phone_number: z.nullable(z.string()).optional(),
  addresses: z.nullable(z.array(Address$inboundSchema)).optional(),
  field_mappings: z.nullable(
    z.lazy(() => UnifiedEcommerceCustomerOutputFieldMappings$inboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_data: z.nullable(
    z.lazy(() => UnifiedEcommerceCustomerOutputRemoteData$inboundSchema),
  ).optional(),
  created_at: z.nullable(z.string()).optional(),
  modified_at: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "last_name": "lastName",
    "phone_number": "phoneNumber",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedEcommerceCustomerOutput$Outbound = {
  email?: string | null | undefined;
  first_name?: string | null | undefined;
  last_name?: string | null | undefined;
  phone_number?: string | null | undefined;
  addresses?: Array<Address$Outbound> | null | undefined;
  field_mappings?:
    | UnifiedEcommerceCustomerOutputFieldMappings$Outbound
    | null
    | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?:
    | UnifiedEcommerceCustomerOutputRemoteData$Outbound
    | null
    | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedEcommerceCustomerOutput$outboundSchema: z.ZodType<
  UnifiedEcommerceCustomerOutput$Outbound,
  z.ZodTypeDef,
  UnifiedEcommerceCustomerOutput
> = z.object({
  email: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  phoneNumber: z.nullable(z.string()).optional(),
  addresses: z.nullable(z.array(Address$outboundSchema)).optional(),
  fieldMappings: z.nullable(
    z.lazy(() => UnifiedEcommerceCustomerOutputFieldMappings$outboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(
    z.lazy(() => UnifiedEcommerceCustomerOutputRemoteData$outboundSchema),
  ).optional(),
  createdAt: z.nullable(z.string()).optional(),
  modifiedAt: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
    phoneNumber: "phone_number",
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
export namespace UnifiedEcommerceCustomerOutput$ {
  /** @deprecated use `UnifiedEcommerceCustomerOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedEcommerceCustomerOutput$inboundSchema;
  /** @deprecated use `UnifiedEcommerceCustomerOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedEcommerceCustomerOutput$outboundSchema;
  /** @deprecated use `UnifiedEcommerceCustomerOutput$Outbound` instead. */
  export type Outbound = UnifiedEcommerceCustomerOutput$Outbound;
}

export function unifiedEcommerceCustomerOutputToJSON(
  unifiedEcommerceCustomerOutput: UnifiedEcommerceCustomerOutput,
): string {
  return JSON.stringify(
    UnifiedEcommerceCustomerOutput$outboundSchema.parse(
      unifiedEcommerceCustomerOutput,
    ),
  );
}

export function unifiedEcommerceCustomerOutputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedEcommerceCustomerOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedEcommerceCustomerOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedEcommerceCustomerOutput' from JSON`,
  );
}
