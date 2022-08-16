import ProfessionalSchema from "../Schemas/ProfessionalSchema";
import IProfessionalModel from "../../model/interfaces/IProfessionalModel";
import mongoose from "mongoose";

const ProfessionalRepository = mongoose.model<IProfessionalModel>("Professional", ProfessionalSchema, "Professional")

export default ProfessionalRepository;
