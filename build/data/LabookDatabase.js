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
exports.LabookDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class LabookDatabase extends BaseDatabase_1.BaseDatabase {
    create({ id, name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield LabookDatabase.connection
                .insert({
                id,
                name,
                email,
                password
            })
                .into(LabookDatabase.TABLE_NAME);
        });
    }
}
exports.LabookDatabase = LabookDatabase;
LabookDatabase.TABLE_NAME = "labook_users";
