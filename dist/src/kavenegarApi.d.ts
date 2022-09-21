import IKavenegarApi, { ACTION, ArrayParams, CancelParams, ConfigParams, CountInboxParams, CountOutBoxParams, LastOutBoxParams, LookupParams, METHOD, ReceiveParams, SelectOutBoxParams, SelectParams, SimpleParams, StatusByLocalParams, StatusParams, TTSParams } from './IkavenegarApi';
export default class KavenegarApi implements IKavenegarApi {
    version: string;
    apikey: string;
    private axiosInstance;
    constructor(apikey: string);
    request(action: ACTION, method: METHOD, params: Record<string, any>): Promise<void>;
    send(data: SimpleParams): Promise<void>;
    sendArray(data: ArrayParams): void;
    status(data: StatusParams): void;
    statusLocalMessageId(data: StatusByLocalParams): void;
    select(data: SelectParams): void;
    selectOutbox(data: SelectOutBoxParams): void;
    latestOutbox(data: LastOutBoxParams): void;
    countOutbox(data: CountOutBoxParams): void;
    cancel(data: CancelParams): void;
    receive(data: ReceiveParams): void;
    countInbox(data: CountInboxParams): void;
    countPostalCode(data: SimpleParams): void;
    sendByPostalCode(data: SimpleParams): void;
    verifyLookup(data: LookupParams): void;
    accountInfo(): Promise<any>;
    accountConfig(data: ConfigParams): void;
    callMakeTTS(data: TTSParams): void;
}
//# sourceMappingURL=kavenegarApi.d.ts.map