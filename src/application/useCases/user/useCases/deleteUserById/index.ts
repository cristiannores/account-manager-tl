import { BaseUseCase  } from "../../../../shared/useCase/BaseUseCase";
import {ResultUseCase} from "../../../../shared/result/ResultUseCase";
import {User} from "../../../../../infraestructure/persistence/mysql/entities/User";
import {DeleteResult} from "typeorm";
import {UserRepository} from "../../../../../infraestructure/repositories/mysql/user.repository";

export class UseCaseDeleteUserById extends BaseUseCase {

    private _userRepository : UserRepository;
    constructor(userRepository :UserRepository)  {
        super();
        this._userRepository = userRepository;
    }

    async Execute(id: number) : Promise<ResultUseCase<User[]>>{

        const result = new ResultUseCase<User[]>();
        const res  : DeleteResult = await this._userRepository.delete({iduser : id});
        if ( res.raw.affectedRows > 0 ){
            result.SetData(  `User ${id} deleted!`, 200);
            return result;
        }else{
            result.SetError( {message : "Can`t Delete", data : res},  404 );
            return result;
        }

    }
}