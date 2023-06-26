import {IsEmail, IsString, Length} from "class-validator";


export class LoginUserDto{

    @IsString({message:'Должно быть строкой'})
    @Length(8,16,{message:'Пароль не должен быть меньше 4 и больше 16'})
    readonly password:string;

    @IsString({message:'Должно быть строкой'})
    @IsEmail({},{message:"Некорректный email"})
    readonly email:string;

}