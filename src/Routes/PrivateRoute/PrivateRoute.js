import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <progress className="lg:mx-[500px] m-32 lg:my-[250px] progress w-56"></progress>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate
            to='/login'
            state={{ from: location }} replace>

        </Navigate>
    );
};

export default PrivateRoute;