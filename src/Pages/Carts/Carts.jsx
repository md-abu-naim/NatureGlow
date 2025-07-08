import { Link } from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';


const Carts = () => {
    const [cartItems, setCartItems] = useState([])

    const total = Math.round(cartItems.reduce((sum, item) => sum + item.price, 0) * 100) / 100;

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || []
        setCartItems(storedCart);
    }, [])
    return (
        <div className='lg:mx-16 px-4 py-10'>
            {/* Page Title */}
            <section className='bg-green-100 py-8 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>Your Cart — Naturally Curated for You</h1>
                <p className='text-green-600 text-sm mt-2'> Review the products you've chosen and take a step closer to radiant, healthy skin with our thoughtfully crafted organic skincare essentials.</p>
            </section>

            {
                cartItems.length === 0 ? <div className="text-center mt-16 bg-green-50 p-10 rounded-xl border border-green-200 shadow-md">
                    <h2 className="text-2xl font-semibold text-green-700">Your cart is feeling a little empty 🌿</h2>
                    <p className="text-green-600 mt-2">Looks like you haven’t added anything yet. Let nature glow with you—explore our organic skincare collection now.</p>
                    <Link to="/shop" className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition">🛒 Browse Products</Link>
                </div> :
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-7'>
                        {/* Carts */}
                        <Card cartItems={cartItems} setCartItems={setCartItems} />

                        {/* Order Summary */}
                        <div className="w-full lg:col-span-1" >
                            <div className='bg-green-100 p-4 rounded-xl w-full'>
                                <div className='p-6 shadow-md rounded-xl border border-green-600 space-y-4'>
                                    <h2 className="text-xl font-bold text-green-800">Order Summary</h2>
                                    <div className="flex justify-between text-sm">
                                        <span>Subtotal</span>
                                        <span>${total}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Shipping</span>
                                        <span className='font-sans'>$1.00</span>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between font-bold text-green-900">
                                        <span>Total</span>
                                        <span>$ {total + 1}</span>
                                    </div>
                                    <Link to='/checkout' className="block text-center w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-xl"> Proceed to Checkout</Link>
                                    <Link to="/shop" className="block text-center text-green-700 text-sm hover:underline">⬅ Continue Shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Carts;