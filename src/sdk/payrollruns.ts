/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisPayrollrunsList } from "../funcs/hrisPayrollrunsList.js";
import { hrisPayrollrunsRetrieve } from "../funcs/hrisPayrollrunsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Payrollruns extends ClientSDK {
    /**
     * List Payroll Runs
     */
    async list(
        request: operations.ListHrisPayrollRunsRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListHrisPayrollRunsResponse>> {
        return unwrapResultIterator(hrisPayrollrunsList(this, request, options));
    }

    /**
     * Retrieve Payroll Run
     *
     * @remarks
     * Retrieve a Payroll Run from any connected Hris software
     */
    async retrieve(
        request: operations.RetrieveHrisPayrollRunRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedHrisPayrollrunOutput> {
        return unwrapAsync(hrisPayrollrunsRetrieve(this, request, options));
    }
}
