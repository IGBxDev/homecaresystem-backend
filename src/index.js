"use strict";
exports.__esModule = true;
/**************************** IMPORTS ******************************/
var express_1 = require("express");
var cors_1 = require("cors");
var userRouter_1 = require("./routers/userRouter");
var postRouter_1 = require("./routers/postRouter");
var AmizadeRoute_1 = require("./routers/AmizadeRoute");
var DataAcess_1 = require("./data/DataAcess");
var PacienteRoute_1 = require("./routers/PacienteRoute");
/**************************** CONFIG ******************************/
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
DataAcess_1["default"].connect();
/**************************** TYPES ******************************/
/**************************** SERVICES ******************************/
/**************************** ENDPOINTS ******************************/
app.use('/user', userRouter_1.userRouter);
app.use('/post', postRouter_1.postRouter);
app.use('/amizade', AmizadeRoute_1.amizadeRouter);
app.use('/paciente', PacienteRoute_1.pacienteRouter);
/**************************** SERVER INIT ******************************/
app.listen(3003, function () {
    console.log("Server running on port 3003");
});
