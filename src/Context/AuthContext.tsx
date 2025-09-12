import { createContext, useState } from "react";


export const AuthContext = createContext({}as {
    isAuthenticated:any ,login :any,logout:any
});



export default function AuthProvider({children} : {children: any}){

//  check if connected or by input or by token   
const [isAuthenticated, setIsAuthenticated]= useState(false)

const login = ()=> setIsAuthenticated(true);

const logout = ()=> setIsAuthenticated(false);





return (

    <AuthContext.Provider value={{isAuthenticated ,login ,logout}}>
        {children}
    </AuthContext.Provider>
)

}   

