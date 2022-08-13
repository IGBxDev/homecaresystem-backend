import express from "express";
import { AmizadeController } from "../controller/AmizadeController";

export const amizadeRouter = express.Router()

const amizadeController = new AmizadeController()

amizadeRouter.post('/create', amizadeController.createAmizade)
amizadeRouter.get('/all', amizadeController.allAmizade)
amizadeRouter.delete('/:id', amizadeController.deleteAmizade)
