import { MailTrapMailProvider } from "../../providers/implementations/MailTrapProvider";
import { MongoDBUserRepository } from "../../repositories/implementations/MongoDBUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailTrapMailProvider
const mongooDBUsersRepository = new MongoDBUserRepository

const createUserUseCase = new CreateUserUseCase(
    mongooDBUsersRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }