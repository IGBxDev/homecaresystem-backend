import { IGetTransactionRepository } from "../../repositories/IGetTransactionRepository";

export class GetTransactionUseCase{

    constructor(
        private getTransactionRepository: IGetTransactionRepository,
    ){}
    
    async execute(){
        try {
            return await this.getTransactionRepository.findAll()    
        } catch (error) {
            throw error
        }        
    }
}