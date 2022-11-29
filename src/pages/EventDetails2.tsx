import * as React from 'react';

import { useAuth } from '../services/MiddleWare/AuthProvider';
import { Navigate, Outlet } from "react-router-dom";

export default function EventDetails2() {
    // const {user} = useAuth();

    // if(!user){
    //     return <Navigate to="/login"/>
    // }

    return(
        <main>
            test2
        </main>
    )
}