"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusiness = void 0;
const UserDatabase_1 = require("../data/UserDatabase");
const CustomError_1 = require("../Error/CustomError");
const InvalidRequest_1 = require("../Error/InvalidRequest");
const generateId_1 = require("../Services/generateId");
class UserBusiness {
    constructor() {
        this.createUser = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = input;
                if (!name || !email || !password) {
                    throw new InvalidRequest_1.InvalidRequest();
                }
                const id = (0, generateId_1.generateId)();
                const userDatabase = new UserDatabase_1.UserDatabase();
                yield userDatabase.insertUser({
                    id,
                    name,
                    email,
                    password
                });
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.message || error.sqMessage, error.status);
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map