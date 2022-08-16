import { REGION_TYPES } from "../enum/Region"
import { Account } from "./AccountModel"
import { Address } from "./Address"

export type ProfessionalModel={
    id: string,
    nomeCompleto: string,
    email: string,
    telefone: string,
    cpf: string,
    numeroConsolelho: string,
    regiao: REGION_TYPES
    endereco: Address,
    dadosBancario: Account
}