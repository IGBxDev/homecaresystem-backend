"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidName = void 0;
const CustomError_1 = require("../CustomError");
class InvalidName extends CustomError_1.CustomError {
    constructor() {
        super("Necessário informar um nome", 400);
    }
}
exports.InvalidName = InvalidName;
//# sourceMappingURL=InvalidaName.js.map