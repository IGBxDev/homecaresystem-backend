import { ProfessionalDatabase } from "../data/ProfessionalDatabase"
import { IProfessionalInputDTO } from "../interfaces/IProfessionalInputDTO";
import IProfessionalModel from "../model/interfaces/IProfessionalModel";

export class ProfessionalBusiness{

    public create = async (input: IProfessionalInputDTO)=>{
        try {
            const professionalDatabase = new ProfessionalDatabase();
            return await professionalDatabase.create(input)
        } catch (error: any ) {
            return error
        }

    }

    public findAll = async ()=>{
        try {
            const professionalDatabase = new ProfessionalDatabase();
            return await professionalDatabase.findAll()
        } catch (error: any ) {
            return error
        }
    }

    public deleteById = async (professionalDelete: [string])=>{
        try {
            const professionalDatabase = new ProfessionalDatabase();
            return await professionalDelete.map((id) => 
                {                                
                    professionalDatabase.deleteById(id)
                }
            )
        } catch (error) {
            return error
        }

    }
}


