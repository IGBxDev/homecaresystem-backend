import { Address } from "../model/Address"
import { Account } from "../model/AccountModel"
import { REGION_TYPES } from "../enum/Region"

export interface IPacienteInputDTO {
    id: string,
    nameComplete: string
    email: string,
    cellphone: string,
    cpf: string,
    numeroConselho: string,
    regiao: REGION_TYPES,
    endereco: Address[]
    contaBancaria: Account[]
}