import { Model, Table, ForeignKey, Column, BelongsTo, PrimaryKey } from 'sequelize-typescript';
import User from './user.model';
import Pet from './pet.model';





@Table
export default class UserPet extends Model<UserPet>{
    @BelongsTo(()=>User)
    user!:User

    @ForeignKey(() => User)
    @PrimaryKey
    @Column
    userId!: number;

    @BelongsTo(()=>Pet)
    pet!:User

    @ForeignKey(() => Pet)
    @PrimaryKey
    @Column
    petId!: number;




}