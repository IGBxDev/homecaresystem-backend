"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PacienteSchema = new mongoose_1.default.Schema({
    nameComplete: String,
    email: String,
    cellphone: String,
    cpf: String,
    numeroConselho: String,
    regiao: String,
    endereco: [],
    contaBancaria: []
});
exports.default = PacienteSchema;
