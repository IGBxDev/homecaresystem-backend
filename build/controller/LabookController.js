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
exports.LabookController = void 0;
const LabookBusiness_1 = require("../business/LabookBusiness");
class LabookController extends ValidityState {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const laBookBusiness = new LabookBusiness_1.LabookBusiness();
                yield laBookBusiness.create({ name, email, password });
                res.status(200).send("Success!");
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.LabookController = LabookController;
//# sourceMappingURL=LabookController.js.map