import { Address } from "../model/Address"
import { Account } from "../model/AccountModel"
import { REGION_TYPES } from "../enum/Region"

export interface IProfessionalInputDTO {
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
}