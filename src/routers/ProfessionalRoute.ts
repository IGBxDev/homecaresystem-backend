import express from "express";
import { ProfessionalController } from "../controller/ProfessionalController";

export const professionalRouter = express.Router()

const professionalController = new ProfessionalController()

professionalRouter.post('/create', professionalController.create)
professionalRouter.get('/findAll', professionalController.findAll)