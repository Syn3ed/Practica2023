import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";


interface  UserCreationAttrs{
    name:string;
    password:string;
    email:string;
    surname:string;
    patronymic:string;
};

@Table({tableName:'users'})
export class User extends Model<User,UserCreationAttrs> {
  @ApiProperty({example:1, description:'Уник индификатор'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement:true,primaryKey:true})
    id:number;
  @ApiProperty({example:'Иван', description:'Имя'})
  @Column({type: DataType.STRING, allowNull: false})
    name:string;
  @ApiProperty({example:'Иванов', description:'Фамилия'})
  @Column({type: DataType.STRING, allowNull: false})
    surname:string;
  @ApiProperty({example:'Иванович', description:'Отчество'})
  @Column({type: DataType.STRING, allowNull: true})
    patronymic:string;
  @ApiProperty({example:'123qwerty456', description:'Пароль'})
  @Column({type: DataType.STRING, allowNull: false})
    password:string;
  @ApiProperty({example:'user@mail.ru', description:'Почта'})
  @Column({type: DataType.STRING, unique:true, allowNull: false})
    email:string;

  @BelongsToMany(()=>Role,()=>UserRoles)
  roles: Role[];
}