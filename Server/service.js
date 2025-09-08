import express from 'express'
import router_post from './Server-Post/Router-Post.js'
import router_user from './Router-User.js'


const server = express()
express.static('public')
server.use('/api/post',router_post)
server.use('/api/user',router_user)

server.post("/" , ()=>{
    res.status(400).send('all is right')
})



server.listen(3000, ()=>{
    console.log('Listening on port 3000 ... ');
    
})