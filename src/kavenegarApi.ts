import axios, { AxiosInstance } from 'axios';
import IKavenegarApi, {
    ACTION,
    ArrayParams,
    CancelParams,
    ConfigParams,
    CountInboxParams,
    CountOutBoxParams,
    LastOutBoxParams,
    LookupParams,
    METHOD,
    ReceiveParams,
    SelectOutBoxParams,
    SelectParams,
    SimpleParams,
    StatusByLocalParams,
    StatusParams,
    TTSParams,
} from './IkavenegarApi';

export default class KavenegarApi implements IKavenegarApi {
    version: string;
    apikey: string;
    private axiosInstance: AxiosInstance;

    constructor(apikey: string) {
        this.apikey = apikey;
        this.version = 'v1';
        this.axiosInstance = axios.create({
            baseURL: 'https://api.kavenegar.com/',
            // timeout: 1000,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        });
    }

    async request(action: ACTION, method: METHOD, params: Record<string, any>) {
        const path = this.version + '/' + this.apikey + '/' + action + '/' + method + '.json';
        const encodeParams = new URLSearchParams(params);
        await this.axiosInstance
            .post(path, encodeParams, { headers: { 'Content-Length': encodeParams.toString().length } })
            .then((res) => {
                console.log(`PUSH statusCode: ${res.status}`);
                console.log('KavenegarApi axiosInstance: %j', res.data);
            })
            .catch((err) => {
                console.error('KavenegarApi axiosInstance catch err: ', err);
                throw err;
            });
    }

    async send(data: SimpleParams) {
        await this.request(ACTION.SMS, METHOD.SEND, data);
    }
    sendArray(data: ArrayParams) {
        this.request(ACTION.SMS, METHOD.SEND_ARRAY, data);
    }
    status(data: StatusParams) {
        this.request(ACTION.SMS, METHOD.STATUS, data);
    }
    statusLocalMessageId(data: StatusByLocalParams) {
        this.request(ACTION.SMS, METHOD.STATUS_LOCAL_MESSAGE_ID, data);
    }
    select(data: SelectParams) {
        this.request(ACTION.SMS, METHOD.SELECT, data);
    }
    selectOutbox(data: SelectOutBoxParams) {
        this.request(ACTION.SMS, METHOD.SELECT_OUTBOX, data);
    }
    latestOutbox(data: LastOutBoxParams) {
        this.request(ACTION.SMS, METHOD.LATEST_OUTBOX, data);
    }
    countOutbox(data: CountOutBoxParams) {
        this.request(ACTION.SMS, METHOD.COUNT_OUTBOX, data);
    }
    cancel(data: CancelParams) {
        this.request(ACTION.SMS, METHOD.CANCEL, data);
    }
    receive(data: ReceiveParams) {
        this.request(ACTION.SMS, METHOD.RECEIVE, data);
    }
    countInbox(data: CountInboxParams) {
        this.request(ACTION.SMS, METHOD.COUNT_INBOX, data);
    }
    countPostalCode(data: SimpleParams) {
        this.request(ACTION.SMS, METHOD.COUNT_POSTALCODE, data);
    }
    sendByPostalCode(data: SimpleParams) {
        this.request(ACTION.SMS, METHOD.SEND_BY_POSTALCODE, data);
    }
    verifyLookup(data: LookupParams) {
        this.request(ACTION.VERIFY, METHOD.LOOKUP, data);
    }
    async accountInfo() {
        const path = this.version + '/' + this.apikey + '/' + ACTION.ACCOUNT + '/' + METHOD.INFO + '.json';
        return await this.axiosInstance
            .get(path)
            .then((res) => {
                console.log(`PUSH statusCode: ${res.status}`);
                console.log('KavenegarApi axiosInstance: %j', res.data);
                return res.data;
            })
            .catch((err) => {
                console.error('KavenegarApi axiosInstance catch err: ', err);
                throw err;
            });
    }
    accountConfig(data: ConfigParams) {
        this.request(ACTION.ACCOUNT, METHOD.CONFIG, data);
    }
    callMakeTTS(data: TTSParams) {
        this.request(ACTION.CALL, METHOD.MAKETTS, data);
    }
}
