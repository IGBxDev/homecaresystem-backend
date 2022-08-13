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
exports.PostController = void 0;
const PostBusiness_1 = require("../business/PostBusiness");
const postTypes_1 = require("../enum/postTypes");
const generateId_1 = require("../Services/generateId");
class PostController {
    constructor() {
        this.createPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { photo, description, author_id } = req.body;
                const input = {
                    id: (0, generateId_1.generateId)(),
                    photo: photo,
                    description: description,
                    type: postTypes_1.POST_TYPES.EVENT,
                    createdAt: new Date,
                    author_id: author_id
                };
                const postBusiness = new PostBusiness_1.PostBusiness();
                yield postBusiness.createPost(input);
                res.status(201).send({ message: "Post criado!" });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.findPostById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const postBusiness = new PostBusiness_1.PostBusiness();
                const post = yield postBusiness.findPostById(req.params.id);
                res.status(200).send(post);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.findPostFriendsByUserId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const postBusiness = new PostBusiness_1.PostBusiness();
                const allFriendPost = yield postBusiness.findPostFriendsByUserId(req.params.id);
                res.status(200).send(allFriendPost);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map