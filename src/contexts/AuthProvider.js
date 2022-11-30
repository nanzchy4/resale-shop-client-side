import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (name)=> {
       return updateProfile(auth.currentUser,{
        displayName: name
       })
    }

    const signUpWithGoogle = (provider)=>{
        return signInWithPopup(auth, provider)
      }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
      }
  
      const logOut = () =>{
        return signOut(auth);
    }
        useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo ={user, loading,createUser,updateUser,signUpWithGoogle,logIn}

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;