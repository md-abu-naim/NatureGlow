
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const [relatedProduct, setRelatedProduct] = useState([])
    const { id } = useParams();
    const products = useLoaderData()
    const navigate = useNavigate()
    console.log(relatedProduct);

    const product = products?.find(p => p.id == id)
    const { name, image, description, features, price, category, status } = product || {}

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
            timer: 1500,
            background: '#dcfce7',
        });
        navigate('/cart')
    }


    useEffect(() => {
        axios.get('/Product.json')
            .then(res => {
                const products = res.data.filter(p => p.category === category)
                setRelatedProduct(products)
            })
    }, [category])
    return (
        <div className='px-4 md:px-16 py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-green-50 p-6 rounded-2xl border border-green-100'>
                {/* Product Image */}
                <div className='bg-white p-4 rounded-2xl shadow border'>
                    <img className="w-full h-auto object-cover rounded-xl border border-green-300" src={image} alt={name} />
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-3xl font-bold text-green-800 mb-2">{name}</h1>
                    <p className="text-sm text-gray-600 italic mb-1">Category: {category}</p>
                    <p className="text-lg font-semibold text-green-700 mb-3">${price}.00</p>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <div className='mb-4'>
                        <span className="font-semibold text-gray-600">Features:</span>
                        <ul className='list-disc list-inside text-sm text-gray-700'>
                            {
                                features?.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <span className={`text-sm font-medium bg-green-200 p-1.5 rounded-lg ${status === 'In Stock' ? 'text-green-600' : 'text-red-500'}`}>{status}</span>
                    <div className="space-y-3 mt-4">
                        <button onClick={() => handleAddToCart(product)} className="block w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all text-center">Add to Cart</button>
                        <Link to={`/checkout/${product.id}`} className="block w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all text-center">Quick Purchase</Link>
                    </div>
                    <div className="mt-4 text-center">
                        <Link to="/shop" className="text-sm text-green-700 hover:underline">⬅ Back to Shop</Link>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h3 className='text-2xl text-green-800 font-bold'>Related Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
                    {
                        relatedProduct?.slice(0, 4).map(product => <div to={`/details/${product.id}`} key={product.id} className="group shadow-xl rounded-3xl p-5 relative hover:shadow-2xl transition duration-300">
                            <div className="overflow-hidden rounded-xl">
                                <img className="w-full h-52 object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" src={product.image} alt={product.name} />
                            </div>
                            <div className="space-y-2 mt-4">
                                <h3 className="text-lg font-bold text-green-500 transition">{product.name}</h3>
                                <p className="text-sm italic group-hover:text-green-500">{product.category}</p>
                                <p className="text-gray-700 text-sm">{product.shortBio}</p>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-green-500 font-bold text-md">${product.price}</span>
                                    <span className="text-sm bg-green-100 text-green-500 p-1.5 rounded-lg">{product.status}</span>
                                </div>
                                <div className="flex gap-3 w-full pt-3">
                                    <Link to={`/details/${product.id}`} className="flex-1 px-4 py-2 rounded-full text-sm font-medium border border-green-500 text-green-600 hover:bg-green-100 transition">View Details</Link>
                                    <Link to={`/checkout/${product.id}`} className="flex-1 px-4 py-2 rounded-full text-xm font-medium bg-green-500 text-white hover:bg-green-600 transition">Quick Buy</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;