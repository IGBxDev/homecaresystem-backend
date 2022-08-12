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
exports.AmizadeBusiness = void 0;
const AmizadeDatabase_1 = require("../data/AmizadeDatabase");
const generateId_1 = require("../Services/generateId");
class AmizadeBusiness {
    constructor() {
        this.createAmizade = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { idUsuarioSolicitante, idUsuarioAmigo } = input;
                if (!idUsuarioSolicitante || !idUsuarioAmigo) {
                    throw new Error("algum dos campos está faltando.");
                }
                const amizadeDatabase = new AmizadeDatabase_1.AmizadeDatabase();
                yield amizadeDatabase.insertAmizade(input);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.deleteAmizade = (idUsuarioSolicitante) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!idUsuarioSolicitante) {
                    throw new Error("Necessário informar o Id do solicitante");
                }
                if (!(0, generateId_1.validadeId)(idUsuarioSolicitante)) {
                    throw new Error("Id invalido");
                }
                const amizadeDatabase = new AmizadeDatabase_1.AmizadeDatabase();
                const isAmigo = yield amizadeDatabase.validaAmizade(idUsuarioSolicitante);
                if (isAmigo) {
                    return yield amizadeDatabase.deleteAmizade(idUsuarioSolicitante);
                }
                if (!isAmigo) {
                    throw new Error("Não é amigo");
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.allAmizade = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const amizadeDatabase = new AmizadeDatabase_1.AmizadeDatabase();
                return yield amizadeDatabase.allAmizade();
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.AmizadeBusiness = AmizadeBusiness;
//# sourceMappingURL=AmizadeBusiness.js.map