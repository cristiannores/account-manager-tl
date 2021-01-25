import { BaseUseCase  } from "../../../../shared/useCase/BaseUseCase";
import {ResultUseCase} from "../../../../shared/result/ResultUseCase";
import {User} from "../../../../../infraestructure/persistence/mysql/entities/User";
import { plainToClass } from 'class-transformer';
import {UserDto} from "../../dtos/User.dto";
import {validate, ValidationError} from "class-validator";
import {UserRepository} from "../../../../../infraestructure/repositories/mysql/user.repository";

export class UseCaseUserSave extends BaseUseCase {

    private _userRepository : UserRepository;
    constructor(userRepository : UserRepository)  {
        super();
        this._userRepository = userRepository;
    }

    async Execute(  user : object ) : Promise<ResultUseCase<User>>{

        let userBd = plainToClass(UserDto, user);
        const isValid : ValidationError[] = await validate(userBd);

        const result = new ResultUseCase<User>();

        if (isValid.length == 0) {
            const users = await this._userRepository.insert(plainToClass(User, userBd));
            result.SetData(users.raw, 200);
            return result;
        } else {
            result.SetError({message: "Can`t inserted user ", data: isValid}, 400);
            return result;
        }

    }
}