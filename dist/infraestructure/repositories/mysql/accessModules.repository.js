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
exports.AccessModulesRepository = void 0;
var BaseRepository_1 = require("../BaseRepository");
var AccessModules_1 = require("../../persistence/mysql/entities/AccessModules");
var AccessModulesRepository = /** @class */ (function (_super) {
    __extends(AccessModulesRepository, _super);
    function AccessModulesRepository() {
        var _this = _super.call(this) || this;
        _this._entity = AccessModules_1.AccessModules;
        return _this;
    }
    return AccessModulesRepository;
}(BaseRepository_1.BaseRepository));
exports.AccessModulesRepository = AccessModulesRepository;
//# sourceMappingURL=accessModules.repository.js.map