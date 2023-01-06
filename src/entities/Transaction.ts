import { Entity, Column, ObjectIdColumn } from 'typeorm'
import { IMicroTransacoesDTO } from '../useCases/Transaction/GetTransactionDTO';

@Entity('Transacoes')
export class Transaction{

    @ObjectIdColumn()
    public readonly _id: string;

    @Column()
    public Status: number

    @Column()
    public DataInicio: Date

    @Column()
    public DataFinalizado: Date

    @Column()
    public IdUsuarioExecutador: number

    @Column()
    public Sistema: number

    @Column()
    public TotalDeCnpj: string

    @Column()
    public MicroTransacoes: IMicroTransacoesDTO

    constructor(props: Omit<Transaction, '_id'>){
        Object.assign(this, props)        
    }
}