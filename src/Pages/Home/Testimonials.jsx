import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        axios.get('/Testimonials.json')
        .then(res => setTestimonials(res.data))
    },[])
    return (
        <section className="px-5">
            <div className="w-fit mx-auto border-x-4 text-center border-green-500 px-6 py-2 rounded-md">
                <h1 className="text-xl md:text-3xl font-bold leading-tight">What Customers Are Saying</h1>
                <h3 className="font-medium text-green-500 text-sm mt-1">Real stories from happy skin</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-8">
                {
                    testimonials?.map(t => <div key={t.id} className="flex flex-col justify-between bg-green-50 border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                        <p className="text-gray-700 italic mb-4"> “{t.message}”</p>
                        <div className="flex gap-1 mb-6 text-yellow-500">
                            {
                                [...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < t.rating ? "text-yellow-400" : "text-gray-300"} />
                                ))
                            }
                        </div>
                        <div className="flex items-center gap-4 mt-auto">
                            <img className="w-12 h-12 rounded-full object-center border-2 border-green-400" src={t.image} alt="" />
                            <div>
                                <h4 className="font-semibold text-green-800">{t.name}</h4>
                                <p className="text-sm text-gray-500">{t.title}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Testimonials;