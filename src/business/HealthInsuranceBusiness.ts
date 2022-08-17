import { HealthInsuranceDatabase } from "../data/HealthInsuranceDatabase"
import { IHealthInsuranceInputDTO } from "../interfaces/IHealthInsuranceInputDTO";

export class HealthInsuranceBusiness{

    public create = async (input: IHealthInsuranceInputDTO)=>{
        try {
            const healthInsuranceDatabase = new HealthInsuranceDatabase();
            return await healthInsuranceDatabase.create(input)
        } catch (error: any ) {
            return error
        }

    }

    public findAll = async ()=>{
        try {
            const healthInsuranceDatabase = new HealthInsuranceDatabase();
            return await healthInsuranceDatabase.findAll()
        } catch (error: any ) {
            return error
        }

    }
}


