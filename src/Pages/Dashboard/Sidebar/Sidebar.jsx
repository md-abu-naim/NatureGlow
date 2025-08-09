import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'
import { FaBars } from 'react-icons/fa'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
const Sideber = () => {
    const [isActive, setActive] = useState(false)
    const { LogoutUser } = useAuth()

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    const handleLogout = () => {
        LogoutUser()
    };

    return (
        <div>
            {/* Small Screen Navber */}
            <div className='bg-green-200 text-green-800 flex justify-between lg:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to="/" className="text-3xl">
                            <img className='w-[180px] md:w-[250px]' src="/NatureGlowLogo.png" alt="NatureGlow Logo" />
                        </Link>
                    </div>
                </div>
                <button onClick={handleToggle} className='mobile-menu-button p-4 focus:outline-none active:bg-green-200'><FaBars className='h-5 w-5' /></button>
            </div>

            {/* Sidebar */}
            <aside className={`z-50 md:fixed flex flex-col justify-between overflow-x-hidden bg-green-200 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'} lg:translate-x-0 transition duration-200 ease-in-out`}>
                <div>
                    <div className='w-full md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto cursor-pointer p-4 font-bold'>
                        <Link to="/" className="text-3xl">
                            <img className='w-[180px] md:w-[250px]' src="/NatureGlowLogo.png" alt="NatureGlow Logo" />
                        </Link>
                    </div>
                    <nav className='flex flex-col gap-2 ml-3 mt-3'>
                        <AdminRoutes />
                        <UserRoutes />
                    </nav>
                </div>
                <div>
                    <hr />
                    <NavLink to='/dashboard/profile' className={({ isActive }) => `flex items-center gap-2 p-2 hover:bg-green-500 rounded transition-colors duration-300 transform ${isActive && 'bg-green-700 text-white hover:text-black'}`}>
                        <FcSettings className='w-5 h-5' /> <span className='font-medium'>Profile</span>
                    </NavLink>
                    <button onClick={handleLogout} className='flex w-full items-center p-2 hover:bg-green-500 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' /><span className='ml-2 font-medium'>Logout</span>
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default Sideber;
