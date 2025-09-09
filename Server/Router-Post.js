// ce router s'occupe de gerer les demandes crud liees aux post des utilisateurs
import express from 'express'
import fs from "fs"



const router_post = express.Router()

router_post.get("/get-all-post" , (req,res)=>{
          
    const filePath = './src/Assets/Data/data.json'
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log("Error reading JSON file :", err);
      return res.status(500).send('Server error while loading data');
    }

    try {
      const jsonData = JSON.parse(data); // Convertir la chaîne en objet JavaScript
      res.send(jsonData); // Envoyer l'objet JSON. Express définit l'en-tête Content-Type: application/json.
    } catch (e) {
      console.error("Erreur Server :", e);
      return res.status(500).send('Eror server');
    }
  });

      
       
       
      
    

})





export default router_post 