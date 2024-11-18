/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Companies } from "./companies.js";
import { Deals } from "./deals.js";
import { Engagements } from "./engagements.js";
import { Notes } from "./notes.js";
import { PanoraContacts } from "./panoracontacts.js";
import { PanoraUsers } from "./panorausers.js";
import { Stages } from "./stages.js";
import { Tasks } from "./tasks.js";

export class Crm extends ClientSDK {
  private _companies?: Companies;
  get companies(): Companies {
    return (this._companies ??= new Companies(this._options));
  }

  private _contacts?: PanoraContacts;
  get contacts(): PanoraContacts {
    return (this._contacts ??= new PanoraContacts(this._options));
  }

  private _deals?: Deals;
  get deals(): Deals {
    return (this._deals ??= new Deals(this._options));
  }

  private _engagements?: Engagements;
  get engagements(): Engagements {
    return (this._engagements ??= new Engagements(this._options));
  }

  private _notes?: Notes;
  get notes(): Notes {
    return (this._notes ??= new Notes(this._options));
  }

  private _stages?: Stages;
  get stages(): Stages {
    return (this._stages ??= new Stages(this._options));
  }

  private _tasks?: Tasks;
  get tasks(): Tasks {
    return (this._tasks ??= new Tasks(this._options));
  }

  private _users?: PanoraUsers;
  get users(): PanoraUsers {
    return (this._users ??= new PanoraUsers(this._options));
  }
}
