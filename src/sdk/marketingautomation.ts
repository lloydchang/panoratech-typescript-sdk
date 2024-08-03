/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Actions } from "./actions.js";
import { Automations } from "./automations.js";
import { Campaigns } from "./campaigns.js";
import { Emails } from "./emails.js";
import { Events } from "./events.js";
import { Lists } from "./lists.js";
import { Messages } from "./messages.js";
import { PanoraMarketingautomationContacts } from "./panoramarketingautomationcontacts.js";
import { PanoraMarketingautomationUsers } from "./panoramarketingautomationusers.js";
import { Templates } from "./templates.js";

export class Marketingautomation extends ClientSDK {
    private _actions?: Actions;
    get actions(): Actions {
        return (this._actions ??= new Actions(this.options$));
    }

    private _automations?: Automations;
    get automations(): Automations {
        return (this._automations ??= new Automations(this.options$));
    }

    private _campaigns?: Campaigns;
    get campaigns(): Campaigns {
        return (this._campaigns ??= new Campaigns(this.options$));
    }

    private _contacts?: PanoraMarketingautomationContacts;
    get contacts(): PanoraMarketingautomationContacts {
        return (this._contacts ??= new PanoraMarketingautomationContacts(this.options$));
    }

    private _emails?: Emails;
    get emails(): Emails {
        return (this._emails ??= new Emails(this.options$));
    }

    private _events?: Events;
    get events(): Events {
        return (this._events ??= new Events(this.options$));
    }

    private _lists?: Lists;
    get lists(): Lists {
        return (this._lists ??= new Lists(this.options$));
    }

    private _messages?: Messages;
    get messages(): Messages {
        return (this._messages ??= new Messages(this.options$));
    }

    private _templates?: Templates;
    get templates(): Templates {
        return (this._templates ??= new Templates(this.options$));
    }

    private _users?: PanoraMarketingautomationUsers;
    get users(): PanoraMarketingautomationUsers {
        return (this._users ??= new PanoraMarketingautomationUsers(this.options$));
    }
}
