import { BaseUseCase  } from "../../../../shared/useCase/BaseUseCase";
import {ResultUseCase} from "../../../../shared/result/ResultUseCase";
import {User} from "../../../../../infraestructure/persistence/mysql/entities/User";
import { plainToClass } from 'class-transformer';
import {UserDto} from "../../dtos/User.dto";
import {UserRepository} from "../../../../../infraestructure/repositories/mysql/user.repository";
import {Validator} from "../../../../shared/validator/Validator";

export class UseCaseUserUpdateById extends BaseUseCase {

    private _userRepository : UserRepository;
    private _validator : Validator;
    constructor(userRepository :UserRepository, validator :Validator   )  {
        super();
        this._userRepository = userRepository;
        this._validator = validator;
    }

    async Execute(  user : object , id : number) : Promise<ResultUseCase<User>>{


        let userBd = plainToClass(UserDto, user);
        const isValid = await  this._validator.isValid(userBd)

        const result = new ResultUseCase<User>();

        if (!isValid.status) {
            result.SetError({message: "Can`t update user ", data: isValid.errors}, 400);
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