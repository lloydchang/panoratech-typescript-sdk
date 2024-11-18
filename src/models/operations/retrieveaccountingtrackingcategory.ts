/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveAccountingTrackingCategoryRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the trackingcategory you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Accounting software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingTrackingCategoryRequest$inboundSchema: z.ZodType<
  RetrieveAccountingTrackingCategoryRequest,
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
export type RetrieveAccountingTrackingCategoryRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingTrackingCategoryRequest$outboundSchema:
  z.ZodType<
    RetrieveAccountingTrackingCategoryRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingTrackingCategoryRequest
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
export namespace RetrieveAccountingTrackingCategoryRequest$ {
  /** @deprecated use `RetrieveAccountingTrackingCategoryRequest$inboundSchema` instead. */
  export const inboundSchema =
    RetrieveAccountingTrackingCategoryRequest$inboundSchema;
  /** @deprecated use `RetrieveAccountingTrackingCategoryRequest$outboundSchema` instead. */
  export const outboundSchema =
    RetrieveAccountingTrackingCategoryRequest$outboundSchema;
  /** @deprecated use `RetrieveAccountingTrackingCategoryRequest$Outbound` instead. */
  export type Outbound = RetrieveAccountingTrackingCategoryRequest$Outbound;
}

export function retrieveAccountingTrackingCategoryRequestToJSON(
  retrieveAccountingTrackingCategoryRequest:
    RetrieveAccountingTrackingCategoryRequest,
): string {
  return JSON.stringify(
    RetrieveAccountingTrackingCategoryRequest$outboundSchema.parse(
      retrieveAccountingTrackingCategoryRequest,
    ),
  );
}

export function retrieveAccountingTrackingCategoryRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  RetrieveAccountingTrackingCategoryRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RetrieveAccountingTrackingCategoryRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RetrieveAccountingTrackingCategoryRequest' from JSON`,
  );
}
