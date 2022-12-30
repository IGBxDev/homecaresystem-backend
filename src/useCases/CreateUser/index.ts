import { MailTrapMailProvider } from "../../providers/implementations/MailTrapProvider";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { AppDataSource } from "../../data-source";
import { DataSourceConnection } from "../../dataBase/DataSourceConnection";

const mailtrapMailProvider = new MailTrapMailProvider()
const dataSourse = new DataSourceConnection(AppDataSource);
const userRepository = new UserRepository(dataSourse)

const createUserUseCase = new CreateUserUseCase(
    userRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }