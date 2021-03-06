import { Table, Model, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, DataType, BelongsTo, ForeignKey, BelongsToMany, HasMany } from 'sequelize-typescript';
import Pet from './pet.model';
import UserPet from './UserPet.model';



@Table({tableName:'user'})
export default class User extends Model<User>{
    

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id?:number

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.STRING)    
    firstName!: string

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.STRING)
    lastName!:string

    @AllowNull(true)    
    @Column(DataType.INTEGER)
    age?:number

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.STRING)
    email!: string
    
    

    @HasMany(() => UserPet)
    pets?: UserPet[]

}



