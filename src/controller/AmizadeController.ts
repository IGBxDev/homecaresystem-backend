import { Request, Response } from "express"
import { AmizadeBusiness } from "../business/AmizadeBusiness";
import { IAmizadeInputDTO } from "../interfaces/IAmizadeInputDTO";
import  {generateId}  from "../Services/generateId";

export class AmizadeController {
  public createAmizade = async (req: Request, res: Response) => {
    try {
      const {idUsuarioSolicitante, idUsuarioAmigo } = req.body;

      const input: IAmizadeInputDTO = {
        id: generateId(),
        idUsuarioSolicitante: idUsuarioSolicitante,
        idUsuarioAmigo: idUsuarioAmigo,                
        createdAt: new Date
      };

      const amizadeBusiness = new AmizadeBusiness();
      await amizadeBusiness.createAmizade(input);

      res.status(201).send({ message: "Amizade criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public deleteAmizade = async (req: Request, res: Response)=>{
    try {
        const amizadeBusiness = new AmizadeBusiness()
        const amizade = await amizadeBusiness.deleteAmizade(req.params.id)
        res.status(200).send({ message: "Amizade desfeita"})
    } catch (error: any) {
        res.status(400).send(error.message);
    }
  }


  public allAmizade = async (req: Request, res: Response)=>{
    try {
      const amizadeBusiness = new AmizadeBusiness();
      const allAmizade = await amizadeBusiness.allAmizade()
      res.status(200).send(allAmizade)
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}