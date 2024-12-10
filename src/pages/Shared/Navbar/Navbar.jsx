import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo/Study_sync-removebg-preview (1).png';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                console.log("Logged out successfully");
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };

    const navItems = (
        <>
            <li><Link to="/assignments">Assignments</Link></li>
            {user ? (
                <>
                    <li><Link to="/create-assignments">Create Assignments</Link></li>
                    <li><Link to="/pending-assignments">Pending Assignments</Link></li>
                </>
            ) : (
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost w-24">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className='navbar-end hidden lg:flex'>
                <button onClick={handleLogout} className="btn ">Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
