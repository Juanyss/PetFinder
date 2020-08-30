import {Router} from 'express'
import User from '../models/user.model';
import Pet from '../models/pet.model';
import UserPet from '../models/UserPet.model';


const router = Router()


router.get('/save',async(req, res) => {

    
    // let user = new User({
    //     firstName: 'Cecilia',
    //     lastName: 'Veron',
    //     age:30,
    //     email: 'ceci_vrn@hotmail.com'
    // })

    // await user.save()

    let user = await User.findByPk(2)
    

    // let pet = await Pet.findByPk(10)
    
    let pet = new Pet({
        name:'Wally',
        race:'Canina',        
    })

    await pet.save()

    if(pet == null || user == null){
        res.status(404).json({
            ok:false,
            msg: 'Pet or User not found'
        } )
    }else{
        let userPet = new UserPet({
            userId: user.id,
            petId: pet.id
        })
    
        await userPet.save()

        res.status(200).json({
            ok:true,
            userPet
        })
    }

    
});

router.get('/',async(req,res)=> {
    let user = await UserPet.findAll({
    where: {
        userId:2
    },include:[Pet]})

    //let pets = await UserPet.findAll({include: [User,Pet]})
    
       
    res.status(200).json({
        ok:true,
        user
    })
})

export default router;