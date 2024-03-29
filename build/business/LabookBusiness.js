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
exports.LabookBusiness = void 0;
const LabookDatabase_1 = require("../data/LabookDatabase");
const generateId_1 = require("../Services/generateId");
class LabookBusiness {
    create({ name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || !email || !password) {
                throw new Error('"name", "email" and "password" must be provided');
            }
            const id = (0, generateId_1.generateId)();
            const laBook = new LabookDatabase_1.LabookDatabase();
            yield laBook.create({
                id,
                name,
                email,
                password
            });
        });
    }
}
exports.LabookBusiness = LabookBusiness;
