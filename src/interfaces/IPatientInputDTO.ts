import { Address } from "../model/Address"

export interface IPatientInputDTO {
    nameComplete: string
    email: string,
    cellphone: string,
    address: Address[]
    hd: String
}