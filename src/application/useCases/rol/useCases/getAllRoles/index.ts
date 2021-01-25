import {BaseUseCase} from "../../../../shared/useCase/BaseUseCase";
import {ResultUseCase} from "../../../../shared/result/ResultUseCase";
import {Role} from "../../../../../infraestructure/persistence/mysql/entities/Role";
import {RoleRepository} from "../../../../../infraestructure/repositories/mysql/role.repository";

export class UseCaseGetAllRoles extends BaseUseCase {

    private _rolRepository: RoleRepository;

    constructor(roleRepository: RoleRepository) {
        super();
        this._rolRepository = roleRepository;
    }

    async Execute(): Promise<ResultUseCase<Role[]>> {

        const result = new ResultUseCase<Role[]>();
        const roles = await this._rolRepository.getAll();
        if ( roles ){
            result.SetData(roles,200);
            return result;
        }
        result.SetError("Roles not found",404);
        return result;
    }
}