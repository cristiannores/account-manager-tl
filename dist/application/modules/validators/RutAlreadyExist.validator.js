"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutAlreadyExist = void 0;
var class_validator_1 = require("class-validator");
var user_repository_1 = require("../../../infraestructure/repositories/mysql/user.repository");
var RutAlreadyExistConstraint = /** @class */ (function () {
    function RutAlreadyExistConstraint() {
    }
    RutAlreadyExistConstraint.prototype.defaultMessage = function (validationArguments) {
        return '  Rut ($value) already exist in database';
    };
    RutAlreadyExistConstraint.prototype.validate = function (value, validationArguments) {
        var userRepository = new user_repository_1.UserRepository();
        return userRepository.getBy({ rut: value }).then(function (user) {
            if (user)
                return false;
            return true;
        });
    };
    RutAlreadyExistConstraint = __decorate([
        class_validator_1.ValidatorConstraint({ async: true })
    ], RutAlreadyExistConstraint);
    return RutAlreadyExistConstraint;
}());
function RutAlreadyExist(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: RutAlreadyExistConstraint,
        });
    };
}
exports.RutAlreadyExist = RutAlreadyExist;
//# sourceMappingURL=RutAlreadyExist.validator.js.map