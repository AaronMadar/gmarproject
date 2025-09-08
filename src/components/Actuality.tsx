import data from "../Assets/Data/data.json"
import Post from "./Post.tsx"
import '../style/Post.css'

export default function Actuality(){  
    
    const dataJs = data


    return (
        <section>
        { dataJs.map(obj => (
            <Post key={obj.id} url={obj.url}  description={obj.description} likes={obj.likes} 
            username={obj.username} time={obj.time} />
            ))}
        </section>  
    )   
}