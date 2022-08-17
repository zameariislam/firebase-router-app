import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../firebase.init';
// import useFirebase from '../hooks/useFirebase';


const auth=getAuth(app)


const Home = () => {
    const[user]=useAuthState(auth)

    // const {user}=useFirebase()
    console.log(user)
    return (
        <div>
            <h1>This is home</h1>
            <p>{user?.displayName && user.displayName}</p>
            <p>{user? user.displayName:'No body'}</p>
            
        </div>
    );
};

export default Home;