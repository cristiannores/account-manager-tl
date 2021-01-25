import { BaseUseCase  } from "../../../../shared/useCase/BaseUseCase";
import {ResultUseCase} from "../../../../shared/result/ResultUseCase";
import {User} from "../../../../../infraestructure/persistence/mysql/entities/User";
import { plainToClass } from 'class-transformer';
import {UserDto} from "../../dtos/User.dto";
import {validate, ValidationError} from "class-validator";
import {UserRepository} from "../../../../../infraestructure/repositories/mysql/user.repository";

export class UseCaseUserUpdateById extends BaseUseCase {

    private _userRepository : UserRepository;
    constructor(userRepository :UserRepository )  {
        super();
        this._userRepository = userRepository;
    }

    async Execute(  user : object , id : number) : Promise<ResultUseCase<User>>{


        let userBd = plainToClass(UserDto, user);
        const isValid : ValidationError[] = await validate(userBd, {skipMissingProperties : true});

        const result = new ResultUseCase<User>();

        if (isValid.length != 0) {
            result.SetError({message: "Can`t update user ", data: isValid}, 400);
            return result;
        }

        const resultUpdate = await this._userRepository.updateById({ iduser : id } , plainToClass(User, userBd));

        if ( resultUpdate.raw.affectedRows ==  0){
            result.SetError("Nothing change", 404);
            return result;
        }

        result.SetData( ` User with id:  ${id}  udpated with values ${JSON.stringify(userBd) }`  , 200);
        return result;

    }
}