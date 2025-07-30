
import { AiOutlineEye } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import { FaEdit, FaShippingFast, FaTrash } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { LuClock } from "react-icons/lu";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { NavLink, useLoaderData } from "react-router-dom";

const AdminOrders = () => {
    const products = useLoaderData()

    return (
        <div>
            {/* Title */}
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>All Orders Management</h1>
                <p className='text-green-600 text-sm mt-2'>Track and manage every customer order from a single dashboard. Review payment status, order items, and delivery progress — all in real time.</p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-7">
                {/* In Progress */}
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl ransition duration-300 ease-in-out group relative flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-green-800 group-hover:text-green-900 transition">In Progress</h3>
                        <p className="text-3xl font-semibold text-gray-800 mt-1">250</p>
                        <p className="text-sm text-green-600 mt-1">Currently being prepared or processed</p>
                    </div>
                    <div className="bg-green-200 text-green-800 p-4 rounded-full shadow-inner group-hover:bg-green-300 transition">
                        <FiRefreshCw className="text-3xl" />
                    </div>
                </div>
                {/* Orders Shipped */}
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl ransition duration-300 ease-in-out group relative flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-green-800 group-hover:text-green-900 transition">Orders Shipped</h3>
                        <p className="text-3xl font-semibold text-gray-800 mt-1">250</p>
                        <p className="text-sm text-green-600 mt-1">Parcels dispatched to courier</p>
                    </div>
                    <div className="bg-green-200 text-green-800 p-4 rounded-full shadow-inner group-hover:bg-green-300 transition">
                        <FaShippingFast className="text-3xl" />
                    </div>
                </div>
                {/* Delivered Orders */}
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl ransition duration-300 ease-in-out group relative flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-green-800 group-hover:text-green-900 transition">Delivered Orders</h3>
                        <p className="text-3xl font-semibold text-gray-800 mt-1">250</p>
                        <p className="text-sm text-green-600 mt-1">Successfully delivered to customers</p>
                    </div>
                    <div className="bg-green-200 text-green-800 p-4 rounded-full shadow-inner group-hover:bg-green-300 transition">
                        <MdOutlineLocalShipping className="text-3xl" />
                    </div>
                </div>
                {/* Cancelled Orders */}
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl ransition duration-300 ease-in-out group relative flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-green-800 group-hover:text-green-900 transition">Cancelled Orders</h3>
                        <p className="text-3xl font-semibold text-gray-800 mt-1">250</p>
                        <p className="text-sm text-green-600 mt-1">Total canceled by users</p>
                    </div>
                    <div className="bg-green-200 text-green-800 p-4 rounded-full shadow-inner group-hover:bg-green-300 transition">
                        <BsCartX className="text-3xl" />
                    </div>
                </div>
                {/* Pending Payments */}
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl ransition duration-300 ease-in-out group relative flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-green-800 group-hover:text-green-900 transition">Pending Payments</h3>
                        <p className="text-3xl font-semibold text-gray-800 mt-1">250</p>
                        <p className="text-sm text-green-600 mt-1">Awaiting customer payment confirmation</p>
                    </div>
                    <div className="bg-green-200 text-green-800 p-4 rounded-full shadow-inner group-hover:bg-green-300 transition">
                        <LuClock className="text-3xl" />
                    </div>
                </div>
                {/* Payment Refunded */}
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl ransition duration-300 ease-in-out group relative flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-green-800 group-hover:text-green-900 transition">Payment Refunded</h3>
                        <p className="text-3xl font-semibold text-gray-800 mt-1">250</p>
                        <p className="text-sm text-green-600 mt-1">Total orders refunded to users</p>
                    </div>
                    <div className="bg-green-200 text-green-800 p-4 rounded-full shadow-inner group-hover:bg-green-300 transition">
                        <RiRefund2Line className="text-3xl" />
                    </div>
                </div>
            </section>

            {/* Orders Table */}
            <section className="mt-7 overflow-x-auto rounded-lg shadow-lg border border-green-300">
                <div className="bg-green-100 border-b flex justify-between items-center px-3 py-2 border-green-300">
                    <h1 className="text-lg font-bold text-green-800">All Orders List</h1>
                    <NavLink to="/dashboard/addProduct" className="bg-green-500 text-white py-1 px-2 rounded-lg">Add Product</NavLink>
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
                            products?.map((product, i) => (
                                <tr key={product.id} className="hover:bg-green-100 transition-all">
                                    <td className="px-4 py-3 font-semibold">{i + 1}</td>
                                    <td className="px-4 py-3 font-medium">{product._id}</td>
                                    <td className="px-4 py-3 font-semibold">{product.customerName}</td>
                                    <td className="px-4 py-3 font-sans">{product.phone}</td>
                                    <td className="px-4 py-3 ">{product.products?.length} Items</td>
                                    <td className="px-4 py-3 font-semibold">
                                        <span className={`px-2 py-1 rounded text-sm font-medium shadow-sm ${product.paymentStatus === 'Paid' ? 'bg-green-100 text-green-700' : product.paymentStatus === 'Unpaid' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                                            {product.paymentStatus}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 font-sans font-semibold"> {product.date}</td>
                                    <td className="px-4 py-3 font-semibold">
                                        <span className={`px-2 py-1 rounded text-sm font-medium shadow-sm
                                            ${product.orderStatus === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                                                product.orderStatus === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                                                    product.orderStatus === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                            }`}>
                                            {product.orderStatus}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 font-sans">$ {product.totalPrice + 1}</td>
                                    <td className="px-6 py-4 flex items-center justify-center gap-4 text-green-600">
                                        <NavLink to={`/dashboard/order-details/${product._id}`} title="View"><AiOutlineEye className="hover:text-green-800 transition text-xl" /></NavLink>
                                        <button title="Edit"><FaEdit className="hover:text-green-800 transition text-xl" /></button>
                                        <button title="Delete"><FaTrash className="hover:text-red-500 transition text-xl" /></button>
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

export default AdminOrders;