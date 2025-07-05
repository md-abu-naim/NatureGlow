import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';


const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const cartItems = [
    {
      id: 1,
      name: 'Neem Face Wash',
      price: 15,
      image: 'https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Aloe Vera Gel',
      price: 12,
      image: 'https://i.postimg.cc/mZtY07qh/aloe-vera-gel.jpg',
      quantity: 2,
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 py-10 space-y-10'>
        {/* Page Title */}
        <section className='bg-green-100 py-8 text-center rounded-2xl'>
          <h1 className='text-4xl font-extrabold text-green-800'>Checkout & Order Summary</h1>
          <p className='text-green-600 text-sm mt-2'>Fill in your details and confirm your order to receive your naturally crafted products.</p>
        </section>

        {/* Customer Information */}
        <section className='bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm space-y-4'>
          <h1 className="text-xl font-bold text-green-700 mb-4">Customer Information</h1>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-green-700 mb-1'>Full Name</label>
              <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" name="" placeholder="Enter your full name" />
            </div>
            <div>
              <label className='block text-sm font-medium text-green-700 mb-1'>Phone Number</label>
              <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" name="" placeholder="Enter your phone number" />
            </div>
            <div>
              <label className='block text-sm font-medium text-green-700 mb-1'>Address</label>
              <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" name="" placeholder="Enter your address" />
            </div>
            <div>
              <label className='block text-sm font-medium text-green-700 mb-1'>Order note (optional)</label>
              <textarea className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' name="" placeholder="Write your order note here" ></textarea>
            </div>
          </div>
        </section>


        {/* Products List */}
        <section className='bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm space-y-4'>
          <h3 className="text-xl font-bold text-green-700 mb-4">Your Products</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
              cartItems.map(item => (
                <div key={item.id} className='grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 bg-white rounded-xl shadow border border-green-200 h-full'>
                  <img className='w-20 h-20 object-cover rounded-xl border shrink-0' src={item.image} alt="" />
                  <div className='flex-1'>
                    <h2 className='font-semibold text-green-700'>{item.name}</h2>
                    <p className='text-sm text-gray-600'>Price:{item.price}</p>
                    <div className='mt-2 flex items-center justify-center md:justify-start gap-2'>
                      <label className='text-sm'>Qty:</label>
                      <input type="number" min={1} defaultValue={item.quantity} name="" className='w-16 border border-green-300 rounded px-2 py-1 text-center' />
                    </div>
                  </div>
                  <button className='bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition-all '><FaTrashAlt className="w-5 h-5" /></button>
                </div>
              ))
            }
          </div>
        </section>

        <section className='bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm space-y-4'>
          <h3 className="text-xl font-bold text-green-700 mb-4">Your Products</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
              cartItems.map(item => (
                <div
                  key={item.id}
                  className='grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 bg-white rounded-xl shadow border border-green-200 h-full'
                >
                  {/* Image */}
                  <img
                    className='w-24 h-24 object-cover rounded-xl border'
                    src={item.image}
                    alt={item.name}
                  />

                  {/* Product Info */}
                  <div className='space-y-1'>
                    <h2 className=' font-semibold text-green-700'>{item.name}</h2>
                    <p className='text-sm text-gray-600'>Price: ${item.price}</p>
                    <div className='flex items-center gap-2'>
                      <label className='text-sm'>Qty:</label>
                      <input
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                        className='w-16 border border-green-300 rounded px-2 py-1 text-center'
                      />
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button className='bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition-all'>
                    <FaTrashAlt className="w-5 h-5" />
                  </button>
                </div>
              ))
            }
          </div>
        </section>


      </div>


      {/* Products List */}
      <div className='bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm space-y-4'>
        <h3 className="text-xl font-bold text-green-700 mb-4">Your Products</h3>
        <div className="space-y-4 ">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center p-4 gap-4 bg-white rounded-xl shadow border border-green-200">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl border" />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-lg font-semibold text-green-700">{item.name}</h2>
                <p className="text-sm text-gray-600">Price: ${item.price}.00</p>
                <div className="mt-2 flex items-center justify-center md:justify-start gap-2">
                  <label className="text-sm">Qty:</label>
                  <input type="number" min={1} defaultValue={item.quantity} className="w-16 border border-green-300 rounded px-2 py-1 text-center" />
                </div>
              </div>
              <button className='bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition-all'>
                <FaTrashAlt className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-green-700 mb-4">Order Summary</h3>
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>{item.name} × {item.quantity}</span>
            <span>${item.price * item.quantity}.00</span>
          </div>
        ))}
        <hr />
        <div className="flex justify-between font-bold text-green-900">
          <span>Total</span>
          <span>${total}.00</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className='bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm space-y-4'>
        <h3 className="text-xl font-bold text-green-700 mb-4">Payment Method</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            type="button"
            onClick={() => setPaymentMethod('ssl')}
            className={`flex-1 border rounded-xl px-4 py-3 flex items-center justify-center gap-3 transition-all ${paymentMethod === 'ssl' ? 'bg-green-200 border-green-600' : 'bg-white border-green-300'}`}
          >
            <img src="https://i.ibb.co/7KgYL9K/sslcommerz-logo.png" alt="SSLCommerz" className="w-6 h-6" /> SSLCommerz
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('stripe')}
            className={`flex-1 border rounded-xl px-4 py-3 flex items-center justify-center gap-3 transition-all ${paymentMethod === 'stripe' ? 'bg-green-200 border-green-600' : 'bg-white border-green-300'}`}
          >
            <img src="https://i.ibb.co/ZcncKzG/stripe-logo.png" alt="Stripe" className="w-6 h-6" /> Stripe
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('cod')}
            className={`flex-1 border rounded-xl px-4 py-3 flex items-center justify-center gap-3 transition-all ${paymentMethod === 'cod' ? 'bg-green-200 border-green-600' : 'bg-white border-green-300'}`}
          >
            <img src="https://i.ibb.co/4P8WbWF/cash-on-delivery-icon.png" alt="Cash on Delivery" className="w-6 h-6" /> Cash on Delivery
          </button>
        </div>
        <div className="mt-4">
          {paymentMethod === 'cod' && (
            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition-all">Place Order</button>
          )}
          {paymentMethod === 'ssl' && (
            <div className="p-4 bg-white border border-green-300 rounded-xl">
              <p className="text-sm text-green-700">You have selected <strong>SSLCommerz</strong>. Payment gateway integration goes here.</p>
            </div>
          )}
          {paymentMethod === 'stripe' && (
            <div className="p-4 bg-white border border-green-300 rounded-xl">
              <p className="text-sm text-green-700">You have selected <strong>Stripe</strong>. Stripe checkout integration goes here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
