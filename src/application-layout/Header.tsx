import logo from '../Assets/logo.jpeg'
import logologin from '../Assets/login.png'
import logologout from '../Assets/logout.png'
import { useNavigate } from 'react-router-dom'
import '../style/Header.css'


export default function Header(){
   
    const navigate = useNavigate()

    return (
        <>
        <header className='header'>
            <section className='sectionlogoslogan'>
            <img src={logo} alt="logo" className='logo' onClick={()=>navigate('/feed')} />
            <h1 className='slogan'>Together we will be more stronger !</h1>
            </section>

            <section className='sectionloginlogout'>
                <img src={logologin} alt="loginlogo" className='logologin' />
                <img src={logologout} alt="logologout" className='logologout' onClick={()=> navigate("/")}/>
            </section>
        </header>
        </>
    )
}