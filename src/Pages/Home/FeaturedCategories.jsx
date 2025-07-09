import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('/Categories.json')
            .then(res => setCategories(res.data))
    }, [setCategories])

    return (
        <section className="text-center my-20 px-2">
            <div className="w-fit mx-auto  px-6 py-2 rounded-md">
                <h1 className="text-xl md:text-3xl font-bold leading-tight">Featured Categories</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-5">
                {
                    categories?.map(category => <Link to={`/category/${category.name}`} key={category.id} className="group p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
                        <img className="w-24 h-24 mx-auto border-2 border-green-200 rounded-full object-cover group-hover:border-green-500 transition-all duration-300" src={category.image} alt="" />
                        <h2 className="text-xl font-semibold mt-4 group-hover:text-green-600 transition-colors duration-300">{category.name}</h2>
                        <p className="font-medium">{category.description}</p>
                    </Link>)
                }
            </div>
        </section>
    );
};

export default FeaturedCategories;
