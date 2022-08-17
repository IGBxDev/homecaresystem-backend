import { Request, Response } from "express"
import { HealthInsuranceBusiness } from "../business/HealthInsuranceBusiness";
import { IHealthInsuranceInputDTO } from "../interfaces/IHealthInsuranceInputDTO";
import  {generateId}  from "../Services/generateId";

export class HealthInsuranceController {
  
    public create = async (req: Request, res: Response) => {
        try {
        
            const input: IHealthInsuranceInputDTO = {

                healthInsurance: req.body.healthInsurance as string,
                emailHealthInsurance: req.body.emailHealthInsurance as string,
                cellphoneHealthInsurance: req.body.cellphoneHealthInsurance as string,
                manager: req.body.manager as string,
                emailManager: req.body.emailManager as string,
                cellphoneManager: req.body.cellphoneManager as string,
                address: [{
                    id: generateId() as string,
                    cep: req.body.address[0].cep as string,
                    bairro: req.body.address[0].bairro as string,
                    numero: req.body.address[0].numero as string,
                    cidade: req.body.address[0].cidade as string,
                    estado: req.body.address[0].estado as string,
                    complemento: req.body.address[0].complemento as string,
                    endereco: req.body.address[0].endereco as string,
                    uf: req.body.address[0].uf as string,
                 }],
                 information: req.body.information
            };

            const healthInsuranceBusiness = new HealthInsuranceBusiness();
            await healthInsuranceBusiness.create(input);

            res.status(201).send({ message: "PacienteBusiness criado!" });
        }catch (error: any) {
            res.status(400).send(error.message);
        }
    }


    public findAll = async(req: Request, res:Response)=>{
        try {
            const healthInsuranceBusiness = new HealthInsuranceBusiness();
            const data = await healthInsuranceBusiness.findAll();
            res.status(200).send(data)
        } catch (error: any) {
            res.status(200).send(error)
        }
    }
}