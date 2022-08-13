"use strict";
exports.__esModule = true;
exports.postRouter = void 0;
var express_1 = require("express");
var PostController_1 = require("../controller/PostController");
exports.postRouter = express_1["default"].Router();
var postController = new PostController_1.PostController();
exports.postRouter.post('/create', postController.createPost);
exports.postRouter.get('/:id', postController.findPostById);
exports.postRouter.get('/findPostFriendsByUserId/:id', postController.findPostFriendsByUserId);
