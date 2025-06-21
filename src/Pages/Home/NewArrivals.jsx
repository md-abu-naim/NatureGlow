import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewArrivals = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/Product.json')
            .then(res => setProducts(res.data))
    }, [setProducts])
    return (
        <>
        <div className="text-center my-16 px-2">
            <div className="w-fit mx-auto border-x-4 border-green-500 px-6 py-2 rounded-md">
                <h1 className="text-xl md:text-3xl font-bold leading-tight">New Arrivals</h1>
                <h3 className="font-medium text-green-500 text-sm mt-1">Nature’s newest touch.</h3>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
                {
                    products?.map(product => <div key={product.id} className="group shadow-xl rounded-3xl p-5 relative hover:shadow-2xl transition duration-300">
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
                                <button className="flex-1 px-4 py-2 rounded-full text-sm font-medium border border-green-500 text-green-600 hover:bg-green-100 transition">View Details</button>
                                <button className="flex-1 px-4 py-2 rounded-full text-xm font-medium bg-green-500 text-white hover:bg-green-600 transition">Quick Buy</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

<section className="flex flex-col md:flex-row items-center bg-green-50 rounded-3xl p-8 md:p-16 my-16 shadow-lg">
        {/* Left Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <h2 className="text-4xl font-extrabold text-green-800 mb-4">
            Discover the Secret to Radiant Skin
          </h2>
          <p className="text-green-700 mb-6 leading-relaxed">
            Pamper yourself with our exclusive spa collection made from
            natural ingredients, designed to rejuvenate your skin and soul.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://i.postimg.cc/x1B4Ztw5/Exfoliating-Coffee-Body-Scrub.webp"
            alt="Spa Collection"
            className="rounded-3xl max-w-full h-auto shadow-lg"
          />
        </div>
      </section>
        </>
    );
};

export default NewArrivals;