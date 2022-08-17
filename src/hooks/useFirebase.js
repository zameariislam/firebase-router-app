import {useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
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


        console.log('signing in soon')
    }

    // return [user,setUser,signInWithGoogle]
    return {user,setUser,signInWithGoogle}

 }
 export default useFirebase;