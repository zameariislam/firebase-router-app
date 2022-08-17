import {useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged,signOut } from "firebase/auth";
import app from "../firebase.init";

 const auth=getAuth(app)
const googleProvider = new GoogleAuthProvider();
 const useFirebase=()=>{

    const[user,setUser]=useState({})
    

    const signInWithGoogle=()=>{

        signInWithPopup(auth,googleProvider)
        .then((result)=>{
            const user=result.user;
            setUser(user)
            console.log(user)
        })
        .then((error)=>{
            console.log(error)
        })


     
    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch((error)=>{
            console.log('an error occured')
        })


    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user)
        })

    },[])
   

    // return [user,setUser,signInWithGoogle]
    return {user,setUser,signInWithGoogle,handleSignOut}

 }
 export default useFirebase;