import mongoose from "mongoose";
import IProfessionalModel from "../../model/interfaces/IProfessionalModel";
import { Account } from "../../model/AccountModel";
import { Address } from "../../model/Address";

const ProfessionalSchema = new mongoose.Schema({
    nameComplete: String,
    email: String,
    cellphone: String,
    cpf: String,
    numeroConselho: String,
    regiao: String,
    endereco: [],
    contaBancaria:[]    
})

export default ProfessionalSchema