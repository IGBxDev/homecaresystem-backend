import { v4 as genId, validate } from 'uuid'

export const generateId=()=>{
    return genId()
}

export const validadeId=(id: string)=>{
    return validate(id)
}
