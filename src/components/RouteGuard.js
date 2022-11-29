import React, { Component } from "react";
import { Navigate, Route} from 'react-router-dom';

const RouteGuard = ({ component, ...rest}) => {

    function hasJWT() {
        let flag = false;

        //check user has JWT token
        localStorage.getItem("token") ? flag=true : flag=false

        return flag
    }

    return (
        <Route {...rest}
        render={props => (
            hasJWT() ?
            <Component {... props} />

            :

            <Navigate to = {{ pathname: '/login' }} />
        )}
        />
    );
};

export default RouteGuard;