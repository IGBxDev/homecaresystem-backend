import { Request, Response } from "express";
import { GetTransactionUseCase } from "./GetTransactionUseCase";

export class GetTransactionController {
    
    constructor(
        private getTransactionUseCase: GetTransactionUseCase
    ){}
    
    //Pendente add no retorno o UsuarioExecutor
    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const transactions = await this.getTransactionUseCase.execute()
            return response.status(200).json({
                payload: transactions
            })
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Internal error'
            })   
        }
    }
}