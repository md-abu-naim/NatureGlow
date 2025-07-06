import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/Product.json')
            .then(res => setProducts(res.data))
    }, [setProducts])
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                products?.map(product => <div key={product.id} className="group text-center shadow-xl rounded-3xl p-5 relative hover:shadow-2xl transition duration-300">
                    <div className="overflow-hidden rounded-xl">
                        <img className="w-full h-52 object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" src={product.image} alt={product.name} />
                    </div>
                    <div className="space-y-2 mt-4">
                        <h3 className="text-lg font-bold text-green-500 transition">{product.name}</h3>
                        <p className="text-sm italic group-hover:text-green-500">{product.category}</p>
                        <p className="text-gray-700 text-sm">{product.shortBio}</p>
                        <div className="flex items-center justify-between pt-2">
                            <span className="text-green-500 font-bold text-md">${product.price}</span>
                            <span className="text-sm bg-green-100 text-green-500">{product.status}</span>
                        </div>
                        <div className="flex gap-3 w-full pt-3">
                            <Link to={`/details/${product.id}`} className="flex-1 px-4 py-2 rounded-full text-sm font-medium border border-green-500 text-green-600 hover:bg-green-100 transition">View Details</Link>
                            <Link to={`/checkout/${product.id}`} className="flex-1 px-4 py-2 rounded-full text-xm font-medium bg-green-500 text-white hover:bg-green-600 transition">Quick Buy</Link>
                        </div>
                    </div>
                </div>)
            }
        </section>
    );
};

export default AllProducts;