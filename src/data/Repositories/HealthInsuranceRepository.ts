import HealthInsuranceSchema from "../Schemas/HealthInsuranceSchema";
import mongoose from "mongoose";
import { IHealthInsuranceInputDTO } from "../../interfaces/IHealthInsuranceInputDTO";

const HealthInsuranceRepository = mongoose.model<IHealthInsuranceInputDTO>("HealthInsurance", HealthInsuranceSchema, "HealthInsurance")

export default HealthInsuranceRepository;
