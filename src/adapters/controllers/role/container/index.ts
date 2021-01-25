import {UseCaseGetAllRoles} from "../../../../application/useCases/rol/useCases/getAllRoles";
import {UseCaseAddRole} from "../../../../application/useCases/rol/useCases/addRole";
import {RoleRepository} from "../../../../infraestructure/repositories/mysql/role.repository";
import {UseCaseDeleteRoleById} from "../../../../application/useCases/rol/useCases/deleteRole";

const roleRepository = new RoleRepository();

const getAllRoles = new UseCaseGetAllRoles(roleRepository);
const addRole = new UseCaseAddRole(roleRepository);
const deleteRoleById = new UseCaseDeleteRoleById(roleRepository);

export { getAllRoles, addRole , deleteRoleById};