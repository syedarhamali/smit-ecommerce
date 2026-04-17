import { createContext, useContext, useState } from "react";

const AuthContext = createContext({})


function AuthContextProvider({children}) {
    const [user, setUser] = useState({})

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const authContext = () => useContext(AuthContext)

export {
    authContext,
    AuthContextProvider
}