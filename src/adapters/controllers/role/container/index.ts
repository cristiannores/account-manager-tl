import {UseCaseGetAllRoles} from "../../../../application/useCases/role/useCases/getAllRoles";
import {UseCaseAddRole} from "../../../../application/useCases/role/useCases/addRole";
import {RoleRepository} from "../../../../infraestructure/repositories/mysql/role.repository";
import {UseCaseDeleteRoleById} from "../../../../application/useCases/role/useCases/deleteRole";
import {Validator} from "../../../../application/shared/validator/Validator";

const roleRepository = new RoleRepository();
const validator = new Validator();
const getAllRoles = new UseCaseGetAllRoles(roleRepository);
const addRole = new UseCaseAddRole(roleRepository,validator);
const deleteRoleById = new UseCaseDeleteRoleById(roleRepository);

export { getAllRoles, addRole , deleteRoleById};