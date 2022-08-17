import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';


const auth=getAuth(app)


const LogIn = () => {
    // const{signInWithGoogle}=useFirebase()
    
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    
    
    return (
        <div>
            <h1>Please log in</h1>
            <div style={{margin:'20px'}}>
            <button onClick={()=>signInWithGoogle()}>Google Sign In</button>
            </div>
           

            <form >

                <input type="text" placeholder='Your name'  />
                <br />
                <input type="email" placeholder=' Your email'/>
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="login" />
            </form>
            
        </div>
    );
};

export default LogIn;