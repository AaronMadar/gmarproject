import logo from '../Assets/logo.jpeg'
import logologin from '../Assets/login.png'
import logologout from '../Assets/logout.png'
import { useNavigate } from 'react-router-dom'
import '../style/Header.css'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'



export default function Header() {

    const { isAuthenticated, login, logout } = useContext(AuthContext)

    const navigate = useNavigate()

    return (
        <>
            <header className='header'>
                <section className='sectionlogoslogan'>
                    <img src={logo} alt="logo" className='logo' onClick={() => navigate('/feed')} />
                    <h1 className='slogan'>Together we will be more stronger !</h1>
                </section>

                <section className='sectionloginlogout'>
                    <img src={logologin} alt="loginlogo" className='logologin' onClick={() => navigate('/Login')} />
                    <img src={logologout} alt="logologout" className='logologout' onClick={() => {
                        logout()
                        navigate("/")
                    }
                    } />
                </section>
            </header>
        </>
    )
}