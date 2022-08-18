import mongoose from "mongoose";
import { IPatientInputDTO } from "../../interfaces/IPatientInputDTO";

const PatientSchema = new mongoose.Schema<IPatientInputDTO>({
    nameComplete: String,
    email: String,
    cellphone: String,
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
    hd: String    
})

export default PatientSchema