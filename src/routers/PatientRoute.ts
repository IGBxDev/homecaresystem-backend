import express from "express";
import { PatientController } from "../controller/PatientController";

export const patientRouter = express.Router()

const patientController = new PatientController()

patientRouter.post('/create', patientController.create)
patientRouter.get('/findAll', patientController.findAll)