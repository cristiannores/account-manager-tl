"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRepository = void 0;
var BaseRepository_1 = require("../BaseRepository");
var Login_1 = require("../../persistence/mysql/entities/Login");
var LoginRepository = /** @class */ (function (_super) {
    __extends(LoginRepository, _super);
    function LoginRepository() {
        var _this = _super.call(this) || this;
        _this._entity = Login_1.Login;
        return _this;
    }
    return LoginRepository;
}(BaseRepository_1.BaseRepository));
exports.LoginRepository = LoginRepository;
//# sourceMappingURL=login.repository.js.map