"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.METHOD = exports.ACTION = exports.HIDE_TYPE = exports.RECEIVE_STATUS = exports.STORE_TYPE = exports.SMS_STATUS = void 0;
var SMS_STATUS;
(function (SMS_STATUS) {
    SMS_STATUS[SMS_STATUS["IN_QUEUE"] = 1] = "IN_QUEUE";
    SMS_STATUS[SMS_STATUS["SCHEDULE"] = 2] = "SCHEDULE";
    SMS_STATUS[SMS_STATUS["COMMUNICATION"] = 4] = "COMMUNICATION";
    SMS_STATUS[SMS_STATUS["COMMUNICATION2"] = 5] = "COMMUNICATION2";
    SMS_STATUS[SMS_STATUS["FAILED"] = 6] = "FAILED";
    SMS_STATUS[SMS_STATUS["DELIVERED"] = 10] = "DELIVERED";
    SMS_STATUS[SMS_STATUS["UNDELIVERED"] = 11] = "UNDELIVERED";
    SMS_STATUS[SMS_STATUS["CANCELED"] = 13] = "CANCELED";
    SMS_STATUS[SMS_STATUS["BLOCKED"] = 14] = "BLOCKED";
    SMS_STATUS[SMS_STATUS["INVALID"] = 100] = "INVALID";
})(SMS_STATUS = exports.SMS_STATUS || (exports.SMS_STATUS = {}));
var STORE_TYPE;
(function (STORE_TYPE) {
    STORE_TYPE[STORE_TYPE["DIRECT"] = 0] = "DIRECT";
    STORE_TYPE[STORE_TYPE["SIMPLE"] = 1] = "SIMPLE";
    STORE_TYPE[STORE_TYPE["SIMCARD"] = 2] = "SIMCARD";
    STORE_TYPE[STORE_TYPE["DEVICE"] = 3] = "DEVICE";
})(STORE_TYPE = exports.STORE_TYPE || (exports.STORE_TYPE = {}));
var RECEIVE_STATUS;
(function (RECEIVE_STATUS) {
    RECEIVE_STATUS[RECEIVE_STATUS["UNREAD"] = 0] = "UNREAD";
    RECEIVE_STATUS[RECEIVE_STATUS["READ"] = 1] = "READ";
})(RECEIVE_STATUS = exports.RECEIVE_STATUS || (exports.RECEIVE_STATUS = {}));
var HIDE_TYPE;
(function (HIDE_TYPE) {
    HIDE_TYPE[HIDE_TYPE["NO_HIDDEN"] = 0] = "NO_HIDDEN";
    HIDE_TYPE[HIDE_TYPE["HIDDEN"] = 1] = "HIDDEN";
})(HIDE_TYPE = exports.HIDE_TYPE || (exports.HIDE_TYPE = {}));
var ACTION;
(function (ACTION) {
    ACTION["SMS"] = "sms";
    ACTION["VERIFY"] = "verify";
    ACTION["ACCOUNT"] = "account";
    ACTION["CALL"] = "call";
})(ACTION = exports.ACTION || (exports.ACTION = {}));
var METHOD;
(function (METHOD) {
    METHOD["SEND"] = "send";
    METHOD["SEND_ARRAY"] = "sendarray";
    METHOD["STATUS"] = "status";
    METHOD["STATUS_LOCAL_MESSAGE_ID"] = "statuslocalmessageid";
    METHOD["SELECT"] = "select";
    METHOD["SELECT_OUTBOX"] = "selectoutbox";
    METHOD["LATEST_OUTBOX"] = "latestoutbox";
    METHOD["COUNT_OUTBOX"] = "countoutbox";
    METHOD["CANCEL"] = "cancel";
    METHOD["RECEIVE"] = "receive";
    METHOD["COUNT_INBOX"] = "countinbox";
    METHOD["COUNT_POSTALCODE"] = "countpostalcode";
    METHOD["SEND_BY_POSTALCODE"] = "sendbypostalcode";
    METHOD["LOOKUP"] = "lookup";
    METHOD["INFO"] = "info";
    METHOD["CONFIG"] = "config";
    METHOD["MAKETTS"] = "maketts";
})(METHOD = exports.METHOD || (exports.METHOD = {}));
//# sourceMappingURL=IkavenegarApi.js.map