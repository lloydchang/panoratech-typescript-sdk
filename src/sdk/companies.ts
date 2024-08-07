/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmCompaniesCreate } from "../funcs/crmCompaniesCreate.js";
import { crmCompaniesList } from "../funcs/crmCompaniesList.js";
import { crmCompaniesRetrieve } from "../funcs/crmCompaniesRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Companies extends ClientSDK {
    /**
     * List Companies
     */
    async list(
        request: operations.ListCrmCompanyRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListCrmCompanyResponse>> {
        return unwrapResultIterator(crmCompaniesList(this, request, options));
    }

    /**
     * Create Companies
     *
     * @remarks
     * Create Companies in any supported CRM software
     */
    async create(
        request: operations.CreateCrmCompanyRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedCrmCompanyOutput> {
        return unwrapAsync(crmCompaniesCreate(this, request, options));
    }

    /**
     * Retrieve Companies
     *
     * @remarks
     * Retrieve Companies from any connected Crm software
     */
    async retrieve(
        request: operations.RetrieveCrmCompanyRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedCrmCompanyOutput> {
        return unwrapAsync(crmCompaniesRetrieve(this, request, options));
    }
}
