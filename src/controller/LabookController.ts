import { Request, Response } from "express";
import { LabookBusiness } from "../business/LabookBusiness";

export class LabookController extends ValidityState{
    async create( req: Request, res: Response ): Promise<void>{
        try {

            const { name, email, password } = req.body
            const laBookBusiness = new LabookBusiness()
            await laBookBusiness.create({ name, email, password })
            res.status(200).send("Success!")
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}