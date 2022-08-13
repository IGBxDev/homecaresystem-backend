"use strict";
var mongoose_1 = require("mongoose");
var Constants_1 = require("../config/constants/Constants");
var DataAcess = /** @class */ (function () {
    function DataAcess() {
        DataAcess.connect();
    }
    DataAcess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = mongoose_1["default"].connection;
        this.mongooseConnection.once("open", function () {
            console.log("Conectado ao mongoodb >>>>>>>>>>");
        });
        this.mongooseInstance = mongoose_1["default"].connect(Constants_1["default"].DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    return DataAcess;
}());
DataAcess.connect();
module.exports = DataAcess;
