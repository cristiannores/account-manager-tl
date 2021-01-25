"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRole = exports.getAllRoles = void 0;
var role_repository_1 = require("../../../../infraestructure/repositories/mysql/role.repository");
var getAllRoles_1 = require("../../../../application/modules/rol/useCases/getAllRoles");
var addRole_1 = require("../../../../application/modules/rol/useCases/addRole");
var roleRepository = new role_repository_1.RoleRepository();
var getAllRoles = new getAllRoles_1.UseCaseGetAllRoles(roleRepository);
exports.getAllRoles = getAllRoles;
var addRole = new addRole_1.UseCaseAddRole(roleRepository);
exports.addRole = addRole;
//# sourceMappingURL=index.js.map