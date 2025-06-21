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
        <div className=" px-5">
            <div className="text-center mb-14">
                <h2 className="text-3xl font-bold text-green-800">What Customers Are Saying</h2>
                <p className="text-green-600 text-sm mt-2">Real stories from happy skin</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
        </div>
    );
};

export default Testimonials;