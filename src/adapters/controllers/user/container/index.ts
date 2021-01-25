import {UseCaseUserUpdateById} from "../../../../application/useCases/user/useCases/updateUserById";
import {UserRepository} from "../../../../infraestructure/repositories/mysql/user.repository";
import {UseCaseUserSave} from "../../../../application/useCases/user/useCases/saveUser";
import {UseCaseDeleteUserById} from "../../../../application/useCases/user/useCases/deleteUserById";
import {UseCaseGetUSerById} from "../../../../application/useCases/user/useCases/getById";
import {UseCaseGetAllUsers} from "../../../../application/useCases/user/useCases/getAllUSers";
import {Validator} from "../../../../application/shared/validator/Validator";

const userRepository = new UserRepository();
const validator  = new Validator()

const getAllUsers = new UseCaseGetAllUsers(userRepository);
const getUSerById = new UseCaseGetUSerById(userRepository);
const saveUser = new UseCaseUserSave(userRepository);
const deleteUserById = new UseCaseDeleteUserById(userRepository);
const updateUserById = new UseCaseUserUpdateById(userRepository,validator);

export { getAllUsers,getUSerById, saveUser,deleteUserById, updateUserById};