import React,{useContext,useState,useEffect} from "react"
import { auth } from "../Firebase/firebase"
import {onAuthStateChanged} from "firebase/auth"

const EAuthContext = React.createContext()
export const useAuth =()=>{
    return (useContext(EAuthContext))
}
export const EtrackerAuth =({children}) =>{
    const [isloggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const subscription = onAuthStateChanged(auth,initializeUser)
        return subscription;
    },[])
    function initializeUser(user) {
        if(user){
            setCurrentUser({...user});
            setIsLoggedIn(true)
        }else{
            setCurrentUser(null)
            setIsLoggedIn(false)
        }
        setLoading(false)
    }
    const values = {
        isloggedIn,
        currentUser,
        loading
    }
    return(
        <EAuthContext.Provider value={values}>
            {children}
        </EAuthContext.Provider>
    )
}