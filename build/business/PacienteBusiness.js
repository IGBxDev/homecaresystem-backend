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
exports.PacienteBusiness = void 0;
const PacienteDatabase_1 = require("../data/PacienteDatabase");
class PacienteBusiness {
    constructor() {
        this.create = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const pacienteDatabase = new PacienteDatabase_1.PacienteDatabase();
                return yield pacienteDatabase.create(input);
            }
            catch (error) {
                return error;
            }
        });
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const pacienteDatabase = new PacienteDatabase_1.PacienteDatabase();
                return yield pacienteDatabase.findAll();
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.PacienteBusiness = PacienteBusiness;
