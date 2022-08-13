import { CustomError } from "../CustomError";

export class InvalidName extends CustomError{
    constructor(){
        super("Necessário informar um nome", 400)
    }
}