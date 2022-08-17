import React from 'react';
import { Link } from "react-router-dom";
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const{user,handleSignOut}=useFirebase()
    console.log(user)
    return (

        <div className='header'>
             <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/register'>Register</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
                user?.uid? <button onClick={handleSignOut}>Sign out</button>: <Link to='/login'>Log In</Link>
            }
           

            
        </nav>
        </div>
       
    );
};

export default Header;