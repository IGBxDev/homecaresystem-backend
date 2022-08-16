import { IProfessionalInputDTO } from "../interfaces/IProfessionalInputDTO";
import IProfessionalModel from "../model/interfaces/IProfessionalModel";
import ProfessionalRepository from "./Repositories/ProfessionalRepository";

export class ProfessionalDatabase{
    
    public create = async (professional: IProfessionalInputDTO)=>{ 
        try {
            return await ProfessionalRepository.create(professional)
        } catch (error: any) {
            return error
        }       
    }

    public findAll = async ()=>{ 
        try {
            return await ProfessionalRepository.find()
        } catch (error: any) {
            return error
        }       
        
    }

}