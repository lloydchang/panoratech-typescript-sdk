/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveAccountingAttachmentRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the attachment you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Accounting software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingAttachmentRequest$inboundSchema: z.ZodType<
  RetrieveAccountingAttachmentRequest,
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
export type RetrieveAccountingAttachmentRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingAttachmentRequest$outboundSchema: z.ZodType<
  RetrieveAccountingAttachmentRequest$Outbound,
  z.ZodTypeDef,
  RetrieveAccountingAttachmentRequest
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
export namespace RetrieveAccountingAttachmentRequest$ {
  /** @deprecated use `RetrieveAccountingAttachmentRequest$inboundSchema` instead. */
  export const inboundSchema =
    RetrieveAccountingAttachmentRequest$inboundSchema;
  /** @deprecated use `RetrieveAccountingAttachmentRequest$outboundSchema` instead. */
  export const outboundSchema =
    RetrieveAccountingAttachmentRequest$outboundSchema;
  /** @deprecated use `RetrieveAccountingAttachmentRequest$Outbound` instead. */
  export type Outbound = RetrieveAccountingAttachmentRequest$Outbound;
}

export function retrieveAccountingAttachmentRequestToJSON(
  retrieveAccountingAttachmentRequest: RetrieveAccountingAttachmentRequest,
): string {
  return JSON.stringify(
    RetrieveAccountingAttachmentRequest$outboundSchema.parse(
      retrieveAccountingAttachmentRequest,
    ),
  );
}

export function retrieveAccountingAttachmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveAccountingAttachmentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      RetrieveAccountingAttachmentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveAccountingAttachmentRequest' from JSON`,
  );
}
