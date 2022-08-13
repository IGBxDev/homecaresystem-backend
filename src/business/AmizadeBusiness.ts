import { AmizadeDatabase } from "../data/AmizadeDatabase";
import { IAmizadeInputDTO } from "../interfaces/IAmizadeInputDTO";
import { generateId, validadeId }  from "../Services/generateId";

export class AmizadeBusiness {
    public createAmizade = async (input: IAmizadeInputDTO) => {
        try {
            const { idUsuarioSolicitante, idUsuarioAmigo} = input;

            if(!idUsuarioSolicitante || !idUsuarioAmigo ) {
                throw new Error ("algum dos campos está faltando.");
            }

            const amizadeDatabase = new AmizadeDatabase();
            await amizadeDatabase.insertAmizade(input); 
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    public deleteAmizade = async (idUsuarioSolicitante: string)=>{
        try {

            if(!idUsuarioSolicitante){
                throw new Error ("Necessário informar o Id do solicitante");
            }

            if(!validadeId(idUsuarioSolicitante)){
                throw new Error ("Id invalido");
            }

            const amizadeDatabase = new AmizadeDatabase()
            
            const isAmigo = await amizadeDatabase.validaAmizade(idUsuarioSolicitante)

            if(isAmigo){
                return await amizadeDatabase.deleteAmizade(idUsuarioSolicitante)
            }

            if(!isAmigo){
                throw new Error ("Não é amigo");
            }
        } catch (error: any) {
             throw new Error(error.message);
        }
    }

    public allAmizade = async()=>{
        try {
           const amizadeDatabase = new AmizadeDatabase()
           return await amizadeDatabase.allAmizade()
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

