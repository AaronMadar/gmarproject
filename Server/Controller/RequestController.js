export function requestController(obj,res){

    if (!obj.username || !obj.password){
        res.status(400).send({success:false,response:'Invalid Field'})
        return
    }

}