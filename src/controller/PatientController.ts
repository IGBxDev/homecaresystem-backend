import { Request, Response } from "express"
import { PatientBusiness } from "../business/PatientBusiness";
import { IPatientInputDTO } from "../interfaces/IPatientInputDTO";
import  {generateId}  from "../Services/generateId";

export class PatientController {
  
    public create = async (req: Request, res: Response) => {
        try {
        
            const input: IPatientInputDTO = {
                nameComplete: req.body.nameComplete as string,
                cellphone: req.body.cellphone as string,
                email: req.body.email as string,
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
                 hd: req.body.hd
            };

            const patientBusiness = new PatientBusiness();
            await patientBusiness.create(input);

            res.status(201).send({ message: "PacienteBusiness criado!" });
        }catch (error: any) {
            res.status(400).send(error.message);
        }
    }


    public findAll = async(req: Request, res:Response)=>{
        try {
            const patientBusiness = new PatientBusiness();
            const data = await patientBusiness.findAll();
            res.status(200).send(data)
        } catch (error: any) {
            res.status(200).send(error)
        }
    }

    public deleteById = async (req: Request, res: Response ) =>{
        const { patientDelete } = req.body
        try {
    
            if(patientDelete.length === 0){
                throw new Error("Nenhum registro informado")
            }
    
            const patientBusiness = new PatientBusiness();
            const result = await patientBusiness.deleteById(patientDelete)

            res.status(200).end()
        } catch (error: any ) {
            res.status(500).send(error)
        }
    }
}