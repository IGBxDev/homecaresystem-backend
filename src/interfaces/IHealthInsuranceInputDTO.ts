import { Address } from "../model/Address"

export interface IHealthInsuranceInputDTO {
    healthInsurance: string
    emailHealthInsurance: string,
    cellphoneHealthInsurance: string,
    manager: string
    emailManager: string,
    cellphoneManager: string,
    address: Address[]
    information: String
}