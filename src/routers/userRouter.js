"use strict";
exports.__esModule = true;
exports.userRouter = void 0;
var express_1 = require("express");
var UserController_1 = require("../controller/UserController");
exports.userRouter = express_1["default"].Router();
var userController = new UserController_1.UserController();
exports.userRouter.post('/create', userController.createUser);
