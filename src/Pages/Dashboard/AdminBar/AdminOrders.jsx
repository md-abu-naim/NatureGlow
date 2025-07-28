// import axios from "axios";
// import { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import { FaEdit, FaShippingFast, FaTrash } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { LuClock } from "react-icons/lu";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";

const AdminOrders = () => {
    const products = [
  {
    "image": "https://i.ibb.co/0YhPzTX/product1.jpg",
    "name": "Herbal Aloe Face Wash",
    "date": "2025-07-20T10:15:00Z",
    "orderStatus": "Delivered",
    "paymentStatus": "Paid",
    "totalPrice": 2499
  },
  {
    "image": "https://i.ibb.co/5vQFdxN/product2.jpg",
    "name": "Coconut Hair Oil",
    "date": "2025-07-22T09:45:00Z",
    "orderStatus": "Order Shipped",
    "paymentStatus": "Paid",
    "totalPrice": 1890
  },
  {
    "image": "https://i.ibb.co/J5Phn8b/product3.jpg",
    "name": "Rose Body Lotion",
    "date": "2025-07-25T12:10:00Z",
    "orderStatus": "In Progress",
    "paymentStatus": "Unpaid",
    "totalPrice": 2785
  },
  {
    "image": "https://i.ibb.co/SJ7Z0KR/product4.jpg",
    "name": "Lip Balm (Strawberry)",
    "date": "2025-07-23T16:00:00Z",
    "orderStatus": "Cancelled",
    "paymentStatus": "Refunded",
    "totalPrice": 1540
  },
  {
    "image": "https://i.ibb.co/Ln6dTn9/product5.jpg",
    "name": "Turmeric Clay Mask",
    "date": "2025-07-18T14:30:00Z",
    "orderStatus": "Pending Review",
    "paymentStatus": "Paid",
    "totalPrice": 3200
  }
]

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
                <table className="min-w-full text-sm text-left table-auto">
                    <thead className="bg-green-100 text-green-800 font-semibold">
                        <tr>
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">Customer</th>
                            <th className="py-3 px-4">Products</th>
                            <th className="py-3 px-4">Payment Status</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">Order Status</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 divide-y divide-green-100">
                        {
                            products?.map((product, i) => (
                                <tr key={product.id} className="hover:bg-green-100 transition-all">
                                    <td className="px-4 py-3 font-semibold">{i + 1}</td>
                                    <td className="px-4 py-3 "><img src={product.image} className="w-12 h-12 object-cover rounded-md border border-green-300" alt={product.name} /></td>
                                    <td className="px-4 py-3 ">{product.name}</td>
                                    <td className="px-4 py-3 ">Product</td>
                                    <td className="px-4 py-3 font-sans font-semibold">{product.paymentStatus}</td>
                                    <td className="px-4 py-3 font-sans font-semibold"> {product.date}</td>
                                    <td className="px-4 py-3">{product.orderStatus}</td>
                                    <td className="px-6 py-4 flex items-center justify-center gap-4 text-green-600">
                                        <button title="Edit"><AiOutlineEye className="hover:text-green-800 transition text-xl" /></button>
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