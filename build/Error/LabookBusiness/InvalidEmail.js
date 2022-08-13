"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEmail = void 0;
const CustomError_1 = require("../CustomError");
class InvalidEmail extends CustomError_1.CustomError {
    constructor() {
        super("Necessário informar um e-mail", 400);
    }
}
exports.InvalidEmail = InvalidEmail;
//# sourceMappingURL=InvalidEmail.js.map