import { CustomError } from "../CustomError";

export class InvalidEmail extends CustomError{
    constructor(){
        super("Necessário informar um e-mail", 400)
    }
}