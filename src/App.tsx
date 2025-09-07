
import './App.css'
import Actuality from './components/Actuality'
import Post from './components/Post'
import './style/Post.css'
 

function App() {


  return (
    <>
       <Actuality/>  
       
     
       <Post url='https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?semt=ais_hybrid&w=740&q=80' description='hello word' likes={5} username='Aaron' time='07/09/2025' />
   
    </>
  )
}

export default App
