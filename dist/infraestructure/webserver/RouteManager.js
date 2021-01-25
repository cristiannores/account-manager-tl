"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserController_1 = __importDefault(require("../../adapters/controllers/user/UserController"));
var RoleController_1 = __importDefault(require("../../adapters/controllers/role/RoleController"));
var RouteManager = /** @class */ (function () {
    function RouteManager() {
    }
    RouteManager.prototype.getControllersLoaded = function () {
        var controllers = [UserController_1.default, RoleController_1.default];
        return controllers;
    };
    return RouteManager;
}());
var instance = new RouteManager();
exports.default = instance;
//# sourceMappingURL=RouteManager.js.map