import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const cartItems = [
    {
        id: 1,
        name: 'Organic Aloe Vera Gel',
        price: 15,
        category: 'Face Care',
        image: '/images/aloe-vera.jpg',
    },
    {
        id: 2,
        name: 'Natural Rose Water Mist',
        price: 12,
        category: 'Body Care',
        image: '/images/rose-mist.jpg',
    },
    {
        id: 1,
        name: 'Organic Aloe Vera Gel',
        price: 15,
        category: 'Hair Care',
        image: '/images/aloe-vera.jpg',
    },
    {
        id: 2,
        name: 'Natural Rose Water Mist',
        price: 12,
        category: 'Lip Care',
        image: '/images/rose-mist.jpg',
    },
];
const Cart = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return (
        <div>

            <div className='lg:mx-16 px-4 py-10'>
                {/* Page Title */}
                <section className='bg-green-100 py-8 text-center rounded-lg'>
                    <h1 className='text-4xl font-extrabold text-green-800'>Your Cart — Naturally Curated for You</h1>
                    <p className='text-green-600 text-sm mt-2'> Review the products you've chosen and take a step closer to radiant, healthy skin with our thoughtfully crafted organic skincare essentials.</p>
                </section>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-7'>
                    <div className='col-span-3 lg:col-span-2 space-y-4 p-5 rounded-xl bg-green-100'>
                        {
                            cartItems?.map(item => <div key={item.id} className='flex flex-col md:flex-row text-center md:text-start items-center p-4 gap-4 shadow-md rounded-xl border border-green-600'>
                                <img className='w-28 h-28 object-cover rounded-xl border border-green-500' src="https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp" alt="" />
                                <div className='flex-1'>
                                    <h2 className='text-lg font-semibold text-green-700'>{item.name}</h2>
                                    <p className='text-sm text-gray-700 font-medium italic'>{item.category}</p>
                                    <p className='text-md font-semibold text-green-800'>$ {item.price}.00</p>
                                    <button className="inline-block mt-2 px-3 py-1 text-sm bg-green-700 text-white rounded hover:bg-green-800 transition">View Details</button>
                                </div>
                                <button className='bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition-all'><FaTrashAlt className="w-5 h-5" /></button>
                            </div>
                            )
                        }
                    </div>

                    {/* Order Summary */}
                    <div className='col-span-3'>
                        <div className='bg-green-100 p-4 rounded-xl'>
                            <div className='p-6 shadow-md rounded-xl border border-green-600 space-y-4'>
                                <h2 className="text-xl font-bold text-green-800">Order Summary</h2>
                                <div className="flex justify-between text-sm">
                                    <span>Subtotal</span>
                                    <span>${total}.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Shipping</span>
                                    <span className='font-sans'> 1</span>
                                </div>
                                <hr />
                                <div className="flex justify-between font-bold text-green-900">
                                    <span>Total</span>
                                    <span>$ {total}.00</span>
                                </div>
                                <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-xl"> Proceed to Checkout</button>
                                <Link to="/shop" className="block text-center text-green-700 text-sm hover:underline">⬅ Continue Shopping</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-3 gapd-6 mt-7 ">
                    <div>
                        <div className='bg-green-100 p-4 rounded-xl'>
                            <div className="p-6 shadow-md rounded-xl border space-y-4">
                                <h2 className="text-xl font-bold text-green-800">Order Summary</h2>
                                <div className="flex justify-between text-sm">
                                    <span>Subtotal</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <hr />
                                <div className="flex justify-between font-bold text-green-900">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-xl">
                                    Proceed to Checkout
                                </button>
                                <Link to="/shop" className="block text-center text-green-700 text-sm hover:underline">
                                    ⬅ Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Cart;