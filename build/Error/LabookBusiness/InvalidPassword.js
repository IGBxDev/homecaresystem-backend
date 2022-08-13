"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPassword = void 0;
const CustomError_1 = require("../CustomError");
class InvalidPassword extends CustomError_1.CustomError {
    constructor() {
        super("Necessário informar uma senha", 400);
    }
}
exports.InvalidPassword = InvalidPassword;
