
import { BsBan, BsTruck } from "react-icons/bs";
import { FaUsers, FaShoppingCart, FaMoneyBillWave, FaUser, FaUserPlus } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { LuPackagePlus } from "react-icons/lu";

const AdminDashboard = () => {
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 p-4">
                {/* Total Users */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaUsers className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Users</p>
                        <h3 className="text-2xl font-semibold text-green-800">1522</h3>
                    </div>
                </div>
                {/* Daily Users */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaUserPlus className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Daily Users</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
                {/* Total Orders */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaShoppingCart className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Orders</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
                {/* Daily Orders */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <LuPackagePlus className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Daily Orders</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
                {/* Total Eanrnings */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaMoneyBillWave className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Earnings</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
                {/* Daily Eanrnings */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FiTrendingUp className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Daily Earnings</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
                {/* Total Delivered */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <BsTruck className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Delivered</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
                {/* Total Cancelled */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <BsBan className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Cancelled</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
            </section>


            <section>
                
            </section>
        </div>
    );
};

export default AdminDashboard;