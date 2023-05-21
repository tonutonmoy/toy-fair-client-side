
 import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";




 const auth = getAuth(app);
 
  
 export const AuthProvider= createContext(null);
 
 
 const Provider = ({children}) => {

 
     const [user,setUser]=useState(null);

     const [loader,setLoader]=useState(true)
 
 
 const  googleProvider= new  GoogleAuthProvider(); 
 
 



 const createAccount=(email,password)=>{
     
     setLoader(true);
 
   return  createUserWithEmailAndPassword(auth,email,password)
 };
 





 
 const login=(email,password)=>{
     
            
        setLoader(true);

        return signInWithEmailAndPassword(auth,email,password) 
 };
 
 




 
 const googleLogIn=()=>{
 
   setLoader(true);

   return  signInWithPopup(auth,googleProvider)
 };
 



 
 useEffect(()=>{
  
  const unsubscribe= onAuthStateChanged(auth,(res)=>{
 
     console.log(res)

     setLoader(false);

     setUser(res);


   })

   return ()=>{

      return unsubscribe()
   }
 
 },[]);
 




 const logOut=()=>{
      
     setLoader(true);
     
    return signOut(auth)
 };
 
 




 const info={
     createAccount,
     login,
     googleLogIn,
     logOut,
     user,
     loader
 
 
    }
     return (
        <AuthProvider.Provider value={info}>
 
         {children}
         
        </AuthProvider.Provider>
     );
 };
 
 export default Provider;