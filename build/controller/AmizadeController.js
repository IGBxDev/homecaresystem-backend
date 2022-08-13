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
exports.AmizadeController = void 0;
const AmizadeBusiness_1 = require("../business/AmizadeBusiness");
const generateId_1 = require("../Services/generateId");
class AmizadeController {
    constructor() {
        this.createAmizade = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { idUsuarioSolicitante, idUsuarioAmigo } = req.body;
                const input = {
                    id: (0, generateId_1.generateId)(),
                    idUsuarioSolicitante: idUsuarioSolicitante,
                    idUsuarioAmigo: idUsuarioAmigo,
                    createdAt: new Date
                };
                const amizadeBusiness = new AmizadeBusiness_1.AmizadeBusiness();
                yield amizadeBusiness.createAmizade(input);
                res.status(201).send({ message: "Amizade criado!" });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.deleteAmizade = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const amizadeBusiness = new AmizadeBusiness_1.AmizadeBusiness();
                const amizade = yield amizadeBusiness.deleteAmizade(req.params.id);
                res.status(200).send({ message: "Amizade desfeita" });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.allAmizade = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const amizadeBusiness = new AmizadeBusiness_1.AmizadeBusiness();
                const allAmizade = yield amizadeBusiness.allAmizade();
                res.status(200).send(allAmizade);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.AmizadeController = AmizadeController;
