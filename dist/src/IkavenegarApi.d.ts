export declare enum SMS_STATUS {
    IN_QUEUE = 1,
    SCHEDULE = 2,
    COMMUNICATION = 4,
    COMMUNICATION2 = 5,
    FAILED = 6,
    DELIVERED = 10,
    UNDELIVERED = 11,
    CANCELED = 13,
    BLOCKED = 14,
    INVALID = 100
}
export declare enum STORE_TYPE {
    DIRECT = 0,
    SIMPLE = 1,
    SIMCARD = 2,
    DEVICE = 3
}
export declare enum RECEIVE_STATUS {
    UNREAD = 0,
    READ = 1
}
export declare enum HIDE_TYPE {
    NO_HIDDEN = 0,
    HIDDEN = 1
}
export declare type SimpleParams = {
    sender?: string;
    receptor: string;
    message: string;
    date?: Date;
    type?: STORE_TYPE;
    localid?: string;
    hide?: HIDE_TYPE;
};
export declare type ArrayParams = {
    sender: Array<string>;
    receptor: Array<string>;
    message: Array<string>;
    date?: Date;
    type?: Array<STORE_TYPE>;
    localmessageids?: Array<string>;
    hide?: HIDE_TYPE;
};
export declare type StatusParams = {
    messageid: number;
};
export declare type SelectParams = {
    messageid: number;
};
export declare type StatusByLocalParams = {
    localid: number;
};
export declare type SelectOutBoxParams = {
    startdate: number;
    enddate?: number;
    sender?: string;
};
export declare type LastOutBoxParams = {
    pagesize: number;
    sender?: string;
};
export declare type CountOutBoxParams = {
    startdate: number;
    enddate?: number;
    status?: SMS_STATUS;
};
export declare type CancelParams = {
    messageid: number;
};
export declare type ReceiveParams = {
    linenumber: string;
    isread: RECEIVE_STATUS;
};
export declare type CountInboxParams = {
    startdate: number;
    enddate?: number;
    linenumber?: string;
    isread?: RECEIVE_STATUS;
};
export declare type LookupParams = {
    receptor: string;
    token: string;
    token2?: string;
    token3?: string;
    template: string;
    type?: string;
};
export declare type TTSParams = {
    receptor: string;
    message: string;
    date?: Date;
    localid?: string;
};
export declare type ConfigParams = {
    apilogs?: string;
    dailyreport?: string;
    debugmode?: string;
    defaultsender?: string;
    mincreditalarm?: number;
    resendfailed?: string;
};
export declare enum ACTION {
    SMS = "sms",
    VERIFY = "verify",
    ACCOUNT = "account",
    CALL = "call"
}
export declare enum METHOD {
    SEND = "send",
    SEND_ARRAY = "sendarray",
    STATUS = "status",
    STATUS_LOCAL_MESSAGE_ID = "statuslocalmessageid",
    SELECT = "select",
    SELECT_OUTBOX = "selectoutbox",
    LATEST_OUTBOX = "latestoutbox",
    COUNT_OUTBOX = "countoutbox",
    CANCEL = "cancel",
    RECEIVE = "receive",
    COUNT_INBOX = "countinbox",
    COUNT_POSTALCODE = "countpostalcode",
    SEND_BY_POSTALCODE = "sendbypostalcode",
    LOOKUP = "lookup",
    INFO = "info",
    CONFIG = "config",
    MAKETTS = "maketts"
}
export default interface IKavenegarApi {
    readonly version: string;
    readonly apikey: string;
    request(action: ACTION, method: METHOD, params: SimpleParams): any;
    send(data: SimpleParams): any;
    sendArray?(data: ArrayParams): any;
    status?(data: StatusParams): any;
    statusLocalMessageId?(data: StatusByLocalParams): any;
    select?(data: SelectParams): any;
    selectOutbox?(data: SelectOutBoxParams): any;
    latestOutbox?(data: LastOutBoxParams): any;
    countOutbox?(data: CountOutBoxParams): any;
    cancel?(data: CancelParams): any;
    receive?(data: ReceiveParams): any;
    countInbox?(data: CountInboxParams): any;
    verifyLookup(data: LookupParams): any;
    countPostalCode?(data: SimpleParams): any;
    sendByPostalCode?(data: SimpleParams): any;
    accountInfo?(): any;
    accountConfig?(data: ConfigParams): any;
    callMakeTTS?(data: TTSParams): any;
}
//# sourceMappingURL=IkavenegarApi.d.ts.map