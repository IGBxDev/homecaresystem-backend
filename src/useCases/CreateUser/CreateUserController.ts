import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController{
    
    constructor(
        private createUserUseCase: CreateUserUseCase        
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, email, password, isActive } = request.body;

        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password,
                isActive
            })

            return response.status(200).send();

        } catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}
