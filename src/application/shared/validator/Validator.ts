import { validate } from "class-validator";
import {ValidatorOptions} from "class-validator/types/validation/ValidatorOptions";
import {ValidatorInterface} from "./ValidatorInterface";

export interface responseValidator {
    status :boolean,
    errors? : { [type: string]: string; }[]
}
export class Validator implements ValidatorInterface{

    defaultOptions = {skipMissingProperties : true};

    constructor() {
    }

    public async isValid(object: object ,validateOptions : ValidatorOptions = {}) : Promise<responseValidator>{
         let validation = await validate(object, validateOptions != {} ? validateOptions : this.defaultOptions);

         var errors = validation.map(value =>  { return value.constraints } );
         if ( errors.length == 0){
             return {status :true };
         }else{
             // Add some metrics for errors.
             console.error('Errors',errors);
             return  { status : false , errors : errors}
         }

    }
}