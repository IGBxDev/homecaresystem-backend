import { UserRepository } from "../../repositories/implementations/UserRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserCase } from "./DeleteUserCase";
import { AppDataSource } from "../../data-source";
import { DataSourceConnection } from "../../dataBase/DataSourceConnection";


const dataSourse = new DataSourceConnection(AppDataSource);
const userRepository = new UserRepository(dataSourse)

const deleteUserUseCase = new DeleteUserCase(
    userRepository
)

const deleteUserController = new DeleteUserController(
    deleteUserUseCase
)

export { deleteUserUseCase, deleteUserController }