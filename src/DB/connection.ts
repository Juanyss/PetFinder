import {Sequelize} from 'sequelize-typescript'
import User from '../models/user.model'
import Pet from '../models/pet.model';


export const sequelize = new Sequelize('petfinder','juany','440036Cu',{
    host:'localhost',
    dialect: 'mariadb',
    models: [User, Pet]
})

