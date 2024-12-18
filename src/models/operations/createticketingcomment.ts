/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateTicketingCommentRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * Set to true to include data from the original Ticketing software.
   */
  remoteData?: boolean | undefined;
  unifiedTicketingCommentInput: components.UnifiedTicketingCommentInput;
};

/** @internal */
export const CreateTicketingCommentRequest$inboundSchema: z.ZodType<
  CreateTicketingCommentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  UnifiedTicketingCommentInput:
    components.UnifiedTicketingCommentInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
    "UnifiedTicketingCommentInput": "unifiedTicketingCommentInput",
  });
});

/** @internal */
export type CreateTicketingCommentRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  UnifiedTicketingCommentInput:
    components.UnifiedTicketingCommentInput$Outbound;
};

/** @internal */
export const CreateTicketingCommentRequest$outboundSchema: z.ZodType<
  CreateTicketingCommentRequest$Outbound,
  z.ZodTypeDef,
  CreateTicketingCommentRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  unifiedTicketingCommentInput:
    components.UnifiedTicketingCommentInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
    unifiedTicketingCommentInput: "UnifiedTicketingCommentInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTicketingCommentRequest$ {
  /** @deprecated use `CreateTicketingCommentRequest$inboundSchema` instead. */
  export const inboundSchema = CreateTicketingCommentRequest$inboundSchema;
  /** @deprecated use `CreateTicketingCommentRequest$outboundSchema` instead. */
  export const outboundSchema = CreateTicketingCommentRequest$outboundSchema;
  /** @deprecated use `CreateTicketingCommentRequest$Outbound` instead. */
  export type Outbound = CreateTicketingCommentRequest$Outbound;
}

export function createTicketingCommentRequestToJSON(
  createTicketingCommentRequest: CreateTicketingCommentRequest,
): string {
  return JSON.stringify(
    CreateTicketingCommentRequest$outboundSchema.parse(
      createTicketingCommentRequest,
    ),
  );
}

export function createTicketingCommentRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateTicketingCommentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTicketingCommentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTicketingCommentRequest' from JSON`,
  );
}
