import React from 'react';
import { Routes,Route } from 'react-router';
import Main from '../pages/Main';
import { ProtectedRoute } from './ProtectedRoute';
import Login from '../pages/Login';

function AllRoutes(props) {
    let isLoggedIn=true;
    return (
        <Routes>
            <Route index path={`/login`} element={<Login/>} />
            {/* <Route index path={`/login`} element={<Login/>} /> */}
            <Route
          path={`/`}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Main/>
            </ProtectedRoute>
          }
        />
        </Routes>
    );
}

export default AllRoutes;