import { createContext } from "react";


const AuthContext = createContext(null)
const AuthProvider = () => {
    return (
        <AuthContext.Provider value={'naim'}>

        </AuthContext.Provider>
    );
};

export default AuthProvider;