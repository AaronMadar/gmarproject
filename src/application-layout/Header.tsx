import logo from '../Assets/logo.jpeg'
import '../style/Header.css'

export default function Header(){


    return (
        <>
        <header className='header'>
            <img src={logo} alt="logo" className='logo' />
            <h1 className='slogan'>Together we will be more stronger !</h1>
        </header>
        </>
    )
}