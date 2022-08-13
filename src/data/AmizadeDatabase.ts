import { Amizade } from "../model/Amizade";
import { BaseDatabase } from "./BaseDatabase";


export class AmizadeDatabase extends BaseDatabase {
  public insertAmizade = async (amizade: Amizade) => {
    try {
      await BaseDatabase.connection.insert({        
        id: amizade.id,
        idUsuarioSolicitante: amizade.idUsuarioSolicitante,
        idUsuarioAmigo: amizade.idUsuarioAmigo,
        createdAt: amizade.createdAt,
      }).into('labook_amizade');
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public async validaAmizade(idUsuarioSolicitante: string):Promise<boolean>{
    try {

      let result = false
      const amizade = await BaseDatabase.connection("labook_amizade").where("idUsuarioSolicitante", idUsuarioSolicitante)
      
      if(amizade.length > 0){
        result = true
      }

      if(amizade.length === 0){
        result = false
      }

      
      if(amizade.length === undefined){
        result = false
      }      

      return result
      
    } catch (error: any) {
      return error
    }
  }

  public deleteAmizade = async (idUsuarioSolicitante: string)=>{
    try {
        const result = await BaseDatabase.connection("labook_amizade").where("idUsuarioSolicitante", idUsuarioSolicitante ).del()
        return result
    } catch (error: any) {
        throw new Error(error.message);
    }
  }

  public allAmizade = async ()=>{
    try {
      return await BaseDatabase.connection("labook_amizade").select("*")
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
