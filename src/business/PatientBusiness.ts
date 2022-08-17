import { PatientDatabase } from "../data/PatientDatabase"
import { IPatientInputDTO } from "../interfaces/IPatientInputDTO";

export class PatientBusiness{

    public create = async (input: IPatientInputDTO)=>{
        try {
            const patientDatabase = new PatientDatabase();
            return await patientDatabase.create(input)
        } catch (error: any ) {
            return error
        }

    }

    public findAll = async ()=>{
        try {
            const patientDatabase = new PatientDatabase();
            return await patientDatabase.findAll()
        } catch (error: any ) {
            return error
        }

    }
}


