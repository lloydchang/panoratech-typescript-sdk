/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filestorageUsersList } from "../funcs/filestorageUsersList.js";
import { filestorageUsersRetrieve } from "../funcs/filestorageUsersRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PanoraFilestorageUsers extends ClientSDK {
    /**
     * List Users
     */
    async list(
        request: operations.ListFilestorageUsersRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListFilestorageUsersResponse>> {
        return unwrapResultIterator(filestorageUsersList(this, request, options));
    }

    /**
     * Retrieve Users
     *
     * @remarks
     * Retrieve Users from any connected Filestorage software
     */
    async retrieve(
        request: operations.RetrieveFilestorageUserRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedFilestorageUserOutput> {
        return unwrapAsync(filestorageUsersRetrieve(this, request, options));
    }
}
