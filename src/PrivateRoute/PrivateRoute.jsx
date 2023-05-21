import React, { useContext } from 'react';
import { AuthProvider } from '../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loader}=useContext(AuthProvider);

    const location= useLocation();

    if(loader){
        return <div>loading...</div>
    }
    if(user){
        return children 
    }
      
    return <Navigate  to="/login" state={{from: location}} replace ></Navigate>

  
};

export default PrivateRoute;