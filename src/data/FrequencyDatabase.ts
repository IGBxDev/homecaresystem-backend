import { IFrequencyInputDTO } from "../interfaces/IFrequencyInputDTO";
import FrequencyRepository from "./Repositories/FrequencyRepository";

export class FrequencyDatabase{
    
    public create = async (payload: IFrequencyInputDTO)=>{ 
        try {
            return await FrequencyRepository.create(payload)
        } catch (error: any) {
            return error
        }       
    }

    public findAll = async ()=>{ 
        try {
            return await FrequencyRepository.find()
        } catch (error: any) {
            return error
        }
    }

}