import mongoose from "mongoose";
import { Address } from "./Address";


interface PatientModel extends mongoose.Document{
    nameComplete: string
    email: string,
    cellphone: string,
    address: Address[]
    information: String
}

export = PatientModel