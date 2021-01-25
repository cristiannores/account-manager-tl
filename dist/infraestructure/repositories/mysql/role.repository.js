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
exports.RoleRepository = void 0;
var BaseRepository_1 = require("../BaseRepository");
var Role_1 = require("../../persistence/mysql/entities/Role");
var RoleRepository = /** @class */ (function (_super) {
    __extends(RoleRepository, _super);
    function RoleRepository() {
        var _this = _super.call(this) || this;
        _this._entity = Role_1.Role;
        return _this;
    }
    return RoleRepository;
}(BaseRepository_1.BaseRepository));
exports.RoleRepository = RoleRepository;
//# sourceMappingURL=role.repository.js.map