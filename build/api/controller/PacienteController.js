"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers = express_1.default.Router();
routers.get('/createPatient', (req, res) => {
    res.status(200).send("deu certo");
});
//# sourceMappingURL=PacienteController.js.map