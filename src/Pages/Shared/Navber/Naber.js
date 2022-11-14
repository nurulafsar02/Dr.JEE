import React from 'react';
import { Link } from 'react-router-dom';

const Naber = () => {
    const manuItems = <React.Fragment>
        <li><Link className='rounded-lg' to="/">Home</Link></li>
        <li><Link className='rounded-lg' to="appointment">Appointment</Link></li>
        <li><Link className='rounded-lg' to="about">About</Link></li>
        <li><Link className='rounded-lg' to="review">Review</Link></li>
        <li><Link className='rounded-lg' to="contact">Contact Us</Link></li>
        <li><Link className='rounded-lg' to="login">Login</Link></li>
        <li><Link className='rounded-lg' to="singin">Singin</Link></li>
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {manuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><h1 className='text-3xl font-bold text-green-400'>DR.JEE</h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                  {manuItems}
                </ul>
            </div>
        </div>
    );
};

export default Naber;