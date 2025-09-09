import Post from "./Post.tsx"
import '../style/Post.css'
import { useEffect, useState } from "react";



export default function Actuality(){  
   
  const [arrayPost, setArrayPost] = useState([]); 
  const [loading, setLoading] = useState(true); 

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/post/get-all-post'); 
        const data = await response.json(); 
        setArrayPost(data); 

      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      } finally {
        setLoading(false); // Indique que le chargement est terminé, qu'il y ait eu une erreur ou non
      }
    };

    fetchData(); // Appelle la fonction de récupération des données
  }, []);



    if (loading) {
    return <div>Loading Data...</div>; 
    
  }

    return (
        <section className="actuality">
        { arrayPost.map(obj => (
            <Post key={obj.id} url={obj.url}  description={obj.description} likes={obj.likes} 
            username={obj.username} time={obj.time} />
            ))}
        </section>  
    )   
}