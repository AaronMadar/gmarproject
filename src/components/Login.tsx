import { useNavigate } from 'react-router-dom'
import '../style/Login.css'
import Title from './Title'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'





export default function Login() {

    const { login, isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

     useEffect(() => {
        if (isAuthenticated) {
            navigate("/feed")
        }
    }, [isAuthenticated, navigate])


    async function HandleClick(e) {
        e.preventDefault()
        const userdetails = { username, password };

        try {

            const response = await fetch("http://localhost:3001/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userdetails),
            });
            let data = await response.json()
            if (!data.success) {
                setError('Login Failed')
            }
            localStorage.setItem("token", data.token)
            login()
            navigate("/feed")

        }
       catch{
        console.log('Error network');
        setError('Error network')
        
       }

    }


    return (
        <>
            <Title text={"Stay connected with Linkod"} />
            <h2 className="titlelogin">Login</h2>
            <section className='sectionlogin'>
                <form onSubmit={HandleClick} className="formlogin">
                    <input type="text" placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)} value={username} />
                    <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    {error && <div className='error'>{error}</div>}
                    <div className='divbtn'>
                        <button type="submit" className="btnaction">Login</button>
                        <button className='btnsub' onClick={() => navigate('/Subscribe')}>--subscribe</button>
                    </div>

                </form>
            </section>

        </> 
    )
}