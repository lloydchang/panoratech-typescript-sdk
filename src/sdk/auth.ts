/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Login } from "./login.js";

export class Auth extends ClientSDK {
  private _login?: Login;
  get login(): Login {
    return (this._login ??= new Login(this.options$));
  }
}
