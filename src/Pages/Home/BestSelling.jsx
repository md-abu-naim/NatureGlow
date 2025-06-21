import axios from "axios";
import { useEffect, useState } from "react";

const BestSelling = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/Product.json')
        .then(res => setProducts(res.data))
    },[setProducts])
    return (
        <div className="text-center my-16 px-2">
            <div className="w-fit mx-auto border-x-4 border-green-500 px-6 py-2 rounded-md">
                <h1 className="text-xl md:text-3xl font-bold leading-tight">Best Selling Products</h1>
                <h3 className="font-medium text-green-500 text-sm mt-1">Loved by our customers, made by nature.</h3>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-10">
                {
                    products?.map(product => <div key={product.id} className="group border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-green-400 transition duration-300 p-4 text-center">
                        <div className="overflow-hidden rounded-lg">
                            <img className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" src={product.image} alt="" />
                        </div>
                        <h2 className="mt-4 text-lg font-semibold group-hover:text-green-500 transition">{product.name}</h2>
                        <p className="text-sm text-gray-700">{product.shortBio}</p>
                        <h5 className="mt-3 text-green-600 font-bold text-md">${product.price}</h5>
                        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-full text-sm font-medium hover:bg-green-600 transition"> Quick Purchase </button>
                    </div> )
                }
            </div>
        </div>
    );
};

export default BestSelling;