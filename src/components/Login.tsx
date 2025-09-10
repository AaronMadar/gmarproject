import { useNavigate } from 'react-router-dom'
import '../style/Login.css'
import Title from './Title'
import { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Actuality from './Actuality'




export default function Login() {

    const { isAuthenticated, login, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function HandleClick(e) {
        e.preventDefault()
        const userdetails = { username, password };
        const response = await fetch("http://localhost:3001/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userdetails),
        });
        if (!response.ok) {
            return <div className='error'>`${response.success} , ${response.response}`</div>
        }
        localStorage.setItem("token", response.token)
        login()
        return <Actuality />

    }


    return (
        <>
            <Title text={"Stay connected with Linkod"} />
            <h2 className="titlelogin">Login</h2>
            <section className='sectionlogin'>
                <form onSubmit={HandleClick} className="formlogin">
                    <input type="text" placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)} value={username} />
                    <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    <div className='divbtn'>
                        <button type="submit" className="btnaction">Login</button>
                        <button className='btnsub' onClick={() => navigate('/Subscribe')}>--subscribe</button>
                    </div>

                </form>
            </section>

        </>
    )
}