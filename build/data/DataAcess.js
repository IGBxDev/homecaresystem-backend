"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const Constants_1 = __importDefault(require("../config/constants/Constants"));
class DataAcess {
    constructor() {
        DataAcess.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = mongoose_1.default.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Conectado ao mongoodb >>>>>>>>>>");
        });
        this.mongooseInstance = mongoose_1.default.connect(Constants_1.default.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}
DataAcess.connect();
module.exports = DataAcess;
//# sourceMappingURL=DataAcess.js.map