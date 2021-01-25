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
exports.Login = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Login = /** @class */ (function () {
    function Login() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idlogin" }),
        __metadata("design:type", Number)
    ], Login.prototype, "idlogin", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "page", nullable: true, length: 255 }),
        __metadata("design:type", String)
    ], Login.prototype, "page", void 0);
    __decorate([
        typeorm_1.Column("datetime", { name: "created_date", nullable: true }),
        __metadata("design:type", Date)
    ], Login.prototype, "createdDate", void 0);
    __decorate([
        typeorm_1.Column("datetime", { name: "updated_date", nullable: true }),
        __metadata("design:type", Date)
    ], Login.prototype, "updatedDate", void 0);
    __decorate([
        typeorm_1.Column("datetime", { name: "deleted_date", nullable: true }),
        __metadata("design:type", Date)
    ], Login.prototype, "deletedDate", void 0);
    __decorate([
        typeorm_1.Column("int", { primary: true, name: "user_iduser" }),
        __metadata("design:type", Number)
    ], Login.prototype, "userIduser", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.logins; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "user_iduser", referencedColumnName: "iduser" }]),
        __metadata("design:type", User_1.User)
    ], Login.prototype, "userIduser2", void 0);
    Login = __decorate([
        typeorm_1.Index("fk_login_user_idx", ["userIduser"], {}),
        typeorm_1.Entity("login", { schema: "account" })
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=Login.js.map