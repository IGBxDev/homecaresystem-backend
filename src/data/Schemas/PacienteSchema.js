"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var PacienteSchema = new mongoose_1["default"].Schema({
    nameComplete: String,
    email: String,
    cellphone: String,
    cpf: String,
    numeroConselho: String,
    regiao: String,
    endereco: [],
    contaBancaria: []
});
exports["default"] = PacienteSchema;
