import { IPacienteInputDTO } from "../interfaces/IPacienteInputDTO";
import PacienteRepository from "./Repository/PacienteRepository";

export class PacienteDatabase{
    
    public create = async (paciente: IPacienteInputDTO)=>{ 
        try {
            return await PacienteRepository.create(paciente)
        } catch (error: any) {
            return error
        }       
        
    }

}