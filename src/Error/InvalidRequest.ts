import { CustomError } from "./CustomError";

export class InvalidRequest extends CustomError{
    constructor(){
        super("Requisição invalida, um ou mais campos vazio", 400)
    }
}