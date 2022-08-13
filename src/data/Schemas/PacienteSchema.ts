import mongoose from "mongoose";
import IPacienteModel from "../../model/interfaces/IPacienteModel";
import { Account } from "../../model/AccountModel";
import { Address } from "../../model/Address";

const PacienteSchema = new mongoose.Schema({
    id: String, 
    nameComplete: String,
    email: String,
    cellphone: String,
    cpf: String,
    numeroConselho: String,
    regiao: String,
    endereco: [],
    contaBancaria:[]    
})

export default PacienteSchema