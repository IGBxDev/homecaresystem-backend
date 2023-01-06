import { Transaction } from "../entities/Transaction";

export interface IGetTransactionRepository{
    findAll(): Promise<Transaction[]>
}