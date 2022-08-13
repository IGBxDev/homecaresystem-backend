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
exports.PacienteController = void 0;
const PacienteBusiness_1 = require("../business/PacienteBusiness");
const generateId_1 = require("../Services/generateId");
const Account_1 = require("../enum/Account");
const Region_1 = require("../enum/Region");
class PacienteController {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    nameComplete: req.body.nameComplete,
                    cellphone: req.body.cellphone,
                    contaBancaria: [{
                            id: (0, generateId_1.generateId)(),
                            tipo: Account_1.ACCOUNT_TYPES.CONTA_CORRENTE,
                            numeroConta: req.body.contaBancaria[0].numeroConta,
                            agencia: req.body.contaBancaria[0].agencia,
                            banco: req.body.contaBancaria[0].banco,
                            codigoBanco: req.body.contaBancaria[0].codigoBanco
                        }],
                    cpf: req.body.cpf,
                    email: req.body.email,
                    endereco: [{
                            id: (0, generateId_1.generateId)(),
                            cep: req.body.endereco[0].cep,
                            bairro: req.body.endereco[0].bairro,
                            numero: req.body.endereco[0].numero,
                            cidade: req.body.endereco[0].cidade,
                            estado: req.body.endereco[0].estado,
                            complemento: req.body.endereco[0].complemento
                        }],
                    numeroConselho: req.body.numeroConselho,
                    regiao: Region_1.REGION_TYPES.NORTE
                };
                const pacienteBusiness = new PacienteBusiness_1.PacienteBusiness();
                yield pacienteBusiness.create(input);
                res.status(201).send({ message: "PacienteBusiness criado!" });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const pacienteBusiness = new PacienteBusiness_1.PacienteBusiness();
                const data = yield pacienteBusiness.findAll();
                res.status(200).send(data);
            }
            catch (error) {
                res.status(200).send(error);
            }
        });
    }
}
exports.PacienteController = PacienteController;
