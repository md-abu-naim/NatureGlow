
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const { id } = useParams();
    const products = useLoaderData()
    const navigate = useNavigate()

    const product = products?.find(p => p.id == id)

    const handleAddToCart = (product) => {
        const axistingCart = JSON.parse(localStorage.getItem("cart")) || []
        const alreadyInCart = axistingCart.find(item => item.id === product.id)
        if (alreadyInCart) return toast.error('Product already in cart');
        const updateCart = [...axistingCart, product]
        localStorage.setItem("cart", JSON.stringify(updateCart))
        window.dispatchEvent(new Event("cartUpdated"));
        Swal.fire({
            title: "Product Added To Cart successfully!",
            icon: "success",
            draggable: true,
            timer: 1000,
            background: '#dcfce7',
        });
        navigate('/cart')
    }
    return (
        <div className='px-4 md:px-16 py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-green-50 p-6 rounded-2xl border border-green-100'>
                {/* Product Image */}
                <div className='bg-white p-4 rounded-2xl shadow border'>
                    <img className="w-full h-auto object-cover rounded-xl border border-green-300" src={product.image} alt={product.name} />
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-3xl font-bold text-green-800 mb-2">{product.name}</h1>
                    <p className="text-sm text-gray-600 italic mb-1">Category: {product.category}</p>
                    <p className="text-lg font-semibold text-green-700 mb-3">${product.price}.00</p>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <div className='mb-4'>
                        <span className="font-semibold text-gray-600">Features:</span>
                        <ul className='list-disc list-inside text-sm text-gray-700'>
                            {
                                product?.features?.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <span className={`text-sm font-medium bg-green-200 p-1.5 rounded-lg ${product.status === 'In Stock' ? 'text-green-600' : 'text-red-500'}`}>{product.status}</span>
                    <div className="space-y-3 mt-4">
                        <button onClick={() => handleAddToCart(product)} className="block w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all text-center">Add to Cart</button>
                        <Link to={`/checkout/${product.id}`} className="block w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all text-center">Quick Purchase</Link>
                    </div>
                    <div className="mt-4 text-center">
                        <Link to="/shop" className="text-sm text-green-700 hover:underline">⬅ Back to Shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;