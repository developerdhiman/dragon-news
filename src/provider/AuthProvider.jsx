import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const Auth = getAuth(app);
    
const AuthProvider = ({ children }) => {
    //all-state
    const [user,setUser] = useState(null);
    //create-user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    };

    //signIn-User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
    };

    //signOut-user
    const signOutUser = () => {
        return signOut(Auth);
    }
  const authInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    signOutUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
