import { Request, Response } from "express"
import { ProfessionalBusiness } from "../business/ProfessionalBusiness";
import { IProfessionalInputDTO } from "../interfaces/IProfessionalInputDTO";
import  {generateId}  from "../Services/generateId";
import { ACCOUNT_TYPES } from "../enum/Account";
import { REGION_TYPES } from "../enum/Region";

export class ProfessionalController {
  
    public create = async (req: Request, res: Response) => {
        try {
        
            const input: IProfessionalInputDTO = {
                nameComplete: req.body.nameComplete,
                cellphone: req.body.cellphone,
                contaBancaria:[{    
                    id: generateId(),
                    tipo: ACCOUNT_TYPES.CONTA_CORRENTE,
                    numeroConta: req.body.contaBancaria[0].numeroConta,
                    agencia: req.body.contaBancaria[0].agencia,
                    banco: req.body.contaBancaria[0].banco,
                    codigoBanco: req.body.contaBancaria[0].codigoBanco}],
                cpf: req.body.cpf,
                email: req.body.email,
                endereco: [{
                    id: generateId(),
                    cep: req.body.endereco[0].cep,
                    bairro: req.body.endereco[0].bairro,
                    numero: req.body.endereco[0].numero,
                    cidade: req.body.endereco[0].cidade,
                    estado: req.body.endereco[0].estado,
                    complemento: req.body.endereco[0].complemento }],
                numeroConselho: req.body.numeroConselho,
                regiao:  REGION_TYPES.NORTE
            };

            const pacienteBusiness = new ProfessionalBusiness();
            await pacienteBusiness.create(input);

            res.status(201).send({ message: "PacienteBusiness criado!" });
        }catch (error: any) {
            res.status(400).send(error.message);
        }
    }


    public findAll = async(req: Request, res:Response)=>{
        try {
            const pacienteBusiness = new ProfessionalBusiness();
            const data = await pacienteBusiness.findAll();
            res.status(200).send(data)
        } catch (error: any) {
            res.status(200).send(error)
        }
    }
}