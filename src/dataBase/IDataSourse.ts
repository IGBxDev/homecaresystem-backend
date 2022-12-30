import { DataSource } from "typeorm";

export interface IDataSourse{
   connection(): Promise<DataSource>
}
