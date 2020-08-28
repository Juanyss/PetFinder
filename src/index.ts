import Server from './server/server';
import router from './router/user.route'
import { sequelize } from './DB/connection';

const server = Server.init(3000);
server.app.use(router);



server.start(() => {
    console.log('Server running on port 3000');
    sequelize.authenticate().then(async() => {
        console.log('DB connected');        
        try {
            await sequelize.sync()
        } catch (error) {
            console.log(error.message);
            
        }
    }).catch((e:any) => {
        console.log(e.message);
        
    })    
})