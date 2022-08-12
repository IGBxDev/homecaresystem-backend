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
exports.AmizadeDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class AmizadeDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.insertAmizade = (amizade) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection.insert({
                    id: amizade.id,
                    idUsuarioSolicitante: amizade.idUsuarioSolicitante,
                    idUsuarioAmigo: amizade.idUsuarioAmigo,
                    createdAt: amizade.createdAt,
                }).into('labook_amizade');
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.deleteAmizade = (idUsuarioSolicitante) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection("labook_amizade").where("idUsuarioSolicitante", idUsuarioSolicitante).del();
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.allAmizade = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield BaseDatabase_1.BaseDatabase.connection("labook_amizade").select("*");
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    validaAmizade(idUsuarioSolicitante) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = false;
                const amizade = yield BaseDatabase_1.BaseDatabase.connection("labook_amizade").where("idUsuarioSolicitante", idUsuarioSolicitante);
                if (amizade.length > 0) {
                    result = true;
                }
                if (amizade.length === 0) {
                    result = false;
                }
                if (amizade.length === undefined) {
                    result = false;
                }
                return result;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.AmizadeDatabase = AmizadeDatabase;
//# sourceMappingURL=AmizadeDatabase.js.map