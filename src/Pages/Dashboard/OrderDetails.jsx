
// const OrderDetails = () => {
//     return (
//         <div>
//             order details
//         </div>
//     );
// };

// export default OrderDetails;

import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserCircle, FaShoppingCart } from "react-icons/fa";

const orders = [
  {
    id: "ORD12345",
    date: "2025-07-29",
    status: "Delivered",
    paymentStatus: "Paid",
    items: [
      { name: "Herbal Face Wash", quantity: 2, price: 15 },
      { name: "Organic Lip Balm", quantity: 1, price: 8 },
    ],
  },
  {
    id: "ORD67890",
    date: "2025-07-27",
    status: "Shipped",
    paymentStatus: "Unpaid",
    items: [
      { name: "Aloe Vera Gel", quantity: 1, price: 10 },
    ],
  },
];

const customer = {
  name: "Naim Web Dev",
  email: "naim@example.com",
  phone: "+880 1234-567890",
  address: "123, Dhaka, Bangladesh",
  image: "https://i.pravatar.cc/150?img=31",
};

const getStatusStyle = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-700";
    case "Shipped":
      return "bg-blue-100 text-blue-700";
    case "In Progress":
      return "bg-yellow-100 text-yellow-700";
    case "Cancelled":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getPaymentStyle = (status) => {
  switch (status) {
    case "Paid":
      return "bg-green-100 text-green-700";
    case "Unpaid":
      return "bg-red-100 text-red-700";
    case "Refunded":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const OrderDetailsPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Customer Info */}
      <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-6">
        <img
          src={customer.image}
          alt="Customer"
          className="w-20 h-20 rounded-full border-4 border-green-300 object-cover"
        />
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-gray-800">{customer.name}</h2>
          <p className="flex items-center gap-2 text-gray-600"><FaEnvelope /> {customer.email}</p>
          <p className="flex items-center gap-2 text-gray-600"><FaPhoneAlt /> {customer.phone}</p>
          <p className="flex items-center gap-2 text-gray-600"><FaMapMarkerAlt /> {customer.address}</p>
        </div>
      </div>

      {/* Orders */}
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-5 rounded-xl shadow border">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-semibold text-gray-800">
                <FaShoppingCart className="inline mr-2 text-green-500" />
                Order ID: <span className="text-indigo-600">{order.id}</span>
              </div>
              <div className="flex gap-2">
                <span className={`px-2 py-1 rounded text-sm font-medium ${getStatusStyle(order.status)}`}>
                  {order.status}
                </span>
                <span className={`px-2 py-1 rounded text-sm font-medium ${getPaymentStyle(order.paymentStatus)}`}>
                  {order.paymentStatus}
                </span>
              </div>
            </div>

            <table className="w-full text-left border-t pt-2">
              <thead>
                <tr className="text-gray-600 text-sm uppercase border-b">
                  <th className="py-2">Product</th>
                  <th>Quantity</th>
                  <th>Price ($)</th>
                  <th>Total ($)</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {order.items.map((item, idx) => (
                  <tr key={idx} className="border-b last:border-none">
                    <td className="py-2">{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity * item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Order Date & Total */}
            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
              <span>Order Date: {order.date}</span>
              <span className="font-semibold text-gray-800">
                Total: $
                {order.items.reduce((total, item) => total + item.price * item.quantity, 0)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
