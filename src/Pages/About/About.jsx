import { FaCheckCircle, FaLeaf, FaRegHeart } from "react-icons/fa";

const About = () => {
    return (
        <div className="">
            <div className="px-4 md:px-10 py-10">
                {/* Page Title */}
                <div className='bg-green-50 py-10 text-center rounded-lg'>
                    <h1 className='text-4xl font-extrabold text-green-800'>Naturally You, Naturally Us</h1>
                    <p className='text-green-600 text-sm mt-2'> At NatureGlow, we blend the wisdom of nature with the science of skincare to bring you gentle, effective, and eco-conscious beauty.</p>
                </div>

                {/* Our Jurney */}
                <div className="flex flex-col md:flex-row-reverse items-center bg-green-50 rounded-md p-5 md:p-16 my-16 shadow-lg">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                        <h2 className="text-4xl font-extrabold text-green-800 mb-4">Our Journey Toward Pure & Honest Skincare</h2>
                        <p className="text-green-700 mb-6 leading-relaxed">Born out of a passion for purity and nature, NatureGlow started with a simple goal — to provide skincare solutions that are clean, cruelty-free, and deeply nourishing. What began in a small home kitchen is now trusted by thousands across the country.</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img className="rounded-3xl w-full max-h-96 shadow-lg border border-green-200" src="/Brand.png" alt="" />
                    </div>
                </div>

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
            </div>



            <div className="max-w-7xl mx-auto px-4 py-10 space-y-20">
                {/* Why Choose Us */}
                <section className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-green-800">Why Choose NatureGlow?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Because your skin deserves more than chemicals. We offer handcrafted, eco-friendly skincare powered by nature and perfected by science — with love in every jar.
                    </p>
                </section>

                {/* Meet the Team */}
                <section className="bg-green-50 py-12 px-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-green-800 text-center mb-8">Meet the Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-6 rounded-xl shadow">
                            <img src="https://i.postimg.cc/WbPnHts8/team1.jpg" alt="Founder" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
                            <h4 className="font-semibold text-green-700">Ayesha Rahman</h4>
                            <p className="text-sm text-gray-500">Founder & Formulator</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow">
                            <img src="https://i.postimg.cc/WzD7BtdM/team2.jpg" alt="Co-founder" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
                            <h4 className="font-semibold text-green-700">Nabil Hasan</h4>
                            <p className="text-sm text-gray-500">Co-founder & Marketing Lead</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow">
                            <img src="https://i.postimg.cc/fbgPrRR7/team3.jpg" alt="Customer Support" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
                            <h4 className="font-semibold text-green-700">Tania Alam</h4>
                            <p className="text-sm text-gray-500">Customer Experience Manager</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-green-100 py-10 px-6 rounded-2xl text-center">
                    <h2 className="text-2xl font-bold text-green-800 mb-2">Join Our Natural Beauty Movement</h2>
                    <p className="text-green-700 mb-4">Sign up for our newsletter and be the first to discover new products, beauty tips, and exclusive offers.</p>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition duration-300">Subscribe Now</button>
                </section>
            </div>
        </div>
    );
};

export default About;



