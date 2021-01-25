import { BaseUseCase  } from "../../../../shared/useCase/BaseUseCase";
import {ResultUseCase} from "../../../../shared/result/ResultUseCase";
import {User} from "../../../../../infraestructure/persistence/mysql/entities/User";
import { plainToClass } from 'class-transformer';
import {UserDto} from "../../dtos/User.dto";
import {UserRepository} from "../../../../../infraestructure/repositories/mysql/user.repository";
import {Validator} from "../../../../shared/validator/Validator";

export class UseCaseUserSave extends BaseUseCase {

    private _userRepository : UserRepository;
    private _validator : Validator;
    constructor(userRepository : UserRepository, validator : Validator)  {
        super();
        this._userRepository = userRepository;
        this._validator = validator;
    }

    async Execute(  user : object ) : Promise<ResultUseCase<User>>{

        let userBd = plainToClass(UserDto, user);
        const isValid  = await  this._validator.isValid(userBd);

        const result = new ResultUseCase<User>();

        if (isValid.status) {
            const users = await this._userRepository.insert(plainToClass(User, userBd));
            result.SetData(users.raw, 200);
            return result;
        } else {
            result.SetError({message: "Can`t insert user ", data: isValid.errors}, 400);
            return result;
        }

    }
}