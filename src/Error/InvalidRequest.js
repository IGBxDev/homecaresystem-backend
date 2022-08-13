"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.InvalidRequest = void 0;
var CustomError_1 = require("./CustomError");
var InvalidRequest = /** @class */ (function (_super) {
    __extends(InvalidRequest, _super);
    function InvalidRequest() {
        return _super.call(this, "Requisição invalida, um ou mais campos vazio", 400) || this;
    }
    return InvalidRequest;
}(CustomError_1.CustomError));
exports.InvalidRequest = InvalidRequest;
