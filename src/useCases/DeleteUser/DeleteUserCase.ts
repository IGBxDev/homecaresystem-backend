import { IUsersRepository } from "../../repositories/IUsersRepository";
import {CustomErro, EmptiryId} from '../Error/CustomError'

export class DeleteUserCase {

    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute(userDelete: IDeleteUserRequestDTO){
        try {
            if(!userDelete.id || userDelete.id === undefined){
                throw new EmptiryId()
            }
    
            this.usersRepository.deleteById(userDelete.id)

        } catch (error) {
            throw new CustomErro(error.message, error.statusCode)
        }      
    }
}