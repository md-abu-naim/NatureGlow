import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="">
            <div className="px-4 md:px-10 py-10">
                {/* Page Title */}
                <div className='bg-green-50 py-10 text-center rounded-lg'>
                    <h1 className='text-4xl font-extrabold text-green-800'>Rooted in Nature, Crafted with Care</h1>
                    <p className='text-green-600 text-sm mt-2'>NatureGlow is more than skincare — it's a promise of purity. Discover who we are, what we stand for, and how we bring the best of nature to your skin.</p>
                </div>
            </div>



            <div className="max-w-7xl mx-auto px-4 py-10 space-y-20">

                {/* Brand Story */}
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-green-800 mb-4">Our Story</h2>
                    <p className="text-green-700 text-sm leading-relaxed">
                        NatureGlow was born out of a deep passion for sustainable beauty. Tired of harsh chemicals and false promises, we turned to nature for answers. Every product we create is infused with love, care, and the healing touch of botanical ingredients. Our journey began in a small kitchen and has now blossomed into a trusted name for natural skincare.
                    </p>
                </section>

                {/* Mission & Values */}
                <section className="bg-green-100 py-10 px-6 md:px-12 rounded-3xl shadow-md">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Our Mission & Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <div className="p-4">
                            <h4 className="font-semibold text-green-700">100% Natural</h4>
                            <p className="text-sm text-gray-600">We use only natural, plant-based ingredients.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold text-green-700">Cruelty-Free</h4>
                            <p className="text-sm text-gray-600">No testing on animals, ever.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold text-green-700">Eco-Friendly</h4>
                            <p className="text-sm text-gray-600">Sustainable packaging and ethical sourcing.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold text-green-700">Handcrafted</h4>
                            <p className="text-sm text-gray-600">Every item is handmade in small batches for quality.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-green-800 mb-6">Why Choose NatureGlow?</h2>
                    <p className="text-green-700 text-sm leading-relaxed mb-4">
                        Our commitment goes beyond skincare. We believe in holistic wellness, ethical practices, and transparency. Our loyal customers trust us for consistency, honesty, and visible results.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <div className="p-4 bg-green-50 rounded-xl shadow">
                            <h4 className="font-semibold text-green-700">Visible Results</h4>
                            <p className="text-sm text-gray-600">Real improvements backed by real reviews.</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-xl shadow">
                            <h4 className="font-semibold text-green-700">Loved by Thousands</h4>
                            <p className="text-sm text-gray-600">Our community speaks for us.</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-xl shadow">
                            <h4 className="font-semibold text-green-700">No Harsh Chemicals</h4>
                            <p className="text-sm text-gray-600">Safe for all skin types, even sensitive ones.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-green-600 py-16 px-6 md:px-20 rounded-3xl text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Glow Naturally?</h2>
                    <p className="mb-6 text-sm max-w-xl mx-auto">
                        Explore our full range of handcrafted skincare solutions and experience the power of nature in every drop.
                    </p>
                    <Link
                        to="/shop"
                        className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full hover:bg-green-100 transition"
                    >
                        Shop Now
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default About;