import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../Error/CustomError"
import { InvalidRequest } from "../Error/InvalidRequest";
import { UserInputDTO } from "../model/userDTO";
import {generateId}  from "../Services/generateId";

export class UserBusiness {
    public createUser = async (input: UserInputDTO) => {
        try {
            const { name, email, password  } = input;

            if(!name || !email || !password ) {

                throw new InvalidRequest()
            }

            const id: string = generateId()

            const userDatabase = new UserDatabase();
            await userDatabase.insertUser({
                id,
                name,
                email,
                password
                
            }); 
        } catch (error: any) {
            throw new CustomError(error.message || error.sqMessage, error.status);
        }
    };
}