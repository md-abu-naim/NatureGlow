import { FaCartPlus } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { NavLink, Link, useNavigate } from "react-router-dom";
import useAuth from "../Provider/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, LogoutUser } = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        LogoutUser()
        toast.success('Sign Out successfully')
                navigate('/signIn')
    };

    const navLinks = (
        <>
            <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-2 border-green-500 text-green-500 font-bold p-2' : 'font-bold p-2'}>HOME</NavLink>
            <NavLink to="/shop" className={({ isActive }) => isActive ? 'border-b-2 border-green-500 text-green-500 font-bold p-2' : 'font-bold p-2'}>SHOP</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'border-b-2 border-green-500 text-green-500 font-bold p-2' : 'font-bold p-2'}>ABOUT US</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'border-b-2 border-green-500 text-green-500 font-bold p-2' : 'font-bold p-2'}>CONTACT US</NavLink>
        </>
    );

    return (
        <div className="navbar px-4 md:px-10 bg-green-50 text-black shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="text-3xl">
                    <img className='w-[180px] md:w-[250px]' src="/NatureGlowLogo.png" alt="NatureGlow Logo" />
                </Link>
            </div>

            {/* Menu Links */}
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-2 items-center">
                {/* User Profile */}
                {user ? (
                    <div className="flex items-center gap-2">
                        <div className="hidden md:block text-sm text-green-700 font-medium">
                            {user.displayName || "User"}
                        </div>
                        <img src={user.photoURL || "/default-profile.png"} alt={user.displayName || "User Profile"} className="w-8 h-8 rounded-full border border-green-300" />
                        <button onClick={handleLogout} className="text-xs md:text-sm bg-red-100 hover:bg-red-200 text-red-600 px-2 py-1 rounded-xl transition">Log Out</button>
                    </div>
                ) : (
                    <NavLink to="/signIn" className="text-2xl hover:text-green-600 transition-colors"><VscAccount /></NavLink>
                )}

                {/* Cart Icon */}
                <NavLink to='/cart' className="relative">
                    <button className="text-2xl hover:text-green-600 transition-colors"><FaCartPlus /></button>
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">12</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
