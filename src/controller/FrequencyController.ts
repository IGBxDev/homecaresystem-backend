import { Request, Response } from "express"
import { FrequencyBusiness } from "../business/FrequencyBusiness";
import { IFrequencyInputDTO } from "../interfaces/IFrequencyInputDTO";
import  {generateId}  from "../Services/generateId";

export class FrequencyController {
  
    public create = async (req: Request, res: Response) => {
        try {
        
            const payload: IFrequencyInputDTO = {
                description: req.body.description as string,
                number: req.body.number as string                
            };

            const frequencyBusiness = new FrequencyBusiness();
            await frequencyBusiness.create(payload);

            res.status(201).send({ message: "PacienteBusiness criado!" });
        }catch (error: any) {
            res.status(400).send(error.message);
        }
    }


    public findAll = async(req: Request, res:Response)=>{
        try {
            const frequencyBusiness = new FrequencyBusiness();
            const data = await frequencyBusiness.findAll();
            res.status(200).send(data)
        } catch (error: any) {
            res.status(200).send(error)
        }
    }
}