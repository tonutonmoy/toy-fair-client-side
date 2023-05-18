
 import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useState } from "react";




const auth = getAuth(app);

 
export const AuthProvider= createContext(null);


const Provider = ({children}) => {

    const [user,setUser]=useState(null)


const  googleProvider= new  GoogleAuthProvider(); 


const createAccount=(email,password)=>{

  return  createUserWithEmailAndPassword(auth,email,password)
};


const login=(email,password)=>{

    return signInWithEmailAndPassword(auth,email,password) 
};



const googleLogIn=()=>{

  return  signInWithPopup(auth,googleProvider)
};


const logOut=()=>{

   return signOut(auth)
};


const info={
    createAccount,
    login,
    googleLogIn,
    logOut,
    user


   }
    return (
       <AuthProvider.Provider value={info}>

        {children}
        
       </AuthProvider.Provider>
    );
};

export default Provider;