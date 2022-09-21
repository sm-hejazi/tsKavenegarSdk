"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const IkavenegarApi_1 = require("./IkavenegarApi");
class KavenegarApi {
    version;
    apikey;
    axiosInstance;
    constructor(apikey) {
        this.apikey = apikey;
        this.version = 'v1';
        this.axiosInstance = axios_1.default.create({
            baseURL: 'https://api.kavenegar.com/',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        });
    }
    async request(action, method, params) {
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
    async send(data) {
        await this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.SEND, data);
    }
    sendArray(data) {
        this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.SEND_ARRAY, data);
    }
    status(data) {
        this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.STATUS, data);
    }
    statusLocalMessageId(data) {
        this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.STATUS_LOCAL_MESSAGE_ID, data);
    }
    select(data) {
        this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.SELECT, data);
    }
    selectOutbox(data) {
        this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.SELECT_OUTBOX, data);
    }
    latestOutbox(data) {
        this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.LATEST_OUTBOX, data);
    }
    countOutbox(data) {
        this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.COUNT_OUTBOX, data);
    }
    cancel(data) {
        this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.CANCEL, data);
    }
    receive(data) {
        this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.RECEIVE, data);
    }
    countInbox(data) {
        this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.COUNT_INBOX, data);
    }
    countPostalCode(data) {
        this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.COUNT_POSTALCODE, data);
    }
    sendByPostalCode(data) {
        this.request(IkavenegarApi_1.ACTION.SMS, IkavenegarApi_1.METHOD.SEND_BY_POSTALCODE, data);
    }
    verifyLookup(data) {
        this.request(IkavenegarApi_1.ACTION.VERIFY, IkavenegarApi_1.METHOD.LOOKUP, data);
    }
    async accountInfo() {
        const path = this.version + '/' + this.apikey + '/' + IkavenegarApi_1.ACTION.ACCOUNT + '/' + IkavenegarApi_1.METHOD.INFO + '.json';
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
    accountConfig(data) {
        this.request(IkavenegarApi_1.ACTION.ACCOUNT, IkavenegarApi_1.METHOD.CONFIG, data);
    }
    callMakeTTS(data) {
        this.request(IkavenegarApi_1.ACTION.CALL, IkavenegarApi_1.METHOD.MAKETTS, data);
    }
}
exports.default = KavenegarApi;
//# sourceMappingURL=kavenegarApi.js.map