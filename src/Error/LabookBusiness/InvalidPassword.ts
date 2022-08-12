import { CustomError } from "../CustomError";

export class InvalidPassword extends CustomError{
    constructor(){
        super("Necessário informar uma senha", 400)
    }
}