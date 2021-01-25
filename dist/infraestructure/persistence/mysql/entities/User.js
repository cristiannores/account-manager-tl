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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var Login_1 = require("./Login");
var Role_1 = require("./Role");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "iduser" }),
        __metadata("design:type", Number)
    ], User.prototype, "iduser", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "first_name", nullable: true, length: 255 }),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "last_name", nullable: true, length: 255 }),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "rut", nullable: true }),
        __metadata("design:type", Number)
    ], User.prototype, "rut", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "phone", nullable: true }),
        __metadata("design:type", Number)
    ], User.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "mail", nullable: true, length: 255 }),
        __metadata("design:type", String)
    ], User.prototype, "mail", void 0);
    __decorate([
        typeorm_1.Column("datetime", { name: "birth_date", nullable: true }),
        __metadata("design:type", Date)
    ], User.prototype, "birthDate", void 0);
    __decorate([
        typeorm_1.Column("tinyint", { name: "is_active", nullable: true }),
        __metadata("design:type", Number)
    ], User.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: "created_date", nullable: true }),
        __metadata("design:type", Date)
    ], User.prototype, "createdDate", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: "update_date", nullable: true }),
        __metadata("design:type", Date)
    ], User.prototype, "updateDate", void 0);
    __decorate([
        typeorm_1.DeleteDateColumn({ name: "deleted_date", nullable: true }),
        __metadata("design:type", Date)
    ], User.prototype, "deletedDate", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Login_1.Login; }, function (login) { return login.userIduser2; }),
        __metadata("design:type", Array)
    ], User.prototype, "logins", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Role_1.Role; }, function (role) { return role.users; }),
        typeorm_1.JoinTable({
            name: "user_has_role",
            joinColumns: [{ name: "user_iduser", referencedColumnName: "iduser" }],
            inverseJoinColumns: [
                { name: "role_idrole", referencedColumnName: "idrole" },
            ],
            schema: "account",
        }),
        __metadata("design:type", Array)
    ], User.prototype, "roles", void 0);
    User = __decorate([
        typeorm_1.Entity("user", { schema: "account" })
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map