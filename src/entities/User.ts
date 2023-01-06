import { uuid } from "uuidv4";
import { Entity, Column, ObjectIdColumn } from 'typeorm'

@Entity("Users")
export class User {
    
    @ObjectIdColumn()
    public readonly _id: string;

    @Column()
    public name: string;
    
    @Column()
    public email: string;
    
    @Column()
    public password: string;

    @Column('boolean', {default: true , nullable: false})
    public isActive: boolean;
    
    constructor(props: Omit<User, '_id' | 'isActive'>, _id?: string, isActive?: boolean){
        Object.assign(this, props)

        if(!_id){
            this.isActive = true
        }
    }
}