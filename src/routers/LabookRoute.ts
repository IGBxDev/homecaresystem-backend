import express from "express";
import { LabookController } from "../controller/LabookController";
export const laBookRouter = express.Router()

const laBookController = new LabookController()
laBookRouter.post("/create", laBookController.create)
