import { createContext } from "react";

export const AuthContext = createContext(null);


const AuthProvider = () => {

    const authInfo = {
        name: 'money is power'
    };
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;