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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PostController = void 0;
var PostBusiness_1 = require("../business/PostBusiness");
var postTypes_1 = require("../enum/postTypes");
var generateId_1 = require("../Services/generateId");
var PostController = /** @class */ (function () {
    function PostController() {
        var _this = this;
        this.createPost = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, photo, description, author_id, input, postBusiness, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, photo = _a.photo, description = _a.description, author_id = _a.author_id;
                        input = {
                            id: (0, generateId_1.generateId)(),
                            photo: photo,
                            description: description,
                            type: postTypes_1.POST_TYPES.EVENT,
                            createdAt: new Date,
                            author_id: author_id
                        };
                        postBusiness = new PostBusiness_1.PostBusiness();
                        return [4 /*yield*/, postBusiness.createPost(input)];
                    case 1:
                        _b.sent();
                        res.status(201).send({ message: "Post criado!" });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        res.status(400).send(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.findPostById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var postBusiness, post, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        postBusiness = new PostBusiness_1.PostBusiness();
                        return [4 /*yield*/, postBusiness.findPostById(req.params.id)];
                    case 1:
                        post = _a.sent();
                        res.status(200).send(post);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.status(400).send(error_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.findPostFriendsByUserId = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var postBusiness, allFriendPost, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        postBusiness = new PostBusiness_1.PostBusiness();
                        return [4 /*yield*/, postBusiness.findPostFriendsByUserId(req.params.id)];
                    case 1:
                        allFriendPost = _a.sent();
                        res.status(200).send(allFriendPost);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.status(400).send(error_3.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    return PostController;
}());
exports.PostController = PostController;
