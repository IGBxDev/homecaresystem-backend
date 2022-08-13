"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidRequest = void 0;
const CustomError_1 = require("./CustomError");
class InvalidRequest extends CustomError_1.CustomError {
    constructor() {
        super("Requisição invalida, um ou mais campos vazio", 400);
    }
}
exports.InvalidRequest = InvalidRequest;
//# sourceMappingURL=InvalidRequest.js.map