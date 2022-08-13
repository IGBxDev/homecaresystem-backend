import { ACCOUNT_TYPES } from "../enum/Account"

export type Account ={
    id: string,
    tipo: ACCOUNT_TYPES,
    numeroConta: string,
    agencia: string,
    banco: string,
    codigoBanco: string     
}