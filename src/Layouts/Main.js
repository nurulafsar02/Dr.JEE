import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Naber from '../Pages/Shared/Navber/Naber';

const Main = () => {
    return (
        <div>
            <Naber></Naber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;