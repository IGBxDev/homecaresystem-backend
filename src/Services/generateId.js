"use strict";
exports.__esModule = true;
exports.validadeId = exports.generateId = void 0;
var uuid_1 = require("uuid");
var generateId = function () {
    return (0, uuid_1.v4)();
};
exports.generateId = generateId;
var validadeId = function (id) {
    return (0, uuid_1.validate)(id);
};
exports.validadeId = validadeId;
