import { FaCheckCircle, FaLeaf, FaRegHeart } from "react-icons/fa";
import Team from "./Team";
import Newsletter from "../Home/Newsletter";

const About = () => {
    return (
        <div className="px-4 md:px-10 py-10">
            {/* Page Title */}
            <section className='bg-green-100 py-10 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>Naturally You, Naturally Us</h1>
                <p className='text-green-600 text-sm mt-2'> At NatureGlow, we blend the wisdom of nature with the science of skincare to bring you gentle, effective, and eco-conscious beauty.</p>
            </section>

            {/* Our Jurney */}
            <section className="flex flex-col md:flex-row-reverse items-center bg-green-50 rounded-md p-5 md:p-16 my-16 shadow-lg">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                    <h2 className="text-4xl font-extrabold text-green-800 mb-4">Our Journey Toward Pure & Honest Skincare</h2>
                    <p className="text-green-700 mb-6 leading-relaxed">Born out of a passion for purity and nature, NatureGlow started with a simple goal — to provide skincare solutions that are clean, cruelty-free, and deeply nourishing. What began in a small home kitchen is now trusted by thousands across the country.</p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img className="rounded-3xl w-full max-h-96 shadow-lg border border-green-200" src="/Brand.png" alt="" />
                </div>
            </section>

            {/* Mission & Values */}
            <section className="bg-green-100 p-8 rounded-2xl shadow grid grid-cols-1 md:grid-cols-3 gap-14">
                <div>
                    <FaLeaf className="text-green-600 text-3xl mb-2" />
                    <h3 className="font-semibold text-xl text-green-800 mb-1">Natural Ingredients</h3>
                    <p className="text-sm text-gray-600">We use only ethically sourced, toxin-free ingredients inspired by nature.</p>
                </div>
                <div>
                    <FaRegHeart className="text-green-600 text-3xl mb-2" />
                    <h3 className="font-semibold text-xl text-green-800 mb-1">Kind to All</h3>
                    <p className="text-sm text-gray-600">Our products are 100% cruelty-free and safe for all skin types — even the most sensitive.</p>
                </div>
                <div>
                    <FaCheckCircle className="text-green-600 text-3xl mb-2" />
                    <h3 className="font-semibold text-xl text-green-800 mb-1">Transparency</h3>
                    <p className="text-sm text-gray-600">We proudly share our ingredients and sourcing practices to empower your choices.</p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="text-center my-16 space-y-4">
                <h2 className="text-2xl font-black text-green-800">Why Choose NatureGlow?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Because your skin deserves more than chemicals. We offer handcrafted, eco-friendly skincare powered by nature and perfected by science — with love in every jar.</p>
            </section>

            {/* Meet the Team */}
            <Team />

            {/* Newsletter Section */}
            <Newsletter />
        </div>

    );
};

export default About;



