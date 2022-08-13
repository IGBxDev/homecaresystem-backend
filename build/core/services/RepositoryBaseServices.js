"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RepositoryBase_1 = __importDefault(require("../repository/RepositoryBase"));
class RepositoryBaseServices extends RepositoryBase_1.default {
    constructor(_respository) {
        super(_respository);
    }
    repositorySave(repository) {
        this.save(repository);
    }
    get name() {
        return this.name;
    }
}
exports.default = RepositoryBaseServices;
//# sourceMappingURL=RepositoryBaseServices.js.map