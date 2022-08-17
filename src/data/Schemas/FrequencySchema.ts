import mongoose from "mongoose";
import { IFrequencyInputDTO } from "../../interfaces/IFrequencyInputDTO";

const FrequencySchema = new mongoose.Schema<IFrequencyInputDTO>({
    description: String,
    number: String
})

export default FrequencySchema