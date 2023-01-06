import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { ObjectID, Repository } from "typeorm";
import { IDataSourse } from "../../dataBase/IDataSourse";

export class UserRepository implements IUsersRepository{
    private repository: Repository<User>

    constructor(
        private dataSourse: IDataSourse
    ){
       this.initialize()        
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.update(id,{ isActive: false })
    }

    async initialize(){
        const dbConnection = await this.dataSourse.connection()
        this.repository = dbConnection.getRepository(User)
    }

    async findByEmail(email: string): Promise<User[]> {
        const user = await this.repository.findBy({ email: email });
        return user
    }
    
    async save(user: User): Promise<void> {
        this.repository.insert(user)        
    }
}