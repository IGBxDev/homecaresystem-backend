"use strict";
exports.__esModule = true;
exports.BaseDatabase = void 0;
var knex_1 = require("knex");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var BaseDatabase = /** @class */ (function () {
    function BaseDatabase() {
    }
    BaseDatabase.connection = (0, knex_1["default"])({
        client: "mysql",
        connection: {
            host: process.env.DATABASE_HOST,
            port: 3306,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME
        }
    });
    return BaseDatabase;
}());
exports.BaseDatabase = BaseDatabase;
