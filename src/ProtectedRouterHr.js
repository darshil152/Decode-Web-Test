import React, { Component } from 'react'
import { useSelector } from "react-redux"
import { useEffect } from 'react';
import { Navigate, useLocation } from "react-router-dom"
import { Context } from './contexts/HeaderContext';




const ProtectedRouteHr = ({ children }) => {





    let location = useLocation();

    return (
        <Context.Consumer>
            {value => <>
                {value.state.userRole == 3 ? children : <Navigate to="/" state={{ from: location }} replace />}</>}
        </Context.Consumer>)
    // }
    // return children

};

export default ProtectedRouteHr;