import { Link } from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';


const Carts = () => {
    // const [cartItems, setCartItems] = useState([])
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || []
        // setCartItems(storedCart);
    }, [])
    return (
        <div className='lg:mx-16 px-4 py-10'>
            {/* Page Title */}
            <section className='bg-green-100 py-8 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>Your Cart — Naturally Curated for You</h1>
                <p className='text-green-600 text-sm mt-2'> Review the products you've chosen and take a step closer to radiant, healthy skin with our thoughtfully crafted organic skincare essentials.</p>
            </section>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-7'>
                {/* Carts */}
                <Card cartItems={cartItems} />

                {/* Order Summary */}
                <div className="w-full lg:col-span-1" >
                    <div className='bg-green-100 p-4 rounded-xl w-full'>
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
    );
};

export default Carts;