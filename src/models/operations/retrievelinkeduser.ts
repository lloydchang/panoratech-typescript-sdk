/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveLinkedUserRequest = {
  id: string;
};

/** @internal */
export const RetrieveLinkedUserRequest$inboundSchema: z.ZodType<
  RetrieveLinkedUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type RetrieveLinkedUserRequest$Outbound = {
  id: string;
};

/** @internal */
export const RetrieveLinkedUserRequest$outboundSchema: z.ZodType<
  RetrieveLinkedUserRequest$Outbound,
  z.ZodTypeDef,
  RetrieveLinkedUserRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveLinkedUserRequest$ {
  /** @deprecated use `RetrieveLinkedUserRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveLinkedUserRequest$inboundSchema;
  /** @deprecated use `RetrieveLinkedUserRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveLinkedUserRequest$outboundSchema;
  /** @deprecated use `RetrieveLinkedUserRequest$Outbound` instead. */
  export type Outbound = RetrieveLinkedUserRequest$Outbound;
}

export function retrieveLinkedUserRequestToJSON(
  retrieveLinkedUserRequest: RetrieveLinkedUserRequest,
): string {
  return JSON.stringify(
    RetrieveLinkedUserRequest$outboundSchema.parse(retrieveLinkedUserRequest),
  );
}

export function retrieveLinkedUserRequestFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveLinkedUserRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveLinkedUserRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveLinkedUserRequest' from JSON`,
  );
}
