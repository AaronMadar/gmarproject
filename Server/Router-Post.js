// ce router s'occupe de gerer les demandes crud liees aux post des utilisateurs
import express from 'express'


const router_post = express.Router()

router_post.post("/create" , (req,res)=>{
    try{
        
        res.status(200).send("this endpoint work!")

    }catch(e){
        res.status(400).send("Error Server :", e)
    }

})





export default router_post 