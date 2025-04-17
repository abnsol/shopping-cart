import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);
    const [token, setToken] = useState("")

    const loginAuth = async ( data ) => {
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((res) => res.json());
            console.log("response", response)

            if (response && response.accessToken) {
                setAuthenticated(true);
                setToken(response.accessToken)
                navigate("/");
                console.log(authenticated)
            } else {
                console.error("Login failed");
            }
        }catch (error) {
            console.error("Error during login:", error);
        }
    }
    
    const logoutAuth = () => {
        setAuthenticated(false);
        setToken("")
        navigate("/");
    }

    return (
        <AuthContext.Provider value = {{ authenticated, token, loginAuth, logoutAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;