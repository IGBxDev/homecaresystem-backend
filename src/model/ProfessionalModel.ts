import mongoose from "mongoose";
import { Account } from "./AccountModel";  
import { Address } from "./Address";
import { StatusEnum } from "../data/Schemas/enum/StatusEnum";


interface ProfessionalModel extends mongoose.Document{
    nameComplete: string
    email: string,
    cellphone: string,
    cpf: string,
    numeroConselho: string,
    regiao: { zonaNorte: boolean, zonaLeste: boolean, zonaSul: boolean, zonaOeste: boolean },
    endereco: Address[]
    contaBancaria: Account[],
    uf: String,
    especialidade: String,
    BloqueiProfissional: String
    status: StatusEnum
}

export = ProfessionalModel