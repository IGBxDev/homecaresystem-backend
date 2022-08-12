"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDatabase_1 = require("./data/BaseDatabase");
class Migrations extends BaseDatabase_1.BaseDatabase {
    createScript() {
        return __awaiter(this, void 0, void 0, function* () {
            Migrations.connection
                .raw(`
         CREATE TABLE IF NOT EXISTS labook_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
         );
      `)
                .then(console.log)
                .catch(console.log);
            Migrations.connection
                .raw(`
         CREATE TABLE IF NOT EXISTS labook_posts (
            id VARCHAR(255) PRIMARY KEY,
            photo VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            type ENUM("normal","event") DEFAULT "normal",
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            author_id VARCHAR(255),
            FOREIGN KEY (author_id) REFERENCES labook_users (id)
         );
      `).then(console.log)
                .catch(console.log);
            Migrations.connection
                .raw(`
         CREATE TABLE IF NOT EXISTS labook_amizade (
            id VARCHAR(255) PRIMARY KEY,
            idUsuarioSolicitante VARCHAR(255),
            idUsuarioAmigo VARCHAR(255),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (idUsuarioSolicitante) REFERENCES labook_users (id),
            FOREIGN KEY (idUsuarioAmigo) REFERENCES labook_users (id)
         );
      `).then(console.log)
                .catch(console.log);
        });
    }
}
const migrations = new Migrations();
migrations.createScript();
//# sourceMappingURL=migrations.js.map