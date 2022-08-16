import mongoose from "mongoose";
import { REGION_TYPES } from "../../enum/Region";
import { Account } from "../AccountModel";
import { Address } from "../Address";

interface IProfessionalModel extends mongoose.Document{
    id: string,
    nameComplete: string,
    email: string,
    telefone: string,
    cpf: string,
    numeroConsolelho: string,
    regiao: REGION_TYPES,
    endereco: Address[],
    dadosBancario: Account[]
}

export = IProfessionalModel