import { AiOutlineEye } from "react-icons/ai";
import { BsBan, BsTruck } from "react-icons/bs";
import { FaMoneyBillWave, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import { FiRefreshCw, FiTrendingUp } from "react-icons/fi";
import { LuPackagePlus } from "react-icons/lu";
import { NavLink, useLoaderData } from "react-router-dom";

const UserDashboard = () => {
    const orders = useLoaderData()

    const date = new Date().toLocaleDateString()

    const dailyOrders = orders?.filter(o => o.date === date)
    const totalSpent = orders?.reduce((acc, sum) => acc + sum.totalPrice, 0)
    const dailySpent = dailyOrders?.reduce((acc, sum) => acc + sum.totalPrice, 0)
    const totalDelivered = orders?.filter(order => order.orderStatus === "Delivered")?.length
    const totalInProgresss = orders?.filter(order => order.orderStatus === "In Progress")?.length
    const totalSipped = orders?.filter(order => order.orderStatus === "Shipped")?.length
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
                        <h3 className="text-2xl font-semibold text-green-800">{totalInProgresss}</h3>
                    </div>
                </div>
                {/* Total Shipped */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaShippingFast className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Shipped</p>
                        <h3 className="text-2xl font-semibold text-green-800">{totalSipped}</h3>
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




            {/* This Week's Orders List */}
            <section className="mt-7 overflow-x-auto rounded-lg shadow-lg border border-green-300">
                <div className="bg-green-100 border-b flex justify-between items-center px-3 py-2 border-green-300">
                    <h1 className="text-lg font-bold text-green-800">This Week's Orders List</h1>
                    <NavLink to="/shop" className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-lg transition">Shop Now</NavLink>
                </div>
                <table className="min-w-full text-sm text-left table-auto">
                    <thead className="bg-green-100 text-green-800 font-semibold">
                        <tr>
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Order ID</th>
                            <th className="py-3 px-4">Products</th>
                            <th className="py-3 px-4">Payment Status</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">Order Status</th>
                            <th className="py-3 px-4">Total Price</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 divide-y divide-green-100">
                        {
                            dailyOrders?.map((order, i) => (
                                <tr key={i} className="hover:bg-green-100 transition-all">
                                    <td className="px-4 py-3 font-semibold">{i + 1}</td>
                                    <td className="px-4 py-3 font-medium">{order._id}</td>
                                    <td className="px-4 py-3 ">{order.products?.length} Items</td>
                                    <td className="px-4 py-3 font-semibold">
                                        <span className={`px-2 py-1 rounded text-sm font-medium shadow-sm ${order.paymentStatus === 'Paid' ? 'bg-green-100 text-green-700' : order.paymentStatus === 'Unpaid' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                                            {order.paymentStatus}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 font-sans font-semibold"> {order.date}</td>
                                    <td className="px-4 py-3 font-semibold">
                                        <span className={`px-2 py-1 rounded text-sm font-medium shadow-sm
                                            ${order.orderStatus === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                                                order.orderStatus === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                                                    order.orderStatus === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                            }`}>
                                            {order.orderStatus}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 font-sans">$ {order.totalPrice + 1}</td>
                                    <td className="px-6 py-4 flex items-center justify-center gap-4 text-green-600">
                                        <NavLink to={`/dashboard/order-details/${order._id}`} title="View"><AiOutlineEye className="hover:text-green-800 transition text-2xl" /></NavLink>
                                        <button title="Cancel Order" className="bg-red-100 hover:bg-red-300 text-red-700 px-2 py-1 rounded-sm transition">Cancel</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default UserDashboard;