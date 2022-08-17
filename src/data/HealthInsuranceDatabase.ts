import { IHealthInsuranceInputDTO } from "../interfaces/IHealthInsuranceInputDTO";
import HealthInsuranceRepository from "./Repositories/HealthInsuranceRepository";

export class HealthInsuranceDatabase{
    
    public create = async (healthInsurance: IHealthInsuranceInputDTO)=>{ 
        try {
            return await HealthInsuranceRepository.create(healthInsurance)
        } catch (error: any) {
            return error
        }       
    }

    public findAll = async ()=>{ 
        try {
            return await HealthInsuranceRepository.find()
        } catch (error: any) {
            return error
        }       
        
    }

}