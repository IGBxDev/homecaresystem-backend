import FrequencySchema from "../Schemas/FrequencySchema";
import mongoose from "mongoose";
import { IFrequencyInputDTO } from "../../interfaces/IFrequencyInputDTO";

const FrequencyRepository = mongoose.model<IFrequencyInputDTO>("Frequency", FrequencySchema, "Frequency")

export default FrequencyRepository;
