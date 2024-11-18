/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UnifiedFilestorageFolderOutput = {
  /**
   * The name of the folder
   */
  name: string | null;
  /**
   * The size of the folder
   */
  size: string | null;
  /**
   * The url of the folder
   */
  folderUrl: string | null;
  /**
   * The description of the folder
   */
  description: string;
  /**
   * The UUID of the drive tied to the folder
   */
  driveId: string | null;
  /**
   * The UUID of the parent folder
   */
  parentFolderId: string | null;
  /**
   * The UUID of the shared link tied to the folder
   */
  sharedLink: string | null;
  /**
   * The UUID of the permission tied to the folder
   */
  permission: string | null;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
  /**
   * The UUID of the folder
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the folder in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the folder in the context of the 3rd Party
   */
  remoteData?: { [k: string]: any } | null | undefined;
  /**
   * The created date of the folder
   */
  createdAt?: Date | null | undefined;
  /**
   * The modified date of the folder
   */
  modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedFilestorageFolderOutput$inboundSchema: z.ZodType<
  UnifiedFilestorageFolderOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()),
  size: z.nullable(z.string()),
  folder_url: z.nullable(z.string()),
  description: z.string(),
  drive_id: z.nullable(z.string()),
  parent_folder_id: z.nullable(z.string()),
  shared_link: z.nullable(z.string()),
  permission: z.nullable(z.string()),
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
    "folder_url": "folderUrl",
    "drive_id": "driveId",
    "parent_folder_id": "parentFolderId",
    "shared_link": "sharedLink",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedFilestorageFolderOutput$Outbound = {
  name: string | null;
  size: string | null;
  folder_url: string | null;
  description: string;
  drive_id: string | null;
  parent_folder_id: string | null;
  shared_link: string | null;
  permission: string | null;
  field_mappings?: { [k: string]: any } | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedFilestorageFolderOutput$outboundSchema: z.ZodType<
  UnifiedFilestorageFolderOutput$Outbound,
  z.ZodTypeDef,
  UnifiedFilestorageFolderOutput
> = z.object({
  name: z.nullable(z.string()),
  size: z.nullable(z.string()),
  folderUrl: z.nullable(z.string()),
  description: z.string(),
  driveId: z.nullable(z.string()),
  parentFolderId: z.nullable(z.string()),
  sharedLink: z.nullable(z.string()),
  permission: z.nullable(z.string()),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    folderUrl: "folder_url",
    driveId: "drive_id",
    parentFolderId: "parent_folder_id",
    sharedLink: "shared_link",
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
export namespace UnifiedFilestorageFolderOutput$ {
  /** @deprecated use `UnifiedFilestorageFolderOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedFilestorageFolderOutput$inboundSchema;
  /** @deprecated use `UnifiedFilestorageFolderOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedFilestorageFolderOutput$outboundSchema;
  /** @deprecated use `UnifiedFilestorageFolderOutput$Outbound` instead. */
  export type Outbound = UnifiedFilestorageFolderOutput$Outbound;
}

export function unifiedFilestorageFolderOutputToJSON(
  unifiedFilestorageFolderOutput: UnifiedFilestorageFolderOutput,
): string {
  return JSON.stringify(
    UnifiedFilestorageFolderOutput$outboundSchema.parse(
      unifiedFilestorageFolderOutput,
    ),
  );
}

export function unifiedFilestorageFolderOutputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedFilestorageFolderOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedFilestorageFolderOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedFilestorageFolderOutput' from JSON`,
  );
}
