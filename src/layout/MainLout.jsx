import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLout = () => {
    return (
        <div>
            <div>
                <Nav/>
            </div>
            <div className='min-h-[calc(100vh-224px)] mx-10 py-20'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLout;