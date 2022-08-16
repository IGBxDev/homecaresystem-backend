import ProfessionalSchema from "../Schemas/ProfessionalSchema";
import mongoose from "mongoose";
import { IProfessionalInputDTO } from "../../interfaces/IProfessionalInputDTO";

const ProfessionalRepository = mongoose.model<IProfessionalInputDTO>("Professional", ProfessionalSchema, "Professional")

export default ProfessionalRepository;
