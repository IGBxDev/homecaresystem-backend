"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = require("./routers/userRouter");
const postRouter_1 = require("./routers/postRouter");
const AmizadeRoute_1 = require("./routers/AmizadeRoute");
const DataAcess_1 = __importDefault(require("./data/DataAcess"));
const PacienteRoute_1 = require("./routers/PacienteRoute");
const dotenv_1 = __importDefault(require("dotenv"));
/**************************** CONFIG ******************************/
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*", credentials: true })); //define que qualquer url pode acessar essa api
/**************************** CONNECTION ******************************/
dotenv_1.default.config();
DataAcess_1.default.connect();
/**************************** ENDPOINTS ******************************/
app.use('/user', userRouter_1.userRouter);
app.use('/post', postRouter_1.postRouter);
app.use('/amizade', AmizadeRoute_1.amizadeRouter);
app.use('/paciente', PacienteRoute_1.pacienteRouter);
exports.default = app;
