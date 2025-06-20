import { FaCartPlus } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const Navber = () => {

    const navLinks = <>
        <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-3 border-green-500 font-bold p-2' : 'font-bold p-2'}>HOME</NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? 'border-b-3 border-green-500 font-bold p-2' : 'font-bold p-2'}>SHOP</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'border-b-3 border-green-500 font-bold p-2' : 'font-bold p-2'}>ABOUT US</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'border-b-3 border-green-500 font-bold p-2' : 'font-bold p-2'}>CONTACT US</NavLink>

    </>

    return (
        <div className="navbar px-10 bg-yellow-50 text-black shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <NavLink to="/" className="text-3xl"> <img className='w-[250px]' src="/NatureGlowLogo.png" alt="" /> </NavLink>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2 relative">
                <button className="text-2xl  hover:text-green-600 transition-colors"><VscAccount /></button>
                {/* <button className="bg-auto w-[50px] h-[50px] text-2xl"><FaCartPlus />
                    <div className="absolute  right-0 top-0">12</div>
                </button> */}
                <div className="relative">
                    <button className="text-2xl hover:text-green-600 transition-colors">
                        <FaCartPlus />
                    </button>
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                        12
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navber;


