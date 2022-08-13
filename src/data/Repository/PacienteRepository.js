"use strict";
exports.__esModule = true;
var PacienteSchema_1 = require("../Schemas/PacienteSchema");
var mongoose_1 = require("mongoose");
var PacienteRepository = mongoose_1["default"].model("Pacientes", PacienteSchema_1["default"], "Pacientes");
exports["default"] = PacienteRepository;
