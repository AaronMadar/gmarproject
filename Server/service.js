import express from 'express'
import router_post from './Router-Post.js'
import router_user from './Router-User.js'
import { corsController } from './Controller/CorsController.js'


const server = express()
corsController(server)
express.static('public')
server.use('/api/post',router_post)
server.use('/api/user',router_user)

server.post("/" , (req,res)=>{
    console.log('all is right');
    
    res.status(200).send('all is righti')
})



server.listen(3001, ()=>{
    console.log('Listening on port 3001 ... ');
    
})