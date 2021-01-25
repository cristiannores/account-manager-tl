import {BaseUseCase} from "../../../../shared/useCase/BaseUseCase";
import {ResultUseCase} from "../../../../shared/result/ResultUseCase";
import {Role} from "../../../../../infraestructure/persistence/mysql/entities/Role";
import {RoleRepository} from "../../../../../infraestructure/repositories/mysql/role.repository";
import {plainToClass} from "class-transformer";
import {UserDto} from "../../../user/dtos/User.dto";
import {validate, ValidationError} from "class-validator";
import {User} from "../../../../../infraestructure/persistence/mysql/entities/User";
import {RoleDto} from "../../dtos/Role.dto";

export class UseCaseAddRole extends BaseUseCase {

    private _rolRepository: RoleRepository;

    constructor(roleRepository: RoleRepository) {
        super();
        this._rolRepository = roleRepository;
    }

    async Execute(rol : object): Promise<ResultUseCase<Role>> {

        let rolBd = plainToClass(RoleDto, rol);
        const isValid : ValidationError[] = await validate(rolBd);

        const result = new ResultUseCase<Role>();

        if (isValid.length == 0) {
            const users = await this._rolRepository.insert(plainToClass(Role, rolBd));
            result.SetData(users.raw, 200);
            return result;
        } else {
            result.SetError({message: "Can`t inserted user ", data: isValid}, 400);
            return result;
        }
    }
}