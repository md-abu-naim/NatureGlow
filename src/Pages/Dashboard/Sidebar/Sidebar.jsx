// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaTachometerAlt, FaBoxOpen, FaPlus, FaShoppingCart, FaUsers, FaStar, FaMoneyBillAlt, FaUser, FaSignOutAlt, FaBars } from 'react-icons/fa';

// export default function AdminSidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   return (
//     <div className="flex">
//       {/* Sidebar toggle button for mobile */}
//       <button
//         onClick={toggleSidebar}
//         className="md:hidden p-3 text-green-600 focus:outline-none fixed z-50 top-4 left-4 bg-white shadow rounded-md"
//       >
//         <FaBars size={20} />
//       </button>

//       {/* Sidebar */}
//   <aside
//     className={`bg-green-100 text-black w-64 min-h-screen shadow-xl p-4 pt-6 fixed top-0 left-0 z-40 transition-transform duration-300 ease-in-out
//       ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
//   >
//     <h2 className="text-2xl font-bold bg-green-500 text-green-600 mb-6 pl-2">Dashboard</h2>

// <nav className="flex flex-col gap-2">
//   <Link to="/admin/dashboard" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
//     <FaTachometerAlt /> Dashboard
//   </Link>
//   <Link to="/admin/products" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
//     <FaBoxOpen /> Products
//   </Link>
//   <Link to="/admin/products/add" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
//     <FaPlus /> Add Product
//   </Link>
//   <Link to="/admin/orders" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
//     <FaShoppingCart /> Orders
//   </Link>
//   <Link to="/admin/users" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
//     <FaUsers /> Users
//   </Link>
//   <Link to="/admin/reviews" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
//     <FaStar /> Reviews
//   </Link>
//   <Link to="/admin/payments" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
//     <FaMoneyBillAlt /> Payments
//   </Link>
// </nav>

//     <div className="mt-auto pt-6 border-t border-gray-200">
//       <Link to="/admin/profile" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
//         <FaUser /> Profile
//       </Link>
//       <button className="flex items-center gap-2 p-2 hover:bg-red-100 rounded text-red-600 w-full">
//         <FaSignOutAlt /> Logout
//       </button>
//     </div>
//   </aside>

//       {/* Overlay for mobile when sidebar is open */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-30"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* Page content placeholder */}
//       <div className="ml-0 md:ml-64 w-full">
//         {/* Your page content will go here */}
//         page content
//       </div>
//     </div>
//   );
// }


import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'
import { FaBars, FaBoxOpen, FaMoneyBillAlt, FaPlus, FaShoppingCart, FaStar, FaTachometerAlt, FaUsers } from 'react-icons/fa'
const Sideber = () => {
    const [isActive, setActive] = useState(false)
    const { logOutUser } = useAuth()

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <div>
            {/* Small Screen Navber */}
            <div className='bg-green-50 text-green-800 flex justify-between md:hidden'>
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
            <div>
                
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden text-black bg-green-200 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                            <Link to='/' className='text-2xl font-bold text-black'>ScholarHub</Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <nav className="flex flex-col gap-2 ml-3 mt-3">
                        <Link to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
                            <FaTachometerAlt /> Dashboard
                        </Link>
                        <Link to="products" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
                            <FaBoxOpen /> Products
                        </Link>
                        <Link to="products/add" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
                            <FaPlus /> Add Product
                        </Link>
                        <Link to="orders" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
                            <FaShoppingCart /> Orders
                        </Link>
                        <Link to="users" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
                            <FaUsers /> Users
                        </Link>
                        <Link to="reviews" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
                            <FaStar /> Reviews
                        </Link>
                        <Link to="payments" className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
                            <FaMoneyBillAlt /> Payments
                        </Link>
                    </nav>
                </div>

                <div>
                    <hr />

                    {/* Profile Menu */}
                    <NavLink
                        to='/dashboard/profile'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                            }`
                        }
                    >
                        <FcSettings className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Profile</span>
                    </NavLink>
                    {/* logout */}
                    <button
                        onClick={logOutUser}
                        className='flex w-full items-center px-4 py-2 mt-5 text-black hover:text-white hover:bg-black transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sideber;
