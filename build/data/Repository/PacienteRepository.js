"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PacienteSchema_1 = __importDefault(require("../Schemas/PacienteSchema"));
const mongoose_1 = __importDefault(require("mongoose"));
const PacienteRepository = mongoose_1.default.model("Pacientes", PacienteSchema_1.default, "Pacientes");
exports.default = PacienteRepository;
//# sourceMappingURL=PacienteRepository.js.map