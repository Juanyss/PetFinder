import { Table, Model, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty,DataType, BelongsTo, HasMany, ForeignKey } from 'sequelize-typescript'
import User from './user.model';


@Table({tableName:'pet'})
export default class Pet extends Model<Pet>{
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id?:number;

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.STRING)    
    name!: string;

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.STRING)    
    race!: string;

    @ForeignKey(() => User)
    ownerId!: User;

    @BelongsTo(() => User)
    owners!: User


}