import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div className='bg-white text-black font-serif'>
            <Navber />

            <Outlet />

            <Footer />
        </div>
    );
};

export default Layout;