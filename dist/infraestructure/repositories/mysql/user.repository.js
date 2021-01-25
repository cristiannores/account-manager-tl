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
exports.UserRepository = void 0;
var User_1 = require("../../persistence/mysql/entities/User");
var BaseRepository_1 = require("../BaseRepository");
var UserRepository = /** @class */ (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        var _this = _super.call(this) || this;
        _this._entity = User_1.User;
        return _this;
    }
    return UserRepository;
}(BaseRepository_1.BaseRepository));
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map