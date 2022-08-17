import express from "express";
import { FrequencyController } from "../controller/FrequencyController";

export const frequencyRouter = express.Router()

const frequencyController = new FrequencyController()

frequencyRouter.post('/create', frequencyController.create)
frequencyRouter.get('/findAll', frequencyController.findAll)