import { useEffect } from "react";
import Login from "./Login";
import Title from "./Title"
import isTokenValid from "../functions/isTokenValid"
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";



export default function HomePage() {
    const { isAuthenticated, login, } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token && isTokenValid(token)) {
            login()
            navigate("/feed"); // si token valide → redirige direct
        } else {
            localStorage.removeItem("token"); // sinon on nettoie
        }
    }, []);

    return (
        <>
            <Login />
        </>
    )
}