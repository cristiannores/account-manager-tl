"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreModules_1 = require("../../../infraestructure/webserver/CoreModules");
var BaseRouteController = /** @class */ (function () {
    function BaseRouteController() {
        this.router = CoreModules_1.Router();
    }
    BaseRouteController.prototype.HandleResult = function (res, result) {
        if (result.success) {
            res
                .status(Number(result.statusCode))
                .json(result.message ? result.ToResult() : result.ToResult().data);
        }
        else {
            res.status(Number(result.statusCode)).json(result.ToResult());
        }
    };
    return BaseRouteController;
}());
exports.default = BaseRouteController;
//# sourceMappingURL=BaseRouteController.js.map