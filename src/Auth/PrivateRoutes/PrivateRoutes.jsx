import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate } from 'react-router';
import FullScreenLoader from '../../Loader/FullScreenLoader';



const PrivateRoutes = ({ children }) => {
    
    const { user, loading } = useAuth();
    
    if(loading) return <FullScreenLoader />
    
    if (user && user.email) {
        return children;
    } else {
        return <Navigate to='/' />
    }

};

export default PrivateRoutes;