import { Request, Response } from "express";
import { DeleteUserCase } from "./DeleteUserCase";


export class DeleteUserController{

    constructor(
        private deleteUserCase: DeleteUserCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
            
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}