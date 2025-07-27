import { FaBoxOpen, FaLocationArrow, FaShoppingCart, FaTachometerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserRoutes = () => {
    return (
        <div>
            <NavLink to='/dashboard' className={({isActive}) => `flex items-center gap-2 p-2 hover:bg-green-500 rounded transition-colors duration-300 transform ${isActive && 'bg-green-700 text-white hover:text-black'}`}><FaTachometerAlt /> Dashboard</NavLink>
            {/* <NavLink to='/dashboard/products' className={({isActive}) => `flex items-center gap-2 p-2 hover:bg-green-500 rounded transition-colors duration-300 transform ${isActive && 'bg-green-700 text-white hover:text-black'}`}><FaBoxOpen /> Products</NavLink> */}
            <NavLink to='/dashboard/orders' className={({isActive}) => `flex items-center gap-2 p-2 hover:bg-green-500 rounded transition-colors duration-300 transform ${isActive && 'bg-green-700 text-white hover:text-black'}`}><FaShoppingCart /> Orders</NavLink>
            <NavLink to='/dashboard/addressBook' className={({isActive}) => `flex items-center gap-2 p-2 hover:bg-green-500 rounded transition-colors duration-300 transform ${isActive && 'bg-green-700 text-white hover:text-black'}`}><FaLocationArrow />Address Book</NavLink>
        </div>
    );
};

export default UserRoutes;