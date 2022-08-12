import mongoose from "mongoose";
import Constants from "../config/constants/Constants";

class DataAcess{
    static mongooseInstance: any;
    static mongooseConnection: mongoose.Connection;

    constructor(){
        DataAcess.connect()
    }

    static connect(): mongoose.Connection{
        if(this.mongooseInstance) return this.mongooseInstance

        this.mongooseConnection = mongoose.connection
        this.mongooseConnection.once("open", ()=>{
            console.log("Conectado ao mongoodb >>>>>>>>>>")
        })

        this.mongooseInstance = mongoose.connect(Constants.DB_CONNECTION_STRING)
        return this.mongooseInstance;
    }
}

DataAcess.connect();
export = DataAcess