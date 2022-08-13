import PacienteSchema from "../Schemas/PacienteSchema";
import IPacienteModel from "../../model/interfaces/IPacienteModel";
import mongoose from "mongoose";

const PacienteRepository = mongoose.model<IPacienteModel>("Pacientes", PacienteSchema, "Pacientes")

export default PacienteRepository;
