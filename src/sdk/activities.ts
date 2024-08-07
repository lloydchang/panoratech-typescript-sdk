/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atsActivitiesCreate } from "../funcs/atsActivitiesCreate.js";
import { atsActivitiesList } from "../funcs/atsActivitiesList.js";
import { atsActivitiesRetrieve } from "../funcs/atsActivitiesRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Activities extends ClientSDK {
    /**
     * List  Activities
     */
    async list(
        request: operations.ListAtsActivityRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListAtsActivityResponse>> {
        return unwrapResultIterator(atsActivitiesList(this, request, options));
    }

    /**
     * Create Activities
     *
     * @remarks
     * Create Activities in any supported Ats software
     */
    async create(
        request: operations.CreateAtsActivityRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedAtsActivityOutput> {
        return unwrapAsync(atsActivitiesCreate(this, request, options));
    }

    /**
     * Retrieve Activities
     *
     * @remarks
     * Retrieve Activities from any connected Ats software
     */
    async retrieve(
        request: operations.RetrieveAtsActivityRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedAtsActivityOutput> {
        return unwrapAsync(atsActivitiesRetrieve(this, request, options));
    }
}
