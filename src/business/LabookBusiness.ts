import { LabookDatabase } from "../data/LabookDatabase"
import {generateId} from "../Services/generateId"

export class LabookBusiness{
    async create({name, email, password }: any): Promise<void>{
        if(!name || !email || !password){
            throw new Error('"name", "email" and "password" must be provided')
        }

        const id = generateId()

        const laBook = new LabookDatabase()
        await laBook.create({
            id,
            name,
            email,
            password
        })
    }
}