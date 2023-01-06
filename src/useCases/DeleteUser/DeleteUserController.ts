import { Request, Response } from "express";
import { DeleteUserCase } from "./DeleteUserCase";


export class DeleteUserController{

    constructor(
        private deleteUserCase: DeleteUserCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const { id } = request.params
            const useDelete: IDeleteUserRequestDTO = {
                id
            }            

            await this.deleteUserCase.execute(useDelete)

            response.status(204).send()

        } catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}