import { uuid } from "uuidv4";
import { Entity, Column, ObjectIdColumn } from 'typeorm'

@Entity("User")
export class User {
    
    @ObjectIdColumn()
    public readonly id: string;

    @Column()
    public name: string;
    
    @Column()
    public email: string;
    
    @Column()
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string){
        Object.assign(this, props)

        if(id){
            this.id = uuid()
        }
    }
}