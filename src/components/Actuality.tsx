import Post from "./Post.tsx"
import '../style/Post.css'
import { useEffect, useState, useContext } from "react";
import AddPost from "./AddPost.tsx";
import { AuthContext } from '../Context/AuthContext'
import HomePage from "./HomePage.tsx";

export default function Actuality() {
  const { isAuthenticated } = useContext(AuthContext);
  const [arrayPost, setArrayPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) return; // seulement si loggé
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/post/get-all-post');
        const data = await response.json();
        setArrayPost(data);
      } catch (error) {
        console.error('Error Request:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <HomePage />;
  }

  if (loading) {
    return <div>Loading Data...</div>;
  }

  return (
    <section className="actuality">
      <AddPost />
      {arrayPost.map(obj => (
        <Post
          key={obj.id}
          url={obj.url}
          description={obj.description}
          likes={obj.likes}
          username={obj.username}
          time={obj.time}
        />
      ))}
    </section>
  );
}
