import { IPatientInputDTO } from "../interfaces/IPatientInputDTO";
import PatientRepository from "./Repositories/PatientRepository";

export class PatientDatabase{
    
    public create = async (patient: IPatientInputDTO)=>{ 
        try {
            return await PatientRepository.create(patient)
        } catch (error: any) {
            return error
        }       
    }

    public findAll = async ()=>{ 
        try {
            return await PatientRepository.find()
        } catch (error: any) {
            return error
        }
    }

}