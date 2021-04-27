import React, { useContext, useEffect } from 'react';


import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/auth/AuthContext';

const RoutePrivate = ({ component: Component, ...props }) => {


    const authContext = useContext(AuthContext);

    const { auth, loading ,userAuth } = authContext;

    useEffect(() => {
       userAuth();
    }, [])

    return (
        <Route
            {...props}
            render={props => !auth && !loading ?
                (<Redirect to="/" />) :
                (<Component {...props} />)}
        />
    );

}

export default RoutePrivate;