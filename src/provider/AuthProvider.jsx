import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const Auth = getAuth(app);
const AuthProvider = ({ children }) => {
    //create-user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    };

    //signIn-User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
    };

  const authInfo = {
    createUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
