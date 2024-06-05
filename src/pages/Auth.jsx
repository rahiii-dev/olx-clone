import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderBlank from '../components/HeaderBlank';

const Auth = () => {
    return (
        <>
            <HeaderBlank />
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default Auth;
