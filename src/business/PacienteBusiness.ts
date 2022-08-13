import { PacienteDatabase } from "../data/PacienteDatabase"
import { IPacienteInputDTO } from "../interfaces/IPacienteInputDTO";

export class PacienteBusiness{

    public create = async (input: IPacienteInputDTO)=>{
        try {
            const pacienteDatabase = new PacienteDatabase();
            return await pacienteDatabase.create(input)
        } catch (error: any ) {
            return error
        }

    }

    public findAll = async ()=>{
        try {
            const pacienteDatabase = new PacienteDatabase();
            return await pacienteDatabase.findAll()
        } catch (error: any ) {
            return error
        }

    }
}


