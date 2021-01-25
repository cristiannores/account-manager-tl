import { BaseUseCase  } from "../../../../shared/useCase/BaseUseCase";
import {ResultUseCase} from "../../../../shared/result/ResultUseCase";
import {User} from "../../../../../infraestructure/persistence/mysql/entities/User";
import {UserRepository} from "../../../../../infraestructure/repositories/mysql/user.repository";

export class UseCaseGetAllUsers extends BaseUseCase {

    private _userRepository : UserRepository;
    constructor(userRepository :UserRepository)  {
        super();
        this._userRepository = userRepository;
    }

    async Execute() : Promise<ResultUseCase<User[]>>{

        const result = new ResultUseCase<User[]>();
        const users = await this._userRepository.getAll();
        if ( users ){
            result.SetData(users, 200);
            return result;
        }else{
            result.SetError( "Users not found",  404 );
            return result;
        }

    }
}