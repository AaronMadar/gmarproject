import {data} from "../allpost.js"
import Post from "./Post.tsx"
import '../style/Post.css'

export default function Actuality(){ 
    
    

    return (
        <section>
        { data.map(obj => (
            <Post url={obj.url}  description={obj.description} likes={obj.likes} username={obj.username} time={obj.time} />
            ))}
        </section>  
    )   
}