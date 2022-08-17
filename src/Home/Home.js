import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Home = () => {

    const {user}=useFirebase()
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