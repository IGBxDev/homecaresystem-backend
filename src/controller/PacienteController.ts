import { Request, Response } from "express"
import { PacienteBusiness } from "../business/PacienteBusiness";
import { IPacienteInputDTO } from "../interfaces/IPacienteInputDTO";
import  {generateId}  from "../Services/generateId";
import { ACCOUNT_TYPES } from "../enum/Account";
import { REGION_TYPES } from "../enum/Region";

export class PacienteController {
  
    public create = async (req: Request, res: Response) => {
        try {
        
            const input: IPacienteInputDTO = {
                id: generateId(),
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

            const pacienteBusiness = new PacienteBusiness();
            await pacienteBusiness.create(input);

            res.status(201).send({ message: "PacienteBusiness criado!" });
        }catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}