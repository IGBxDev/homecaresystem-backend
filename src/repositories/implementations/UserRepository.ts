import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { Repository } from "typeorm";
import { IDataSourse } from "../../dataBase/IDataSourse";

export class UserRepository implements IUsersRepository{
    private repository: Repository<User>

    constructor(
        private dataSourse: IDataSourse
    ){
       this.initialize()        
    }

    async deleteById(id: string): Promise<void> {
        this.repository.findBy({ id: id })
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
        this.repository.save(user)        
    }
}