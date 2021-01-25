"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
require("reflect-metadata");
var App_1 = __importDefault(require("./infraestructure/webserver/App"));
var app = new App_1.default();
app.Start().catch(function (e) {
    console.log(e.message);
}).finally(function () {
    console.log('App full started');
});
//# sourceMappingURL=index.js.map