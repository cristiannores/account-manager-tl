"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var RutAlreadyExist_validator_1 = require("../../validators/RutAlreadyExist.validator");
var UserDto = /** @class */ (function () {
    function UserDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UserDto.prototype, "firstName", void 0);
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UserDto.prototype, "lastName", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MinLength(9),
        class_validator_1.MaxLength(9),
        RutAlreadyExist_validator_1.RutAlreadyExist(),
        __metadata("design:type", String)
    ], UserDto.prototype, "rut", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MinLength(6),
        class_validator_1.MaxLength(10),
        __metadata("design:type", Number)
    ], UserDto.prototype, "phone", void 0);
    __decorate([
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], UserDto.prototype, "mail", void 0);
    __decorate([
        class_transformer_1.Type(function () { return Date; }),
        class_validator_1.IsDate(),
        __metadata("design:type", Date)
    ], UserDto.prototype, "birthDate", void 0);
    __decorate([
        class_validator_1.IsInt(),
        class_validator_1.Min(0),
        class_validator_1.Max(1),
        __metadata("design:type", Number)
    ], UserDto.prototype, "isActive", void 0);
    return UserDto;
}());
exports.UserDto = UserDto;
//# sourceMappingURL=User.dto.js.map