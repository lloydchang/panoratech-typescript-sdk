/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UnifiedCrmTaskInput = {
  /**
   * The subject of the task
   */
  subject: string | null;
  /**
   * The content of the task
   */
  content: string | null;
  /**
   * The status of the task. Authorized values are PENDING, COMPLETED.
   */
  status: string | null;
  /**
   * The due date of the task
   */
  dueDate?: string | null | undefined;
  /**
   * The finished date of the task
   */
  finishedDate?: string | null | undefined;
  /**
   * The UUID of the user tied to the task
   */
  userId?: string | null | undefined;
  /**
   * The UUID of the company tied to the task
   */
  companyId?: string | null | undefined;
  /**
   * The UUID of the deal tied to the task
   */
  dealId?: string | null | undefined;
  /**
   * The custom field mappings of the task between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const UnifiedCrmTaskInput$inboundSchema: z.ZodType<
  UnifiedCrmTaskInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  subject: z.nullable(z.string()),
  content: z.nullable(z.string()),
  status: z.nullable(z.string()),
  due_date: z.nullable(z.string()).optional(),
  finished_date: z.nullable(z.string()).optional(),
  user_id: z.nullable(z.string()).optional(),
  company_id: z.nullable(z.string()).optional(),
  deal_id: z.nullable(z.string()).optional(),
  field_mappings: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "due_date": "dueDate",
    "finished_date": "finishedDate",
    "user_id": "userId",
    "company_id": "companyId",
    "deal_id": "dealId",
    "field_mappings": "fieldMappings",
  });
});

/** @internal */
export type UnifiedCrmTaskInput$Outbound = {
  subject: string | null;
  content: string | null;
  status: string | null;
  due_date?: string | null | undefined;
  finished_date?: string | null | undefined;
  user_id?: string | null | undefined;
  company_id?: string | null | undefined;
  deal_id?: string | null | undefined;
  field_mappings?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const UnifiedCrmTaskInput$outboundSchema: z.ZodType<
  UnifiedCrmTaskInput$Outbound,
  z.ZodTypeDef,
  UnifiedCrmTaskInput
> = z.object({
  subject: z.nullable(z.string()),
  content: z.nullable(z.string()),
  status: z.nullable(z.string()),
  dueDate: z.nullable(z.string()).optional(),
  finishedDate: z.nullable(z.string()).optional(),
  userId: z.nullable(z.string()).optional(),
  companyId: z.nullable(z.string()).optional(),
  dealId: z.nullable(z.string()).optional(),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    dueDate: "due_date",
    finishedDate: "finished_date",
    userId: "user_id",
    companyId: "company_id",
    dealId: "deal_id",
    fieldMappings: "field_mappings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedCrmTaskInput$ {
  /** @deprecated use `UnifiedCrmTaskInput$inboundSchema` instead. */
  export const inboundSchema = UnifiedCrmTaskInput$inboundSchema;
  /** @deprecated use `UnifiedCrmTaskInput$outboundSchema` instead. */
  export const outboundSchema = UnifiedCrmTaskInput$outboundSchema;
  /** @deprecated use `UnifiedCrmTaskInput$Outbound` instead. */
  export type Outbound = UnifiedCrmTaskInput$Outbound;
}

export function unifiedCrmTaskInputToJSON(
  unifiedCrmTaskInput: UnifiedCrmTaskInput,
): string {
  return JSON.stringify(
    UnifiedCrmTaskInput$outboundSchema.parse(unifiedCrmTaskInput),
  );
}

export function unifiedCrmTaskInputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedCrmTaskInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedCrmTaskInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedCrmTaskInput' from JSON`,
  );
}
