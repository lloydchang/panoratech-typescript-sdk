/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveAccountingContactRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the contact you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Accounting software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingContactRequest$inboundSchema: z.ZodType<
  RetrieveAccountingContactRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  id: z.string(),
  remote_data: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
  });
});

/** @internal */
export type RetrieveAccountingContactRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingContactRequest$outboundSchema: z.ZodType<
  RetrieveAccountingContactRequest$Outbound,
  z.ZodTypeDef,
  RetrieveAccountingContactRequest
> = z.object({
  xConnectionToken: z.string(),
  id: z.string(),
  remoteData: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAccountingContactRequest$ {
  /** @deprecated use `RetrieveAccountingContactRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveAccountingContactRequest$inboundSchema;
  /** @deprecated use `RetrieveAccountingContactRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveAccountingContactRequest$outboundSchema;
  /** @deprecated use `RetrieveAccountingContactRequest$Outbound` instead. */
  export type Outbound = RetrieveAccountingContactRequest$Outbound;
}

export function retrieveAccountingContactRequestToJSON(
  retrieveAccountingContactRequest: RetrieveAccountingContactRequest,
): string {
  return JSON.stringify(
    RetrieveAccountingContactRequest$outboundSchema.parse(
      retrieveAccountingContactRequest,
    ),
  );
}

export function retrieveAccountingContactRequestFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveAccountingContactRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveAccountingContactRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveAccountingContactRequest' from JSON`,
  );
}
