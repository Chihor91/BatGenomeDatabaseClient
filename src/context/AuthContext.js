import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    

    let [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null)
    let [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)
    let [loading, setLoading] = useState(true)
    
    const history = useHistory()

    let updateToken = async () => {
        let api = axios.create({ 
            baseURL: axios.defaults.baseURL + "user/login/refresh/", 
            headers: {
                "Content-Type": "application/json",
            },
        });
        api.post("/", {
            'refresh':authTokens.refresh,
        }).then((response) => {
            if(response.status === 200){
                let tokens = {
                    access: response.data.access,
                    refresh: response.data.refresh
                }
                setAuthTokens(tokens)
                localStorage.setItem('authTokens', JSON.stringify(tokens))
            }else{
                logoutUser()
            }

            if(loading){
                setLoading(false)
            }
        })
    }
    
    let loginUser = async (e) => {
        e.preventDefault()
        let api = axios.create({ baseURL: axios.defaults.baseURL + "user/login/", });
        let fd = new FormData();
        fd.append("username", e.target.username.value);
        fd.append("password", e.target.password.value);

        api.post("/", fd).then((response) => {
            if(response.status === 200){
                let tokens = {
                    access: response.data.access,
                    refresh: response.data.refresh
                }
                setAuthTokens(tokens)
                setUser(response.data.user)
                localStorage.setItem('authTokens', JSON.stringify(tokens))
                localStorage.setItem('user', JSON.stringify(response.data.user))
                history.push("/")
            }else{
                alert("An error has occurred")
            }
        })
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        localStorage.removeItem('user')
        history.push("/login")
    }
    
    let contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    useEffect(() => {
        if(loading){
            updateToken()
        }

        let fourMinutes = 40000 * 6
        let interval = setInterval(() => {
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}