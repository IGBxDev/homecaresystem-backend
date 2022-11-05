import mongoose from "mongoose";
import IProfessionalModel from "../../model/interfaces/IProfessionalModel";
import { Account } from "../../model/AccountModel";
import { Address } from "../../model/Address";
import { ACCOUNT_TYPES } from "../../enum/Account";
import { IProfessionalInputDTO } from "../../interfaces/IProfessionalInputDTO";
import { StatusEnum } from "./enum/StatusEnum";

const ProfessionalSchema = new mongoose.Schema<IProfessionalInputDTO>({
    nameComplete: String,
    email: String,
    cellphone: String,
    cpf: String,
    numeroConselho: String,
    regiao: { zonaNorte: Boolean, zonaLeste: Boolean, zonaSul: Boolean, zonaOeste: Boolean },
    endereco: [{ id: String,
        cep: String,
        bairro: String,
        numero: String,
        cidade: String,
        estado: String,
        complemento: String,
        endereco: String,
        uf: String,
    }],
    contaBancaria: [{   id: String,
        tipo: String,
        numeroConta: String,
        agencia: String,
        banco: String,
        codigoBanco: String  
    }],
 
    especialidade: String,
    bloqueiProfissional: String,
    status: {
        type: String,
        enum: Object.values(StatusEnum),
        default: StatusEnum.ATIVO
    }    
})

export default ProfessionalSchema