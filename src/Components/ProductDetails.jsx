import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams(); // Optional: for dynamic data

    // Example static product data
    const product = {
        id: 1,
        name: 'Aloe Vera Hydrating Gel',
        price: 18,
        image: 'https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp',
        category: 'Face Care',
        description: 'Soothe, hydrate, and rejuvenate your skin with 100% organic aloe vera gel. Ideal for sensitive or irritated skin.',
        status: 'In Stock',
        ingredients: ['Organic Aloe Vera', 'Vitamin E', 'Rose Extract'],
    };
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
                                product.ingredients.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <span className={`text-sm font-medium bg-green-200 p-1.5 rounded-lg ${product.status === 'In Stock' ? 'text-green-600' : 'text-red-500'}`}>{product.status}</span>
                    <div className="space-y-3 mt-4">
                        <button className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all text-center">Add to Cart</button>
                        <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all text-center">Add to Cart</button>
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