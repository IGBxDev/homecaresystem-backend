import { CustomError} from 'ts-custom-error'

export class CustomErro extends Error{
    private statusCode: number

    constructor(message: string, statusCode: number ){        
        super(message)
        this.statusCode = statusCode
        Object.setPrototypeOf(this, CustomErro.prototype);
    }

    serializeErrors() {
        return [
          {
            statusCode: this.statusCode
          },
        ];
    }
}
 

export class EmptiryId extends CustomError{
  statusCode = 400
  constructor(){
    super("Necessário informar um id")
    Object.setPrototypeOf(this, EmptiryId.prototype)
  }

  serializeErrors(){
    return[{
      statusCode: this.statusCode
    }]
  }
}
