import React from 'react';
import LoginForm from '../pages/Login/LoginForm';
import { Container } from 'react-bootstrap';
import TopNav from '../pages/Shared/TopNav/TopNav';

const Login = () => {
    return (
        <>
            <TopNav/>
            <LoginForm/>
        </>
    );
};

export default Login;