import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto{
  @IsString({message:'Должно быть строкой'})
  readonly name:string;

  @IsString({message:'Должно быть строкой'})
  @Length(8,16,{message:'Пароль не должен быть меньше 8 и больше 16'})
  readonly password:string;

  @IsString({message:'Должно быть строкой'})
  @IsEmail({},{message:"Некорректный email"})
  readonly email:string;

  @IsString({message:'Должно быть строкой'})
  readonly surname:string;

  @IsString({message:'Должно быть строкой'})
  readonly patronymic:string;
}