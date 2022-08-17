import PatientSchema from "../Schemas/PatientSchema";
import mongoose from "mongoose";
import { IPatientInputDTO } from "../../interfaces/IPatientInputDTO";

const PatientRepository = mongoose.model<IPatientInputDTO>("Patient", PatientSchema, "Patient")

export default PatientRepository;
