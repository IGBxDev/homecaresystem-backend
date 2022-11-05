import mongoose from "mongoose";
import { REGION_TYPES } from "../../enum/Region";
import { Account } from "../AccountModel";
import { Address } from "../Address";
import { StatusEnum } from "../../data/Schemas/enum/StatusEnum";

interface IProfessionalModel extends mongoose.Document{
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
    BloqueiProfissional: String,
    status: StatusEnum
}

export = IProfessionalModel