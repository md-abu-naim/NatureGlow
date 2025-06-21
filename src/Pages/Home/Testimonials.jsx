import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Ayesha Rahman",
            title: "Skincare Enthusiast",
            message:
                "The Rose Mist and Green Tea Cream have completely changed my skin! Everything feels natural and soft.",
            image: "https://i.postimg.cc/KYW4K3vM/user1.jpg",
            rating: 5,
        },
        {
            id: 2,
            name: "Tanvir Hasan",
            title: "Lifestyle Blogger",
            message:
                "I’m obsessed with the packaging and the glow these products give! Minimal, natural, and affordable.",
            image: "https://i.postimg.cc/BvY5XqtY/user2.jpg",
            rating: 4,
        },
        {
            id: 3,
            name: "Sadia Mahzabin",
            title: "Happy Customer",
            message:
                "Honestly, this is the best organic skincare I’ve used. My skin is brighter and feels so much better!",
            image: "https://i.postimg.cc/KzgyQFqD/user3.jpg",
            rating: 5,
        },
    ];


    return (
        <div>

            <div className="py-20 px-5 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-green-800">What Customers Are Saying</h2>
                    <p className="text-green-600 text-sm mt-2">Real stories from happy skin</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

            <section className="py-20 bg-white px-5 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-green-800">What Customers Are Saying</h2>
                    <p className="text-green-600 text-sm mt-2">Real stories from happy skin</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="bg-green-50 border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
                        >
                            <p className="text-gray-700 italic mb-4">“{t.message}”</p>

                            {/* ⭐ Star Rating */}
                            <div className="flex gap-1 mb-6 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < t.rating ? "text-yellow-400" : "text-gray-300"} />
                                ))}
                            </div>

                            {/* 👤 User Info */}
                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-green-400"
                                />
                                <div>
                                    <h4 className="font-semibold text-green-800">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Testimonials;