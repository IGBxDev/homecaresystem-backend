import { FrequencyDatabase } from "../data/FrequencyDatabase"
import { IFrequencyInputDTO } from "../interfaces/IFrequencyInputDTO";

export class FrequencyBusiness{

    public create = async (payload: IFrequencyInputDTO)=>{
        try {
            const frequencyDatabase = new FrequencyDatabase();
            return await frequencyDatabase.create(payload)
        } catch (error: any ) {
            return error
        }

    }

    public findAll = async ()=>{
        try {
            const frequencyDatabase = new FrequencyDatabase();
            return await frequencyDatabase.findAll()
        } catch (error: any ) {
            return error
        }

    }
}


