import { IUsersRepository } from "../../repositories/IUsersRepository";


export class DeleteUserCase {

    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute(){
        
    }
}