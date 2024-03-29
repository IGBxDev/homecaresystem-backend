import { Request, Response } from "express"
import { ProfessionalBusiness } from "../business/ProfessionalBusiness";
import { IProfessionalInputDTO } from "../interfaces/IProfessionalInputDTO";
import  {generateId}  from "../Services/generateId";
import { ACCOUNT_TYPES } from "../enum/Account";
import { REGION_TYPES } from "../enum/Region";
import IProfessionalModel from "../model/interfaces/IProfessionalModel";
import { StatusEnum } from "../data/Schemas/enum/StatusEnum";

export class ProfessionalController {
  
    public create = async (req: Request, res: Response) => {
        try {        
            const input: IProfessionalInputDTO = {
                nameComplete: req.body.nameComplete as string,
                cellphone: req.body.cellphone as string,
                contaBancaria:[{    
                    id: generateId() as string,
                    tipo: ACCOUNT_TYPES.CONTA_CORRENTE,
                    numeroConta: req.body.contaBancaria[0].numeroConta as string,
                    agencia: req.body.contaBancaria[0].agencia as string,
                    banco: req.body.contaBancaria[0].banco as string,
                    codigoBanco: req.body.contaBancaria[0].codigoBanco as string}],
                cpf: req.body.cpf as string,
                email: req.body.email as string,
                endereco: [{
                    id: generateId() as string,
                    cep: req.body.endereco[0].cep as string,
                    bairro: req.body.endereco[0].bairro as string,
                    numero: req.body.endereco[0].numero as string,
                    cidade: req.body.endereco[0].cidade as string,
                    estado: req.body.endereco[0].estado as string,
                    complemento: req.body.endereco[0].complemento as string,
                    endereco: req.body.endereco[0].endereco as string,
                    uf: req.body.endereco[0].uf as string,
                 }],
                numeroConselho: req.body.numeroConselho as string,
                regiao:  { 
                    zonaNorte: req.body.regiao.zonaNorte as boolean, 
                    zonaLeste: req.body.regiao.zonaLeste as boolean,
                    zonaSul: req.body.regiao.zonaSul as boolean,
                    zonaOeste: req.body.regiao.zonaOeste as boolean
                },               
                especialidade: req.body.especialidade as string,
                bloqueiProfissional: req.body.BloqueiProfissional as string,
                status: StatusEnum.ATIVO
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


    public deleteById = async (req: Request, res: Response ) =>{
        const { professionalDelete } = req.body
        try {
    
            if(professionalDelete.length === 0){
                throw new Error("Nenhum registro informado")
            }
    
            const professionalBusiness = new ProfessionalBusiness()
            await professionalBusiness.deleteById(professionalDelete)

            res.status(200).end()
        } catch (error: any ) {
            res.status(500).send(error)
        }
    }
}