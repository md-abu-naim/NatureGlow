import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('/Categories.json')
        .then(res => setCategories(res.data))
    },[setCategories])

    return (
        <div className="text-center my-16">
            <div className="w-[450px] mx-auto border-b-4 p-2">
                <h1 className="text-3xl font-semibold pb-1.5">Featured Categories</h1>
                <h3 className="font-medium">Pick what your skin needs.</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-10">
                {
                    categories?.map(category => <div key={category.id} className="">
                    <img className="border-2 rounded-full" src={category.image} alt="" />
                    <h2 className="text-2xl pt-2 font-semibold">{category.name}</h2>
                    <p className="font-medium">{category.description}</p>
                </div>)
                }
            </div>
        </div>
    );
};

export default FeaturedCategories;