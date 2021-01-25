import { BaseUseCase  } from "../../../../shared/useCase/BaseUseCase";
import {ResultUseCase} from "../../../../shared/result/ResultUseCase";
import {User} from "../../../../../infraestructure/persistence/mysql/entities/User";
import {UserRepository} from "../../../../../infraestructure/repositories/mysql/user.repository";

export class UseCaseGetUSerById extends BaseUseCase {

    private _userRepository : UserRepository;
    constructor(userRepository : UserRepository)  {
        super();
        this._userRepository = userRepository;
    }

    async Execute(id:number) : Promise<ResultUseCase<User>>{

        const result = new ResultUseCase<User>();
        const user = await this._userRepository.getById(id);
        if ( user ){
            result.SetData(user, 200);
            return result;
        }else{
            result.SetError( "User not found",  404 );
            return result;
        }

    }
}