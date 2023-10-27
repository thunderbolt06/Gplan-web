import React, { useEffect } from 'react';
// import axiosInstance from '../axiosInstance';
import axios from 'axios'
import Dashboard from "./DashBoard";

function Login() {
    useEffect(() => {
        axios.post('http://139.59.1.248/backend/auth/token/', {
            "username": "bhavy",
            "password": "Bhavy@goel17"
        }).then((resp) => {
            localStorage.setItem('access_token', resp.data.access);
            localStorage.setItem('refresh_token', resp.data.refresh);
            // console.log(resp);
        })
    }, [])

    return (
        <Dashboard/>
    );
};

export default Login;