import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //creating user with email & password
    const createUser = (email,password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password)
    }

    //updating user name
    const updateUser = (name)=> {
        setLoading(true);
       return updateProfile(auth.currentUser,{
        displayName: name
       })
    }

    //social(GOOGLE) login
    const signUpWithGoogle = (provider)=>{
        setLoading(true);

        return signInWithPopup(auth, provider)
      }

    
    const logIn = (email,password) =>{
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);
      }
  
      const logOut = () =>{
        setLoading(true);

        return signOut(auth);
    }
        useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo ={user, loading,createUser,updateUser,signUpWithGoogle,logIn,logOut}

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;