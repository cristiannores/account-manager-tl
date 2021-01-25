import {IsDate, IsEmail, IsInt, IsString, Max, MaxLength, Min, MinLength} from 'class-validator';
import {Type} from 'class-transformer';
import {RutAlreadyExist} from "../../validators/RutAlreadyExist.validator";

export class UserDto {

    @IsString()
    firstName: string | null;

    @IsString()
    lastName: string | null;

    @IsString()
    @MinLength(9)
    @MaxLength(9)
    @RutAlreadyExist()
    rut: string | null;

    @IsString()
    @MinLength(6)
    @MaxLength(10)
    phone: number | null;

    @IsEmail()
    mail: string | null;

    @Type(() => Date)
    @IsDate()
    birthDate: Date | null;

    @IsInt()
    @Min(0)
    @Max(1)
    isActive: number | null;

}