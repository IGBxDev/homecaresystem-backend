"use strict";
exports.__esModule = true;
exports.pacienteRouter = void 0;
var express_1 = require("express");
var PacienteController_1 = require("../controller/PacienteController");
exports.pacienteRouter = express_1["default"].Router();
var pacienteController = new PacienteController_1.PacienteController();
exports.pacienteRouter.post('/create', pacienteController.create);
exports.pacienteRouter.get('/findAll', pacienteController.findAll);
