export function corsController(server){
     server.use((req,res,next)=>{
        //ajoute un header a la reponse du serveur 
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        if (req.method === "OPTIONS") {
        return res.sendStatus(200); // <- répond au preflight
    }
        next()
    })  
}

