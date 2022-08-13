import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDTO";



export class UserController {

  public createUser = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { name, email, password } = req.body
   
         const input: UserInputDTO = {
             name,
             email,
             password,
             id: ""
         }
   
         const userBusiness = new UserBusiness
         userBusiness.createUser(input)
   
         res.status(201).send({ message: "Usuário criado!" })
      } catch (error:any) {
         res.status(error.statusCode || 400).send(error.message || error.sqMessage)
      }
   }
}