import { Transaction } from "../../entities/Transaction";
import { IGetTransactionRepository } from "../IGetTransactionRepository";
import { Repository } from "typeorm";
import { IDataSourse } from "../../dataBase/IDataSourse";

export class GetTransactionRepository implements IGetTransactionRepository{
    private repository: Repository<Transaction>

    constructor(
        private dataSourse: IDataSourse
    ){
       this.initialize()        
    }

    async initialize(){
        const dbConnection = await this.dataSourse.connection()
        this.repository = dbConnection.getRepository(Transaction)
    }
    
    async findAll(): Promise<Transaction[]> {
        return this.repository.find()   
    }
}