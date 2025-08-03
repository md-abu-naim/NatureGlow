import { BsBan, BsTruck } from "react-icons/bs";
import { FaMoneyBillWave, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import { FiRefreshCw, FiTrendingUp } from "react-icons/fi";
import { LuPackagePlus } from "react-icons/lu";
import { useLoaderData } from "react-router-dom";

const UserDashboard = () => {
    const orders = useLoaderData()

    const date = new Date().toLocaleDateString()

    const dailyOrders = orders?.filter(o => o.date === date)
    const totalSpent = orders?.reduce((acc, sum) => acc + sum.totalPrice, 0)
    const dailySpent = dailyOrders?.reduce((acc, sum) => acc + sum.totalPrice, 0)
    const totalDelivered = orders?.filter(order => order.orderStatus === "Delivered")?.length
    const totalInProgresss = orders?.filter(order => order.orderStatus === "Cancelled")?.length
    const totalCancelled = orders?.filter(order => order.orderStatus === "Cancelled")?.length
    
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 p-4">
                {/* Total Orders */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaShoppingCart className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Orders</p>
                        <h3 className="text-2xl font-semibold text-green-800">{orders?.length}</h3>
                    </div>
                </div>
                {/* Daily Orders */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <LuPackagePlus className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Daily Orders</p>
                        <h3 className="text-2xl font-semibold text-green-800">{dailyOrders?.length}</h3>
                    </div>
                </div>
                {/* Total Spent */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaMoneyBillWave className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Spent</p>
                        <h3 className="text-2xl font-semibold text-green-800">${totalSpent}</h3>
                    </div>
                </div>
                {/* Daily Spent */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FiTrendingUp className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Daily Spent</p>
                        <h3 className="text-2xl font-semibold text-green-800">${dailySpent}</h3>
                    </div>
                </div>
                {/* Total Delivered */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <BsTruck className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Delivered</p>
                        <h3 className="text-2xl font-semibold text-green-800">{totalDelivered}</h3>
                    </div>
                </div>
                {/* Total In Progress */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FiRefreshCw className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total In Progress</p>
                        <h3 className="text-2xl font-semibold text-green-800">{totalCancelled}</h3>
                    </div>
                </div>
                {/* Total Shipped */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaShippingFast className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Shipped</p>
                        <h3 className="text-2xl font-semibold text-green-800">{totalCancelled}</h3>
                    </div>
                </div>
                {/* Total Cancelled */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <BsBan className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Cancelled</p>
                        <h3 className="text-2xl font-semibold text-green-800">{totalCancelled}</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserDashboard;