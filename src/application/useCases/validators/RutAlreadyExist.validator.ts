import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from "class-validator";
import {UserRepository} from "../../../infraestructure/repositories/mysql/user.repository";

@ValidatorConstraint({ async: true })
class RutAlreadyExistConstraint  implements  ValidatorConstraintInterface  {

    defaultMessage(validationArguments?: ValidationArguments): string {
        return '  Rut ($value) already exist in database';
    }

    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> | boolean{
        const userRepository =  new UserRepository();
        return userRepository.getBy({ rut : value  }).then((user) => {
            if (user) return false;
            return true;
        })
    }

}

export function RutAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: RutAlreadyExistConstraint,
        });
    };
}