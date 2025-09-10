import { useNavigate } from 'react-router-dom'
import '../style/Login.css'


export default function Login(){

    const navigate = useNavigate()
    return (
        <>
        <h2 className="titlelogin">Login</h2>
        <section className='sectionlogin'>
        <form onSubmit={()=>{}} className="formlogin">
        <input type="text" placeholder='Enter your username' />
        <input type="password" placeholder='Enter your password'/>
        <div className='divbtn'>
        <button type="submit" className="btnaction">Login</button>
        <button className='btnsub' onClick={()=>navigate('/Subscribe')}>--subscribe</button> 
        </div>
           
        </form>  
        </section>
             
        </>
    )
}