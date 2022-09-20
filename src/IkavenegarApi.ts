export enum SMS_STATUS {
    IN_QUEUE = 1,
    SCHEDULE = 2,
    COMMUNICATION = 4,
    COMMUNICATION2 = 5,
    FAILED = 6,
    DELIVERED = 10,
    UNDELIVERED = 11,
    CANCELED = 13,
    BLOCKED = 14,
    INVALID = 100,
}
export enum STORE_TYPE {
    DIRECT, // news SMS, don't store
    SIMPLE, //default, store
    SIMCARD, // store in sim card
    DEVICE, // store in device
}
export enum RECEIVE_STATUS {
    UNREAD,
    READ,
}

export enum HIDE_TYPE {
    NO_HIDDEN, // default, show in panel
    HIDDEN, // doesn't show in panel
}

export type SimpleParams = {
    sender?: string;
    receptor: string;
    message: string;
    date?: Date;
    type?: STORE_TYPE;
    localid?: string;
    hide?: HIDE_TYPE;
};

export type ArrayParams = {
    sender: Array<string>;
    receptor: Array<string>;
    message: Array<string>;
    date?: Date;
    type?: Array<STORE_TYPE>;
    localmessageids?: Array<string>;
    hide?: HIDE_TYPE;
};

export type StatusParams = {
    messageid: number;
};
export type SelectParams = {
    messageid: number;
};
export type StatusByLocalParams = {
    localid: number;
};
export type SelectOutBoxParams = {
    startdate: number;
    enddate?: number;
    sender?: string;
};
export type LastOutBoxParams = {
    pagesize: number;
    sender?: string;
};
export type CountOutBoxParams = {
    startdate: number;
    enddate?: number;
    status?: SMS_STATUS;
};
export type CancelParams = {
    messageid: number;
};
export type ReceiveParams = {
    linenumber: string;
    isread: RECEIVE_STATUS;
};
export type CountInboxParams = {
    startdate: number;
    enddate?: number;
    linenumber?: string;
    isread?: RECEIVE_STATUS;
};
export type LookupParams = {
    receptor: string;
    token: string;
    token2?: string;
    token3?: string;
    template: string;
    type?: string;
};
export type TTSParams = {
    receptor: string;
    message: string;
    date?: Date;
    localid?: string;
};
export type ConfigParams = {
    apilogs?: string;
    dailyreport?: string;
    debugmode?: string;
    defaultsender?: string;
    mincreditalarm?: number;
    resendfailed?: string;
};

export enum ACTION {
    SMS = 'sms',
    VERIFY = 'verify',
    ACCOUNT = 'account',
    CALL = 'call',
}
export enum METHOD {
    SEND = 'send',
    SEND_ARRAY = 'sendarray',
    STATUS = 'status',
    STATUS_LOCAL_MESSAGE_ID = 'statuslocalmessageid',
    SELECT = 'select',
    SELECT_OUTBOX = 'selectoutbox',
    LATEST_OUTBOX = 'latestoutbox',
    COUNT_OUTBOX = 'countoutbox',
    CANCEL = 'cancel',
    RECEIVE = 'receive',
    COUNT_INBOX = 'countinbox',
    COUNT_POSTALCODE = 'countpostalcode',
    SEND_BY_POSTALCODE = 'sendbypostalcode',
    LOOKUP = 'lookup',
    INFO = 'info',
    CONFIG = 'config',
    MAKETTS = 'maketts',
}

export default interface IKavenegarApi {
    readonly version: string;
    readonly apikey: string;

    request(action: ACTION, method: METHOD, params: SimpleParams);
    send(data: SimpleParams);
    sendArray?(data: ArrayParams);
    status?(data: StatusParams);
    statusLocalMessageId?(data: StatusByLocalParams);
    select?(data: SelectParams);
    selectOutbox?(data: SelectOutBoxParams);
    latestOutbox?(data: LastOutBoxParams);
    countOutbox?(data: CountOutBoxParams);
    cancel?(data: CancelParams);
    receive?(data: ReceiveParams);
    countInbox?(data: CountInboxParams);
    verifyLookup(data: LookupParams);
    countPostalCode?(data: SimpleParams);
    sendByPostalCode?(data: SimpleParams);
    accountInfo?();
    accountConfig?(data: ConfigParams);
    callMakeTTS?(data: TTSParams);
}
