import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <button className="btn btn-square loading"></button>
    }

    //showing category/:id page if user is logged in
    if(user){
        return children;
    }

    //redirecting to login page if user not found
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;