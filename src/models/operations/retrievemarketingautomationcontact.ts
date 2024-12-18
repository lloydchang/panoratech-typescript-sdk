/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveMarketingAutomationContactRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the contact you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Marketingautomation software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveMarketingAutomationContactRequest$inboundSchema: z.ZodType<
  RetrieveMarketingAutomationContactRequest,
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
export type RetrieveMarketingAutomationContactRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveMarketingAutomationContactRequest$outboundSchema:
  z.ZodType<
    RetrieveMarketingAutomationContactRequest$Outbound,
    z.ZodTypeDef,
    RetrieveMarketingAutomationContactRequest
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
export namespace RetrieveMarketingAutomationContactRequest$ {
  /** @deprecated use `RetrieveMarketingAutomationContactRequest$inboundSchema` instead. */
  export const inboundSchema =
    RetrieveMarketingAutomationContactRequest$inboundSchema;
  /** @deprecated use `RetrieveMarketingAutomationContactRequest$outboundSchema` instead. */
  export const outboundSchema =
    RetrieveMarketingAutomationContactRequest$outboundSchema;
  /** @deprecated use `RetrieveMarketingAutomationContactRequest$Outbound` instead. */
  export type Outbound = RetrieveMarketingAutomationContactRequest$Outbound;
}

export function retrieveMarketingAutomationContactRequestToJSON(
  retrieveMarketingAutomationContactRequest:
    RetrieveMarketingAutomationContactRequest,
): string {
  return JSON.stringify(
    RetrieveMarketingAutomationContactRequest$outboundSchema.parse(
      retrieveMarketingAutomationContactRequest,
    ),
  );
}

export function retrieveMarketingAutomationContactRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  RetrieveMarketingAutomationContactRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RetrieveMarketingAutomationContactRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RetrieveMarketingAutomationContactRequest' from JSON`,
  );
}
