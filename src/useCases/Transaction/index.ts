import { GetTransactionRepository } from "../../repositories/implementations/GetTransactionRepository";
import { GetTransactionController } from "./GetTransactionController";
import { GetTransactionUseCase } from "./GetTransactionUseCase";
import { AppDataSource } from "../../data-source";
import { DataSourceConnection } from "../../dataBase/DataSourceConnection";


const dataSourse = new DataSourceConnection(AppDataSource);
const getTransactionRepository = new GetTransactionRepository(dataSourse)

const getTransactionUseCase = new GetTransactionUseCase(
    getTransactionRepository
)

const getTransactionController = new GetTransactionController(
    getTransactionUseCase
)

export { getTransactionUseCase, getTransactionController }