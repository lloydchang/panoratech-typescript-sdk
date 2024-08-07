/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ticketingAttachmentsCreate } from "../funcs/ticketingAttachmentsCreate.js";
import { ticketingAttachmentsList } from "../funcs/ticketingAttachmentsList.js";
import { ticketingAttachmentsRetrieve } from "../funcs/ticketingAttachmentsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PanoraTicketingAttachments extends ClientSDK {
    /**
     * List  Attachments
     */
    async list(
        request: operations.ListTicketingAttachmentsRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListTicketingAttachmentsResponse>> {
        return unwrapResultIterator(ticketingAttachmentsList(this, request, options));
    }

    /**
     * Create Attachments
     *
     * @remarks
     * Create Attachments in any supported Ticketing software
     */
    async create(
        request: operations.CreateTicketingAttachmentRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedTicketingAttachmentOutput> {
        return unwrapAsync(ticketingAttachmentsCreate(this, request, options));
    }

    /**
     * Retrieve Attachments
     *
     * @remarks
     * Retrieve Attachments from any connected Ticketing software
     */
    async retrieve(
        request: operations.RetrieveTicketingAttachmentRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedTicketingAttachmentOutput> {
        return unwrapAsync(ticketingAttachmentsRetrieve(this, request, options));
    }
}
