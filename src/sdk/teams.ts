/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ticketingTeamsList } from "../funcs/ticketingTeamsList.js";
import { ticketingTeamsRetrieve } from "../funcs/ticketingTeamsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Teams extends ClientSDK {
    /**
     * List  Teams
     */
    async list(
        request: operations.ListTicketingTeamsRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListTicketingTeamsResponse>> {
        return unwrapResultIterator(ticketingTeamsList(this, request, options));
    }

    /**
     * Retrieve Teams
     *
     * @remarks
     * Retrieve Teams from any connected Ticketing software
     */
    async retrieve(
        request: operations.RetrieveTicketingTeamRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedTicketingTeamOutput> {
        return unwrapAsync(ticketingTeamsRetrieve(this, request, options));
    }
}
