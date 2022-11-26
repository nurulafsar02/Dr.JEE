import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Naber from '../Pages/Shared/Navber/Naber';

const DashBoradLayout = () => {
    return (
        <div>
            <Naber></Naber>
            <div className="drawer drawer-mobile">
                <input id="dashboradDrwer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">

                    <label htmlFor="dashboradDrwer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link>Sidebar Item 1</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoradLayout;