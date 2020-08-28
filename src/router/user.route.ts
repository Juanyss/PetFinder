import {Router} from 'express'
import User from '../models/user.model';
import Pet from '../models/pet.model';


const router = Router()


router.get('/',async(req, res) => {

    // let user = await User.findByPk(1)
    

    // let pet = new Pet({
    //     name:'Charlie',
    //     race:'Canina',
    //     ownerId: user?.id
    // })

    // pet.save();

   let pets = await Pet.findAll({include: [User]})
    
       
    res.status(200).json({
        ok:true,
        pets
    })
});

export default router;