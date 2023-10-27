import React from 'react';
import { Navigate } from 'react-router';
import Layout from '../Components/Layout/Layout';

export const ProtectedRoute=({
    isLoggedIn,
    children ,
    redirectPath="/login"
}) =>{

    if(!isLoggedIn)
    {
        return <Navigate to={redirectPath} replace={true}/>
    }
    return(
        <div>
            <Layout>
                {children}
            </Layout>
        </div>
    )
}