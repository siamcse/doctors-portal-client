import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const className = 'bg-accent text-md text-white rounded-md';

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    const menuItems = <React.Fragment>
        <li><NavLink className={({ isActive }) => isActive ? className : undefined} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? className : undefined} to='/about'>About</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? className : undefined} to='/appointment'>Appintment</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? className : undefined} to='/reviews'>Reviews</NavLink></li>

        {user?.uid ?
            <>
                <li><NavLink className={({ isActive }) => isActive ? className : undefined} to='/dashboard'>Dashboard</NavLink></li>
                <li><button onClick={handleLogOut}>Sign Out</button></li>
            </>
            :
            <li><NavLink className={({ isActive }) => isActive ? className : undefined} to='/login'>Login</NavLink></li>}
    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="lg:navbar-end navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden navbar-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;