import React, { useContext } from 'react';
import { AuthProvider } from '../Provider/Provider';

const PrivateRoute = ({children}) => {

    const {user}=useContext(AuthProvider)

    if(!user){
        return <div>loading...</div>
    }
    if(user){
        return children 
    }
      

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;