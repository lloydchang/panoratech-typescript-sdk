/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreateMarketingautomationListRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * Set to true to include data from the original Marketingautomation software.
   */
  remoteData?: boolean | undefined;
  unifiedMarketingautomationListInput:
    components.UnifiedMarketingautomationListInput;
};

/** @internal */
export const CreateMarketingautomationListRequest$inboundSchema: z.ZodType<
  CreateMarketingautomationListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  UnifiedMarketingautomationListInput:
    components.UnifiedMarketingautomationListInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
    "UnifiedMarketingautomationListInput":
      "unifiedMarketingautomationListInput",
  });
});

/** @internal */
export type CreateMarketingautomationListRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  UnifiedMarketingautomationListInput:
    components.UnifiedMarketingautomationListInput$Outbound;
};

/** @internal */
export const CreateMarketingautomationListRequest$outboundSchema: z.ZodType<
  CreateMarketingautomationListRequest$Outbound,
  z.ZodTypeDef,
  CreateMarketingautomationListRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  unifiedMarketingautomationListInput:
    components.UnifiedMarketingautomationListInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
    unifiedMarketingautomationListInput: "UnifiedMarketingautomationListInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMarketingautomationListRequest$ {
  /** @deprecated use `CreateMarketingautomationListRequest$inboundSchema` instead. */
  export const inboundSchema =
    CreateMarketingautomationListRequest$inboundSchema;
  /** @deprecated use `CreateMarketingautomationListRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateMarketingautomationListRequest$outboundSchema;
  /** @deprecated use `CreateMarketingautomationListRequest$Outbound` instead. */
  export type Outbound = CreateMarketingautomationListRequest$Outbound;
}
