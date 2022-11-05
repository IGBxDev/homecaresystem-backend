import { Address } from "../model/Address"
import { Account } from "../model/AccountModel"
import { REGION_TYPES } from "../enum/Region"
import { StatusEnum } from "../data/Schemas/enum/StatusEnum"

export interface IProfessionalInputDTO {
    nameComplete: string
    email: string,
    cellphone: string,
    cpf: string,
    numeroConselho: string,
    regiao: { zonaNorte: boolean, zonaLeste: boolean, zonaSul: boolean, zonaOeste: boolean },
    endereco: Address[]
    contaBancaria: Account[],
    especialidade: String,
    bloqueiProfissional: String,
    status: StatusEnum
}