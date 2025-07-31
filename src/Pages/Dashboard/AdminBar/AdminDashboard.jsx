
import { FaUsers, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";

const AdminDashboard = () => {
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
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
                        <FaUsers className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Daily Users</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {/* Total Users */}
                <div className="bg-white border border-green-300 rounded-2xl shadow-sm hover:shadow-md transition-all p-5 flex items-center gap-4">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full shadow-inner">
                        <FaUsers className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Users</p>
                        <h3 className="text-2xl font-semibold text-green-800">1,280</h3>
                    </div>
                </div>

                {/* Total Orders */}
                <div className="bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-5 flex items-center gap-4">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full shadow-inner">
                        <FaShoppingCart className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Orders</p>
                        <h3 className="text-2xl font-semibold text-green-800">942</h3>
                    </div>
                </div>

                {/* Total Earnings */}
                <div className="bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-5 flex items-center gap-4">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full shadow-inner">
                        <FaMoneyBillWave className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Earnings</p>
                        <h3 className="text-2xl font-semibold text-green-800">৳152,350</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;