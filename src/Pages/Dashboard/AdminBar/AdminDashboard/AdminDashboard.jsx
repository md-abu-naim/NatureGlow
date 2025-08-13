import { BsBan, BsTruck } from "react-icons/bs";
import { FaUsers, FaShoppingCart, FaMoneyBillWave, FaUserPlus, FaTrash, FaEdit } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { LuPackagePlus } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { StatusAreaChart, StatusComposedChart, StatusLineChart, StatusPieChart } from './Charts';
import { useEffect, useState } from "react";
import OrderUpdate from "../../Modals/OrderUpdate";
import { AiOutlineEye } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AdminDashboard = () => {
    const [usersData, setUsersData] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [orderData, setOrderData] = useState([])
    const axiosSecure = useAxiosSecure()
    const [orders, setOrders] = useState([])

    const date = new Date().toLocaleDateString()

    const dailyUsers = usersData?.filter(u => u.createdAt && u.lastLogin === date)?.length
    const dailyOrders = orders?.filter(o => o.date === date)
    const totalEarnings = orders?.reduce((acc, sum) => acc + sum.totalPrice, 0).toFixed(2)
    const dailyEarnings = dailyOrders?.reduce((acc, sum) => acc + sum.totalPrice, 0).toFixed(2)
    const totalDelivered = orders?.filter(order => order.orderStatus === "Delivered")?.length
    const totalCancelled = orders?.filter(order => order.orderStatus === "Cancelled")?.length

    const handleDeleteOrder = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            background: '#dcfce7',
            color: '#000000',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            buttonsStyling: false,
            customClass: {
                popup: 'rounded-lg shadow-lg',
                title: 'text-lg font-semibold text-yellow-400',
                htmlContainer: 'text-sm text-gray-300',
                confirmButton: 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2',
                cancelButton: 'bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/order/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                background: '#dcfce7',
                                timer: 2300
                            });
                            setOrders(prev => prev.filter(p => p._id !== id))
                        }
                    })
            }
        });

    }

    useEffect(() => {
        axiosSecure.get('/orders')
            .then(res => setOrders(res.data))

        axiosSecure.get('/users')
            .then(res => {
                setUsersData(res.data)
            })
    }, [axiosSecure])
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
                        <h3 className="text-2xl font-semibold text-green-800">{usersData?.length}</h3>
                    </div>
                </div>
                {/* Daily Users */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaUserPlus className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Daily Users</p>
                        <h3 className="text-2xl font-semibold text-green-800">{dailyUsers}</h3>
                    </div>
                </div>
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
                {/* Total Eanrnings */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaMoneyBillWave className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Earnings</p>
                        <h3 className="text-2xl font-semibold text-green-800">${totalEarnings}</h3>
                    </div>
                </div>
                {/* Daily Eanrnings */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FiTrendingUp className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Daily Earnings</p>
                        <h3 className="text-2xl font-semibold text-green-800">${dailyEarnings}</h3>
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

            {/* Orders overview by Chart */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">

                <div className="w-full col-span-1 md:col-span-2">
                    <StatusAreaChart orders={orders} />
                </div>

                <div className="w-full col-span-1">
                    <StatusPieChart orders={orders} />
                </div>
            </section>

            {/* users overview by chart */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">

                <div className="w-full col-span-1 md:col-span-2">
                    <StatusLineChart users={usersData} />
                </div>

                <div className="w-full col-span-1">
                    <StatusComposedChart users={usersData} />
                </div>
            </section>

            {/* Recent Orders */}
            <section className="mt-7 overflow-x-auto rounded-lg shadow-lg border border-green-300">
                <div className="bg-green-100 border-b flex justify-between items-center px-3 py-2 border-green-300">
                    <h1 className="text-lg font-bold text-green-800">Recent Orders List</h1>
                    <NavLink to="/dashboard/addProduct" className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-lg transition">Add Product</NavLink>
                </div>
                <table className="min-w-full text-sm text-left table-auto">
                    <thead className="bg-green-100 text-green-800 font-semibold">
                        <tr>
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Order ID</th>
                            <th className="py-3 px-4">Customer Name</th>
                            <th className="py-3 px-4">Phone Number</th>
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
                                    <td className="px-4 py-3 font-medium">{order._id.slice(0, 6)}</td>
                                    <td className="px-4 py-3 font-semibold">{order.customerName}</td>
                                    <td className="px-4 py-3 font-sans">{order.phone}</td>
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
                                        <button onClick={() => { setIsOpen(true); setOrderData(order) }} title="Edit"><FaEdit className="hover:text-green-800 transition text-xl" /></button>
                                        <button onClick={() => handleDeleteOrder(order._id)} title="Delete"><FaTrash className="hover:text-red-500 transition text-xl" /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {isOpen && <OrderUpdate setIsOpen={setIsOpen} order={orderData} />}
            </section>
        </div>
    );
};

export default AdminDashboard;