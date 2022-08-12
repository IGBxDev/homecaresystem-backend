"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RepositoryBase {
    constructor(respository) {
        this._repository = respository;
    }
    save(_repository) {
        throw new Error("Implementar método ");
    }
}
exports.default = RepositoryBase;
//# sourceMappingURL=RepositoryBase.js.map