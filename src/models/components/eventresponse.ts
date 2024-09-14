/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * Scope of the event
 */
export enum Type {
  CrmContactCreated = "crm.contact.created",
  CrmContactPulled = "crm.contact.pulled",
  CrmCompanyCreated = "crm.company.created",
  CrmCompanyPulled = "crm.company.pulled",
  CrmDealCreated = "crm.deal.created",
  CrmDealPulled = "crm.deal.pulled",
  CrmEngagementCreated = "crm.engagement.created",
  CrmEngagementPulled = "crm.engagement.pulled",
  CrmNoteCreated = "crm.note.created",
  CrmNotePulled = "crm.note.pulled",
  CrmStagePulled = "crm.stage.pulled",
  CrmTaskPulled = "crm.task.pulled",
  CrmTaskCreated = "crm.task.created",
  CrmUserPulled = "crm.user.pulled",
  TicketingTicketCreated = "ticketing.ticket.created",
  TicketingTicketPulled = "ticketing.ticket.pulled",
  TicketingCommentCreated = "ticketing.comment.created",
  TicketingCommentPulled = "ticketing.comment.pulled",
  TicketingAttachmentCreated = "ticketing.attachment.created",
  TicketingAttachmentPulled = "ticketing.attachment.pulled",
  TicketingCollectionPulled = "ticketing.collection.pulled",
  TicketingAccountPulled = "ticketing.account.pulled",
  TicketingContactPulled = "ticketing.contact.pulled",
  TicketingTagPulled = "ticketing.tag.pulled",
  TicketingTeamPulled = "ticketing.team.pulled",
  TicketingUserPulled = "ticketing.user.pulled",
  AtsActivityCreated = "ats.activity.created",
  AtsActivityPulled = "ats.activity.pulled",
  AtsApplicationCreated = "ats.application.created",
  AtsApplicationPulled = "ats.application.pulled",
  AtsAttachmentCreated = "ats.attachment.created",
  AtsAttachmentPulled = "ats.attachment.pulled",
  AtsCandidateCreated = "ats.candidate.created",
  AtsCandidatePulled = "ats.candidate.pulled",
  AtsDepartmentPulled = "ats.department.pulled",
  AtsEecosPulled = "ats.eecos.pulled",
  AtsInterviewCreated = "ats.interview.created",
  AtsInterviewPulled = "ats.interview.pulled",
  AtsJobPulled = "ats.job.pulled",
  AtsJobinterviewstagePulled = "ats.jobinterviewstage.pulled",
  AtsOfferCreated = "ats.offer.created",
  AtsOfficePulled = "ats.office.pulled",
  AtsRejectreasonPulled = "ats.rejectreason.pulled",
  AtsScorecardPulled = "ats.scorecard.pulled",
  AtsTagPulled = "ats.tag.pulled",
  AtsUserPulled = "ats.user.pulled",
  FilestorageFileCreated = "filestorage.file.created",
  FilestorageFilePulled = "filestorage.file.pulled",
  FilestorageFolderCreated = "filestorage.folder.created",
  FilestorageFolderPulled = "filestorage.folder.pulled",
  FilestorageGroupPulled = "filestorage.group.pulled",
  FilestorageUserPulled = "filestorage.user.pulled",
  FilestorageDrivePulled = "filestorage.drive.pulled",
  FilestoragePermissionPulled = "filestorage.permission.pulled",
  FilestorageSharedlinkPulled = "filestorage.sharedlink.pulled",
  ConnectionCreated = "connection.created",
}

/**
 * Status of the event
 */
export enum EventResponseStatus {
  Success = "success",
  Fail = "fail",
}

/**
 * HTTP method used for the event
 */
export enum Method {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

export type EventResponse = {
  /**
   * Unique identifier for the event
   */
  idEvent: string;
  /**
   * Connection ID associated with the event
   */
  idConnection: string;
  /**
   * Project ID associated with the event
   */
  idProject: string;
  /**
   * Scope of the event
   */
  type: Type;
  /**
   * Status of the event
   */
  status: EventResponseStatus;
  /**
   * Direction of the event
   */
  direction: string;
  /**
   * HTTP method used for the event
   */
  method: Method;
  /**
   * URL associated with the event
   */
  url: string;
  /**
   * Provider associated with the event
   */
  provider: string;
  /**
   * Timestamp of the event
   */
  timestamp: Date;
  /**
   * Linked user ID associated with the event
   */
  idLinkedUser: string;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const EventResponseStatus$inboundSchema: z.ZodNativeEnum<
  typeof EventResponseStatus
> = z.nativeEnum(EventResponseStatus);

/** @internal */
export const EventResponseStatus$outboundSchema: z.ZodNativeEnum<
  typeof EventResponseStatus
> = EventResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventResponseStatus$ {
  /** @deprecated use `EventResponseStatus$inboundSchema` instead. */
  export const inboundSchema = EventResponseStatus$inboundSchema;
  /** @deprecated use `EventResponseStatus$outboundSchema` instead. */
  export const outboundSchema = EventResponseStatus$outboundSchema;
}

/** @internal */
export const Method$inboundSchema: z.ZodNativeEnum<typeof Method> = z
  .nativeEnum(Method);

/** @internal */
export const Method$outboundSchema: z.ZodNativeEnum<typeof Method> =
  Method$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Method$ {
  /** @deprecated use `Method$inboundSchema` instead. */
  export const inboundSchema = Method$inboundSchema;
  /** @deprecated use `Method$outboundSchema` instead. */
  export const outboundSchema = Method$outboundSchema;
}

/** @internal */
export const EventResponse$inboundSchema: z.ZodType<
  EventResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id_event: z.string(),
  id_connection: z.string(),
  id_project: z.string(),
  type: Type$inboundSchema,
  status: EventResponseStatus$inboundSchema,
  direction: z.string(),
  method: Method$inboundSchema,
  url: z.string(),
  provider: z.string(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  id_linked_user: z.string(),
}).transform((v) => {
  return remap$(v, {
    "id_event": "idEvent",
    "id_connection": "idConnection",
    "id_project": "idProject",
    "id_linked_user": "idLinkedUser",
  });
});

/** @internal */
export type EventResponse$Outbound = {
  id_event: string;
  id_connection: string;
  id_project: string;
  type: string;
  status: string;
  direction: string;
  method: string;
  url: string;
  provider: string;
  timestamp: string;
  id_linked_user: string;
};

/** @internal */
export const EventResponse$outboundSchema: z.ZodType<
  EventResponse$Outbound,
  z.ZodTypeDef,
  EventResponse
> = z.object({
  idEvent: z.string(),
  idConnection: z.string(),
  idProject: z.string(),
  type: Type$outboundSchema,
  status: EventResponseStatus$outboundSchema,
  direction: z.string(),
  method: Method$outboundSchema,
  url: z.string(),
  provider: z.string(),
  timestamp: z.date().transform(v => v.toISOString()),
  idLinkedUser: z.string(),
}).transform((v) => {
  return remap$(v, {
    idEvent: "id_event",
    idConnection: "id_connection",
    idProject: "id_project",
    idLinkedUser: "id_linked_user",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventResponse$ {
  /** @deprecated use `EventResponse$inboundSchema` instead. */
  export const inboundSchema = EventResponse$inboundSchema;
  /** @deprecated use `EventResponse$outboundSchema` instead. */
  export const outboundSchema = EventResponse$outboundSchema;
  /** @deprecated use `EventResponse$Outbound` instead. */
  export type Outbound = EventResponse$Outbound;
}
