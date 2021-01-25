import { BaseUseCase  } from "../../../../shared/useCase/BaseUseCase";
import {ResultUseCase} from "../../../../shared/result/ResultUseCase";
import {DeleteResult} from "typeorm";
import {Role} from "../../../../../infraestructure/persistence/mysql/entities/Role";
import {RoleRepository} from "../../../../../infraestructure/repositories/mysql/role.repository";

export class UseCaseDeleteRoleById extends BaseUseCase {

    private _roleRepository : RoleRepository;
    constructor(roleRepository :RoleRepository)  {
        super();
        this._roleRepository = roleRepository;
    }

    async Execute(id: number) : Promise<ResultUseCase<Role>>{

        const result = new ResultUseCase<Role>();
        const res  : DeleteResult = await this._roleRepository.delete({idrole : id});
        console.log(res);
        if ( res.raw.affectedRows > 0 ){
            result.SetData( 'Role ${id} deleted!', 200);
            return result;
        }else{
            result.SetError( {message : "Can`t Delete", data : res},  404 );
            return result;
        }

    }
}