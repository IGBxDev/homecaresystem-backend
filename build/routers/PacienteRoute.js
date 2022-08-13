"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacienteRouter = void 0;
const express_1 = __importDefault(require("express"));
const PacienteController_1 = require("../controller/PacienteController");
exports.pacienteRouter = express_1.default.Router();
const pacienteController = new PacienteController_1.PacienteController();
exports.pacienteRouter.post('/create', pacienteController.create);
exports.pacienteRouter.get('/findAll', pacienteController.findAll);
//# sourceMappingURL=PacienteRoute.js.map