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
exports.PostBusiness = void 0;
const PostDatabase_1 = require("../data/PostDatabase");
class PostBusiness {
    constructor() {
        this.createPost = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { photo, description, type, author_id } = input;
                if (!photo || !description || !type || !author_id) {
                    throw new Error("algum dos campos está faltando.");
                }
                const postDatabase = new PostDatabase_1.PostDatabase();
                yield postDatabase.insertPost(input);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.findPostById = (idPost) => __awaiter(this, void 0, void 0, function* () {
            try {
                const postDatabase = new PostDatabase_1.PostDatabase();
                return yield postDatabase.findPostById(idPost);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.findPostFriendsByUserId = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const postDatabase = new PostDatabase_1.PostDatabase();
                return yield postDatabase.findPostFriendsByUserId(userId);
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.PostBusiness = PostBusiness;
//# sourceMappingURL=PostBusiness.js.map