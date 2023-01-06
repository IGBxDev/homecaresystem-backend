
import { CustomError } from 'ts-custom-error'

export class UserAlreadyExists extends CustomError{
    statusCode = 400
    constructor(){
        super('Usuário já existe')
        Object.setPrototypeOf(this, UserAlreadyExists.prototype);

    }

    serializeErrors() {
        return [
          {
            statusCode: this.statusCode
          },
        ];
    }

}

export class InvalidEmail extends CustomError{
    statusCode = 400
    constructor(){
        super('E-mail inválido')
        Object.setPrototypeOf(this, InvalidEmail.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}