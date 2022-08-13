import { BaseDatabase } from "./BaseDatabase";

export class LabookDatabase extends BaseDatabase{
    private static TABLE_NAME = "labook_users"

    async create({id, name, email, password }: any): Promise<void>{
        await LabookDatabase.connection
        .insert({
            id,
            name,
            email,
            password
        })
        .into(LabookDatabase.TABLE_NAME)
    }
}