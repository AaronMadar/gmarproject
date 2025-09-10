import express from 'express'
import fs from "fs"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';
import { requestController } from './Controller/RequestController.js'
import dotenv from "dotenv"


dotenv.config()


const router_user = express.Router()
const PathUserFile = './src/Assets/Data/dataUser.json'


router_user.post("/subscribe" , async (req,res)=>{
    const {username,password} = req.body
    requestController({username,password},res)
    let users = fs.existsSync(PathUserFile)?JSON.parse(fs.readFileSync(PathUserFile)):[]
    let existingUser = users.find(user=>user.username === username)
    if (existingUser){
        res.status(400).send({success:false,response:"User already exist"})
        return
    }
    const hashedPw = await bcrypt.hash(password, 12)
    const userInfo = {username,password:hashedPw}
    users.push(userInfo)

    try{
      fs.writeFileSync(PathUserFile,JSON.stringify(users))  
    
     const token = jwt.sign(
               { username},
                 process.env.JWT_SECRET,
               { expiresIn: '20m' })
    
        res.status(200).send({success:true,token,username})
    

    }catch(e){
        res.status(400).send({success:false,response:"Error during the subscription"+e})
    }
  
    


})

router_user.post("/login" , (req,res)=>{

     const {username,password} = req.body
    requestController({username,password},res)

    let users = fs.existsSync(PathUserFile)?JSON.parse(fs.readFileSync(PathUserFile)):[]
    let existingUser = users.find(user=>user.username === username)
    if (!existingUser){
        res.status(400).send("unknown user")
        return
    }
    const validPw = bcrypt.compare(password,existingUser.password)

    const token = jwt.sign(
               { username},
                 process.env.JWT_SECRET,
               { expiresIn: '20m' })
    
        res.status(200).send({success:true,token,username})
        return



})






export default router_user