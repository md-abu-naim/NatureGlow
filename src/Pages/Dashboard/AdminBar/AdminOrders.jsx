import { BsCartX } from "react-icons/bs";

const AdminOrders = () => {
    return (
        <div>
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>All Orders Management</h1>
                <p className='text-green-600 text-sm mt-2'>Track and manage every customer order from a single dashboard. Review payment status, order items, and delivery progress — all in real time.</p>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-7">
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
            </section>
        </div>
    );
};

export default AdminOrders;