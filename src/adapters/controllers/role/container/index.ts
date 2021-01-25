

import {RoleRepository} from "../../../../infraestructure/repositories/mysql/role.repository";
import {UseCaseGetAllRoles} from "../../../../application/modules/rol/useCases/getAllRoles";
import {UseCaseAddRole} from "../../../../application/modules/rol/useCases/addRole";
import {UseCaseDeleteRoleById} from "../../../../application/modules/rol/useCases/deleteRole";


const roleRepository = new RoleRepository();

const getAllRoles = new UseCaseGetAllRoles(roleRepository);
const addRole = new UseCaseAddRole(roleRepository);
const deleteRoleById = new UseCaseDeleteRoleById(roleRepository);

export { getAllRoles, addRole , deleteRoleById};