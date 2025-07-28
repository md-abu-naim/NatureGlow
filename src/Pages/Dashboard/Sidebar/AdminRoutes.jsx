import { FaBoxOpen, FaMoneyBillAlt, FaPlus, FaShoppingCart, FaStar, FaTachometerAlt, FaUsers } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const AdminRoutes = () => {
    return (
        <div>
            <NavLink to='/dashboard' className={({ isActive }) => `flex items-center gap-2 p-2 hover:bg-green-500 rounded transition-colors duration-300 transform ${isActive && 'bg-green-700 text-white hover:text-black'}`}><FaTachometerAlt /> Dashboard</NavLink>
            <NavLink to='/dashboard/products' className={({ isActive }) => `flex items-center gap-2 p-2 hover:bg-green-500 rounded transition-colors duration-300 transform ${isActive && 'bg-green-700 text-white hover:text-black'}`}><FaBoxOpen /> Products</NavLink>
            <NavLink to='/dashboard/addProduct' className={({ isActive }) => `flex items-center gap-2 p-2 hover:bg-green-500 rounded transition-colors duration-300 transform ${isActive && 'bg-green-700 text-white hover:text-black'}`}><FaPlus /> Add Product</NavLink>
            <NavLink to='/dashboard/admin-orders' className={({ isActive }) => `flex items-center gap-2 p-2 hover:bg-green-500 rounded transition-colors duration-300 transform ${isActive && 'bg-green-700 text-white hover:text-black'}`}><FaShoppingCart /> Orders</NavLink>
            <NavLink to='/dashboard/users' className={({ isActive }) => `flex items-center gap-2 p-2 hover:bg-green-500 rounded transition-colors duration-300 transform ${isActive && 'bg-green-700 text-white hover:text-black'}`}><FaUsers /> Users</NavLink>
            <NavLink to='/dashboard/reviews' className={({ isActive }) => `flex items-center gap-2 p-2 hover:bg-green-500 rounded transition-colors duration-300 transform ${isActive && 'bg-green-700 text-white hover:text-black'}`}><FaStar /> Reviews</NavLink>
            <NavLink to='/dashboard/payments' className={({ isActive }) => `flex items-center gap-2 p-2 hover:bg-green-500 rounded transition-colors duration-300 transform ${isActive && 'bg-green-700 text-white hover:text-black'}`}><FaMoneyBillAlt /> Payments</NavLink>
        </div>
    );
};

export default AdminRoutes;