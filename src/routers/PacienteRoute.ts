import express from "express";
import { PacienteController } from "../controller/PacienteController";

export const pacienteRouter = express.Router()

const pacienteController = new PacienteController()

pacienteRouter.post('/create', pacienteController.create)