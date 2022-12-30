import { IDataSourse } from "./IDataSourse";
import { DataSource } from "typeorm";

export class DataSourceConnection implements IDataSourse {
    private _dataSourse: DataSource

    constructor(private dataSourse: DataSource){
        this.dataSourse.initialize()
        this._dataSourse = this.dataSourse
    }

    public async connection(): Promise<DataSource>{
        return this._dataSourse
    }
}