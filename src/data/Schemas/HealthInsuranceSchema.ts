import mongoose from "mongoose";
import { IHealthInsuranceInputDTO } from "../../interfaces/IHealthInsuranceInputDTO";

const HealthInsuranceSchema = new mongoose.Schema<IHealthInsuranceInputDTO>({
    healthInsurance: String,
    emailHealthInsurance: String,
    cellphoneHealthInsurance: String,
    manager: String,
    emailManager: String,
    cellphoneManager: String,
    information: String,
    address: [{ id: String,
        cep: String,
        bairro: String,
        numero: String,
        cidade: String,
        estado: String,
        complemento: String,
        endereco: String,
        uf: String
    }], 
})

export default HealthInsuranceSchema