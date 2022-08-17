import React from 'react';
import useFirebase from '../../hooks/useFirebase';


const LogIn = () => {
    const{signInWithGoogle}=useFirebase()
    
    
    return (
        <div>
            <h1>Please log in</h1>
            <div style={{margin:'20px'}}>
            <button onClick={signInWithGoogle}>Google Sogn In</button>
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