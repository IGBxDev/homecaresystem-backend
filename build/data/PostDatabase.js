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
exports.PostDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class PostDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.insertPost = (post) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection.insert({
                    id: post.id,
                    photo: post.photo,
                    description: post.description,
                    type: post.type,
                    createdAt: post.createdAt,
                    author_id: post.author_id
                }).into('labook_posts');
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.findPostById = (idPost) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield BaseDatabase_1.BaseDatabase.connection("labook_posts").select("*").where("id", idPost);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.findPostFriendsByUserId = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield BaseDatabase_1.BaseDatabase.connection("labook_amizade")
                    .select("labook_posts.id as idPost", "labook_posts.photo as photo", "labook_posts.description as description", "labook_posts.type as type", "labook_posts.author_id as author_id", "labook_posts.createdAt as createdAt")
                    .innerJoin("labook_posts", "labook_posts.author_id", "labook_amizade.idUsuarioAmigo")
                    .where("labook_amizade.idUsuarioSolicitante", userId)
                    .orderBy("createdAt", "ASC");
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.PostDatabase = PostDatabase;
