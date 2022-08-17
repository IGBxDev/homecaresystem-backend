import express from "express";
import { HealthInsuranceController } from "../controller/HealthInsuranceController";

export const healthInsuranceRouter = express.Router()

const healthInsuranceController = new HealthInsuranceController()

healthInsuranceRouter.post('/create', healthInsuranceController.create)
healthInsuranceRouter.get('/findAll', healthInsuranceController.findAll)