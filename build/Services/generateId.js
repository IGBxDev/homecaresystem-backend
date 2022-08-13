"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validadeId = exports.generateId = void 0;
const uuid_1 = require("uuid");
const generateId = () => {
    return (0, uuid_1.v4)();
};
exports.generateId = generateId;
const validadeId = (id) => {
    return (0, uuid_1.validate)(id);
};
exports.validadeId = validadeId;
//# sourceMappingURL=generateId.js.map