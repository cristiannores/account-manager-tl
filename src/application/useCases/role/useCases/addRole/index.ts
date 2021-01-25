import {BaseUseCase} from "../../../../shared/useCase/BaseUseCase";
import {ResultUseCase} from "../../../../shared/result/ResultUseCase";
import {Role} from "../../../../../infraestructure/persistence/mysql/entities/Role";
import {RoleRepository} from "../../../../../infraestructure/repositories/mysql/role.repository";
import {plainToClass} from "class-transformer";
import {RoleDto} from "../../dtos/Role.dto";
import {Validator} from "../../../../shared/validator/Validator";

export class UseCaseAddRole extends BaseUseCase {

    private _rolRepository: RoleRepository;
    private _validator: Validator;

    constructor(roleRepository: RoleRepository, validator : Validator) {
        super();
        this._rolRepository = roleRepository;
        this._validator = validator;
    }

    async Execute(rol : object): Promise<ResultUseCase<Role>> {

        let rolBd = plainToClass(RoleDto, rol);
        const isValid   = await this._validator.isValid(rolBd)

        const result = new ResultUseCase<Role>();

        if (isValid.status) {
            const users = await this._rolRepository.insert(plainToClass(Role, rolBd));
            result.SetData(users.raw, 200);
            return result;
        } else {
            result.SetError({message: "Can`t inserted user ", data: isValid}, 400);
            return result;
        }
    }
}