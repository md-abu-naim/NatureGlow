import { FaCcMastercard, } from "react-icons/fa";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import OrderTracking from "./OrderTracking";

const OrderDetails = () => {
    const { _id } = useParams()
    const orders = useLoaderData()
    const role = "User"

    const order = orders.data?.find(o => o._id === _id)

    const { customerName, profile, paymentStatus, orderStatus, phone, address, email, products, totalPrice } = order || {}

    return (
        <div>
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>Order Details Overview</h1>
                <p className='text-green-600 text-sm mt-2'>Review complete customer information, payment and order status, and detailed product breakdown.</p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                <div className="col-span-2">
                    <div>
                        {/* <OrderTracking /> */}
                        <OrderTracking orderStatus={orderStatus} paymentStatus={paymentStatus} _id={_id} />

                        {/* Order List */}
                        <section className=" mt-6 overflow-x-auto rounded-lg shadow-lg border border-green-300">
                            <div className="bg-green-100 border-b flex justify-between items-center px-3 py-2 border-green-300">
                                <h1 className="text-lg font-bold text-green-800">Ordering List</h1>
                                {
                                    role === 'Admin' ? <NavLink to="/dashboard/Update-orders" className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-lg transition">Edit Product</NavLink> :
                                    <button title="Order Cancel" className="bg-red-100 hover:bg-red-300 text-red-700 px-3 py-1 rounded-sm transition">Order Cancel</button>
                                }
                            </div>
                            <table className="min-w-full text-sm text-left table-auto">
                                <thead className="bg-green-100 text-green-800 font-semibold">
                                    <tr>
                                        <th className="py-3 px-4">#</th>
                                        <th className="py-3 px-4">Image & Name</th>
                                        <th className="py-3 px-4">Category</th>
                                        <th className="py-3 px-4">Status</th>
                                        <th className="py-3 px-4">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 divide-y divide-green-100">
                                    {
                                        products?.map((product, i) => (
                                            <tr key={product.id} className="hover:bg-green-100 transition-all">
                                                <td className="px-4 py-3 font-semibold">{i + 1}</td>
                                                <td className="px-4 py-3 flex items-center gap-1">
                                                    <img src={product.image} className="w-12 h-12 object-cover rounded-md border border-green-300" alt={product.name} />
                                                    <h5>{product.name}</h5>
                                                </td>
                                                <td className="px-4 py-3 font-semibold italic"> {product.category}</td>
                                                <td className="px-4 py-3">
                                                    <span className={`px-2 py-1 text-sm font-semibold rounded-full ${product.status === 'Low Stock' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}`}>{product.status}</span>
                                                </td>
                                                <td className="px-4 py-3 font-sans">$ {product.price}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>

                {/* Order Summary */}
                <section className="w-full lg:col-span-1 mt-5" >
                    <div className='bg-green-50 p-4 rounded-xl w-full'>
                        <div className='p-6 shadow-md rounded-xl space-y-4'>
                            <h2 className="text-xl font-bold text-green-800">Order Summary</h2>
                            <div className="flex justify-between text-sm">
                                <span>Subtotal</span>
                                <span>$ {totalPrice}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Shipping</span>
                                <span className='font-sans'>$1.00</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-bold text-green-900">
                                <span>Total</span>
                                <span>$ {totalPrice + 1}</span>
                            </div>
                        </div>
                    </div>

                    {/* Marster Card */}
                    <div className="bg-green-50 mt-4 rounded-2xl shadow p-6">
                        <div className="border-b border-green-300 pb-3">
                            <h2 className="text-xl font-bold text-green-800">Payment Information</h2>
                        </div>
                        <div className="flex items-center justify-between my-4">
                            <div className="flex flex-center gap-2 text-xl font-semibold text-gray-800">
                                <FaCcMastercard className="text-red-500 text-3xl" /> Master Card
                            </div>
                            <span className="text-sm text-gray-500">Payment Method</span>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4 text-gray-700 text-sm space-y-2">
                            <div className="flex justify-between">
                                <span className="font-medium">Card Number:</span>
                                <span className="tracking-widest">xxxx xxxx xxxx 7812</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Transaction ID:</span>
                                <span>#IDN768139059</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Card Holder:</span>
                                <span>Gaston Lapierre</span>
                            </div>
                        </div>
                    </div>

                    {/* Customer Details */}
                    <div className="bg-green-50 p-6 rounded-2xl shadow mt-4">
                        <div className="border-b border-green-300 pb-3">
                            <h2 className="text-xl font-bold text-green-800">Customer Details</h2>
                        </div>
                        <div className="flex items-center gap-4 my-3">
                            <img src={profile} className="w-16 h-16 rounded-full border-2 border-green-300 shadow" alt={customerName} />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">{customerName}</h2>
                                <p className="text-sm text-gray-600">{email}</p>
                            </div>
                        </div>

                        <div className="text-sm text-gray-700 space-y-2">
                            <span className="font-medium text-gray-800">Contact Number: <span className="font-sans font-normal">+88{phone}</span></span>
                            <div className="mt-1">
                                <span className="font-medium text-gray-800">Shipping Address:</span>
                                <address className=" leading-relaxed mt-1 text-gray-600">
                                    {address}
                                </address>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    );
};

export default OrderDetails;