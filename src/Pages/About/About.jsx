
const About = () => {
    return (
        <div>
            <section className="bg-green-50 py-16 px-4 md:px-10 rounded-3xl shadow-inner my-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Text Content */}
                    <div className="space-y-5">
                        <h2 className="text-4xl font-extrabold text-green-800">About NatureGlow</h2>
                        <p className="text-gray-700 leading-relaxed">
                            At NatureGlow, we believe that true beauty comes from nature. Our mission is to bring you skincare products that are free from toxins, full of botanical goodness, and crafted with love.
                        </p>
                        <p className="text-gray-600 text-sm">
                            From sourcing ethically harvested ingredients to ensuring every formula is suitable for sensitive skin — we’re here to care for your glow, naturally.
                        </p>
                        <ul className="list-disc list-inside text-green-700 font-medium space-y-1 pt-2">
                            <li>100% Organic & Cruelty-Free</li>
                            <li>Dermatologically Tested</li>
                            <li>Made in Bangladesh with Care</li>
                        </ul>
                        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="/about-img.png"
                            alt="About NatureGlow"
                            className="rounded-2xl shadow-md w-full max-w-md object-cover"
                        />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;