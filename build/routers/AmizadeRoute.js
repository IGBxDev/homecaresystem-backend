"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.amizadeRouter = void 0;
const express_1 = __importDefault(require("express"));
const AmizadeController_1 = require("../controller/AmizadeController");
exports.amizadeRouter = express_1.default.Router();
const amizadeController = new AmizadeController_1.AmizadeController();
exports.amizadeRouter.post('/create', amizadeController.createAmizade);
exports.amizadeRouter.get('/all', amizadeController.allAmizade);
exports.amizadeRouter.delete('/:id', amizadeController.deleteAmizade);
//# sourceMappingURL=AmizadeRoute.js.map