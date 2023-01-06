import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { deleteUserController } from "./useCases/DeleteUser";


const router = Router()

router.post('/users', (request, response) =>{
    return createUserController.handle(request, response)
})

router.delete('/users/:id', (request, response) =>{
    return deleteUserController.handle(request, response)
})

export { router }