import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from "../roles/dto/create-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "../users/user.model";
import { Role } from "./roles.model";

@Injectable()
export class RolesService {

  constructor(
    @InjectModel(Role)
    private roleRepository: typeof Role
  ) {}

  async  createRole(dto: CreateRoleDto){
    const role = await this.roleRepository.create(dto);
    return role;
  }

  async getRoleByValue(value:string){
    const role = await this.roleRepository.findAll({where:{value}});
    return role;
  }


}
