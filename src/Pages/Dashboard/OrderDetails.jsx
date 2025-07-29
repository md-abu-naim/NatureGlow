import { AiOutlineEye } from "react-icons/ai";
import { FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const OrderDetails = () => {
    const products = [
        {
            "_id": 1,
            "image": "https://i.ibb.co/0YhPzTX/product1.jpg",
            "name": "Herbal Aloe Face Wash",
            "date": "2025-07-20T10:15:00Z",
            "orderStatus": "Delivered",
            "paymentStatus": "Paid",
            "totalPrice": 2499
        },
        {
            "_id": 2,
            "image": "https://i.ibb.co/5vQFdxN/product2.jpg",
            "name": "Coconut Hair Oil",
            "date": "2025-07-22T09:45:00Z",
            "orderStatus": "Shipped",
            "paymentStatus": "Paid",
            "totalPrice": 1890
        },
        {
            "_id": 3,
            "image": "https://i.ibb.co/J5Phn8b/product3.jpg",
            "name": "Rose Body Lotion",
            "date": "2025-07-25T12:10:00Z",
            "orderStatus": "In Progress",
            "paymentStatus": "Unpaid",
            "totalPrice": 2785
        },
        {
            "_id": 4,
            "image": "https://i.ibb.co/SJ7Z0KR/product4.jpg",
            "name": "Lip Balm (Strawberry)",
            "date": "2025-07-23T16:00:00Z",
            "orderStatus": "Cancelled",
            "paymentStatus": "Refunded",
            "totalPrice": 1540
        },
        {
            "_id": 5,
            "image": "https://i.ibb.co/Ln6dTn9/product5.jpg",
            "name": "Turmeric Clay Mask",
            "date": "2025-07-18T14:30:00Z",
            "orderStatus": "In Progress",
            "paymentStatus": "Paid",
            "totalPrice": 3200
        }
    ]
    return (
        <div>
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>Order Details Overview</h1>
                <p className='text-green-600 text-sm mt-2'>Review complete customer information, payment and order status, and detailed product breakdown.</p>
            </section>

            <section className="mt-7 overflow-x-auto rounded-lg shadow-lg border border-green-300">
                <div className="bg-green-100 border-b flex justify-between items-center px-3 py-2 border-green-300">
                    <h1 className="text-lg font-bold text-green-800">Ordering List</h1>
                    <NavLink to="/dashboard/Update-orders" className="bg-green-500 text-white py-1 px-2 rounded-lg">Edit Product</NavLink>
                </div>
                <table className="min-w-full text-sm text-left table-auto">
                    <thead className="bg-green-100 text-green-800 font-semibold">
                        <tr>
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Image & Name</th>
                            <th className="py-3 px-4">Quantity</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">Total Price</th>
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
                                    <td className="px-4 py-3 ">Product</td>
                                    <td className="px-4 py-3 font-sans font-semibold"> {product.date}</td>
                                    <td className="px-4 py-3 font-sans">$ {product.totalPrice}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default OrderDetails;