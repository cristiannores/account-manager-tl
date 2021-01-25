import {ValidatorOptions} from "class-validator/types/validation/ValidatorOptions";
import {responseValidator} from "./Validator";
export interface ValidatorInterface {

    isValid(object: object ,validateOptions? : ValidatorOptions  ) : Promise<responseValidator>

}