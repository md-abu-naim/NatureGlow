import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [products, setProducts] = useState([])
  const { id } = useParams()

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      background: '#dcfce7',
      color: '#000000',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      buttonsStyling: false,
      customClass: {
        popup: 'rounded-lg shadow-lg',
        title: 'text-lg font-semibold text-yellow-400',
        htmlContainer: 'text-sm text-gray-300',
        confirmButton: 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2',
        cancelButton: 'bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        if (id) {
          const dltProduct = products.filter(p => p.id !== id)
          console.log(dltProduct);
          setProducts(dltProduct)
        } else {
          const UpdateCart = products.filter(item => item.id !== id)
          setProducts(UpdateCart)

          localStorage.setItem("cart", JSON.stringify(UpdateCart))
          window.dispatchEvent(new Event("cartUpdated"));
        }

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          background: '#dcfce7',
          timer: 800
        });
      }
    });
  }

  const handleQuantity = (id, value) => {
    const updated = products.map(item => item.id === id ? { ...item, quantity: parseFloat(value) || 1 } : item)
    setProducts(updated)
  }

  useEffect(() => {
    if (id) {
      axios.get('/Product.json')
        .then(res => {
          const data = res.data.find(p => p.id == id)
          data.quantity = 1
          setProducts([data])
        })
    } else {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || []
      const updateCart = storedCart.map(p => ({ ...p, quantity: p.quantity || 1 }))
      setProducts(updateCart);
    }
  }, [id])


  const total = Math.round(products.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100) / 100;

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
              <label className='block text-sm font-medium text-green-700 mb-1'>Full Name*</label>
              <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" name="name" required placeholder="Enter full name" />
            </div>
            <div>
              <label className='block text-sm font-medium text-green-700 mb-1'>Email (Optional)</label>
              <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="email" name="email" placeholder="example@gmail.com" />
            </div>
            <div>
              <label className='block text-sm font-medium text-green-700 mb-1'>Phone Number*</label>
              <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="number" name="number" required placeholder="Enter phone number" />
            </div>
            <div>
              <label className='block text-sm font-medium text-green-700 mb-1'>Address*</label>
              <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" name="address" required placeholder="Enter full address" />
            </div>
            <div>
              <label className='block text-sm font-medium text-green-700 mb-1'>Order note (Optional)</label>
              <textarea className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' name="" placeholder="Write your order note here" ></textarea>
            </div>
          </div>
        </section>


        {/* Products List */}
        {
          products.length === 0 ? <div className="text-center mt-16 bg-green-50 p-10 rounded-xl border border-green-200 shadow-md">
            <h2 className="text-2xl font-semibold text-green-700">Your CheckOut Page is feeling a little empty 🌿</h2>
            <p className="text-green-600 mt-2">Looks like you haven’t added anything yet. Let nature glow with you—explore our organic skincare collection now.</p>
            <Link to="/shop" className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition">🛒 Choose Products</Link>
          </div> :
            <section className='bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm space-y-4'>
              <h3 className="text-xl font-bold text-green-700 mb-4">Your Products</h3>
              <div className={products?.length > 1 ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'grid grid-cols-1 gap-4'}>
                {
                  products?.map((item) => (
                    <div key={item.id} className='grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 bg-white rounded-xl shadow border border-green-200 h-full'>
                      <img className='w-20 h-20 object-cover rounded-xl border shrink-0' src={item.image} alt="" />
                      <div className='flex-1'>
                        <h2 className='font-semibold text-green-700'>{item.name}</h2>
                        <p className='text-sm text-gray-600'>Price: {item.price}</p>
                        <div className='mt-2 flex items-center justify-center md:justify-start gap-2'>
                          <label className='text-sm'>Qty:</label>
                          <input onChange={(e) => handleQuantity(item.id, e.target.value)} type="number" min={1} defaultValue={1} name="" className='w-16 border border-green-300 rounded px-2 py-1 text-center' />
                        </div>
                      </div>
                      <button onClick={() => handleDelete(item.id)} className='bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition-all '><FaTrashAlt className="w-5 h-5" /></button>
                    </div>
                  ))
                }
              </div>
            </section>
        }

        {/* Summary */}
        <section className='bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm space-y-4'>
          <h3 className='text-xl font-bold text-green-700 mb-4'>Order Summary</h3>
          {
            products?.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} × {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))
          }
          <hr />
          <div className="flex justify-between text-sm text-green-500">
            <span>Shipping</span>
            <span>${1}.00</span>
          </div>
          <div className="flex justify-between text-sm text-green-600">
            <span>Sub Total</span>
            <span>${total}.00</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-green-900">
            <span>Total</span>
            <span>{total + 1}.00</span>
          </div>
        </section>

        {/* Payment Method */}
        <section className='bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm space-y-4'>
          <h3 className='text-xl font-bold text-green-700 mb-4'>Payment Method</h3>
          <div className='flex flex-col md:flex-row gap-4'>
            <button onClick={() => setPaymentMethod('cod')} className={`flex-1 border rounded-xl px-4 py-3 flex items-center justify-center gap-3 transition-all ${paymentMethod === 'cod' ? 'bg-green-200 border-green-600' : 'bg-white border-green-300'}`}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCqlRQLK4C8tZMpQ-TDcA5qrscE5B-yrQLQ&s" alt="Cash on Delivery" className="w-6 h-6" /> Cash on Delivery
            </button>
            <button onClick={() => setPaymentMethod('stripe')} className={`flex-1 border rounded-xl px-4 py-3 flex items-center justify-center gap-3 transition-all ${paymentMethod === 'stripe' ? 'bg-green-200 border-green-600' : 'bg-white border-green-300'}`}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Stripe_logo%2C_revised_2014.png" alt="Cash on Delivery" className="w-6 h-6" /> Stripe
            </button>
            <button onClick={() => setPaymentMethod('ssl')} className={`flex-1 border rounded-xl px-4 py-3 flex items-center justify-center gap-3 transition-all ${paymentMethod === 'ssl' ? 'bg-green-200 border-green-600' : 'bg-white border-green-300'}`}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptztEaor3TF8NjFZC9XGsW926pzTpWtc5ww&s" alt="Cash on Delivery" className="w-6 h-6" /> SSLCommerz
            </button>
          </div>
          <div className='mt-4'>
            {
              paymentMethod === 'cod' && <button className='w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition-all'>Place Order</button>
            }
            {
              paymentMethod === 'ssl' && <div className="p-4 bg-white border border-green-300 rounded-xl">
                <p className="text-sm text-green-700">You have selected <strong>SSLCommerz</strong>. Payment gateway integration goes here.</p>
              </div>
            }
            {
              paymentMethod === 'stripe' && <div className="p-4 bg-white border border-green-300 rounded-xl">
                <p className="text-sm text-green-700">You have selected <strong>SSLCommerz</strong>. Payment gateway integration goes here.</p>
              </div>
            }
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckoutPage;
