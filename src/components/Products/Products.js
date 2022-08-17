import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const{user}=useFirebase();

    return (
        <div>
            <h1>Products are here</h1>
            <p>{user? user.displayName:'No body'}</p>
            
        </div>
    );
};

export default Products;