import React, { Component } from 'react'
import { useSelector } from "react-redux"
import { useEffect } from 'react';
import { Navigate, useLocation } from "react-router-dom"
import { Context } from './contexts/HeaderContext';




const ProtectedRouteStudent = ({ children }) => {





    let location = useLocation();
    // if (Number(localStorage.getItem('userrole')) == 0) {
    // 
    return (
        <Context.Consumer>
            {value => <>

                {value.state.userRole == 0 ? <Navigate to="/" state={{ from: location }} replace /> : children}</>}
        </Context.Consumer>)
    // }
    // return children

};

export default ProtectedRouteStudent;