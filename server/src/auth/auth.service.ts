import { Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import  * as bcrypt from 'bcryptjs'
import { User } from "../users/user.model";
import {LoginUserDto} from "../users/dto/login-user.dto";

@Injectable()
export class AuthService {

  constructor(private userService: UsersService,
              private jwtService:JwtService) {
  }


  async login( loginUserDto: LoginUserDto){
    const user = await this.validateUser(loginUserDto)
    return this.generateToken(user);
  }

  async registration( userDto: CreateUserDto){
    const  candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate){
      throw new HttpException('Пользователь с таким email существует',HttpStatus.BAD_REQUEST)
    }
    const  hashPassword= await bcrypt.hash(userDto.password, 5);
    const user = await  this.userService.createUser({...userDto,password:hashPassword});
    return this.generateToken(user)
  }

  private async generateToken(user:User){
    const payload = {   email:user.email,
                        id:user.id,
                        name:user.name,
                        surname:user.surname,
                        patronymic:user.patronymic,
                        role:user.roles
                    }
    return{

      token: this.jwtService.sign(payload)

    }
  }


  private async validateUser(userDto: LoginUserDto) {
    const  user = await this.userService.getUserByEmail(userDto.email);
    const  passwordEquals = await bcrypt.compare(userDto.password,user.password);
    if (user && passwordEquals){
      return user;
    }
    throw new UnauthorizedException({message: 'Некорректный email или пароль!!!'})
  }
}
