
import {UseCaseGetAllUsers} from "../../../../application/modules/user/useCases/getAllUSers";
import {UseCaseGetUSerById} from "../../../../application/modules/user/useCases/getById";
import {UseCaseUserSave} from "../../../../application/modules/user/useCases/saveUser";
import {UseCaseDeleteUserById} from "../../../../application/modules/user/useCases/deleteUserById";
import {UseCaseUserUpdateById} from "../../../../application/modules/user/useCases/updateUserById";
import {UserRepository} from "../../../../infraestructure/repositories/mysql/user.repository";


const userRepository = new UserRepository();

const getAllUsers = new UseCaseGetAllUsers(userRepository);
const getUSerById = new UseCaseGetUSerById(userRepository);
const saveUser = new UseCaseUserSave(userRepository);
const deleteUserById = new UseCaseDeleteUserById(userRepository);
const updateUserById = new UseCaseUserUpdateById(userRepository);

export { getAllUsers,getUSerById, saveUser,deleteUserById, updateUserById};