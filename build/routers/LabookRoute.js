"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.laBookRouter = void 0;
const express_1 = __importDefault(require("express"));
const LabookController_1 = require("../controller/LabookController");
exports.laBookRouter = express_1.default.Router();
const laBookController = new LabookController_1.LabookController();
exports.laBookRouter.post("/create", laBookController.create);
