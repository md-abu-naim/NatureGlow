
const Newsletter = () => {
    return (
        <div>
            <div className="bg-green-50 py-16 px-4 md:px-10 rounded-3xl shadow-inner my-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-green-800">Subscribe to Our Newsletter</h2>
                    <p className="text-green-600 text-sm mt-2">Be the first to know about new arrivals, exclusive offers & natural beauty tips.</p>
                </div>

                <form className="flex flex-col md:flex-row items-center gap-4 max-w-xl mx-auto">
                    <input className="input input-borderd bg-green-200 hover:bg-green-300 w-full flex-1 shadow-inner py-2 rounded-full border-2 border-green-500" type="email" placeholder="Enter your email" />
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition w-full md:w-auto duration-300" type="submit">Subscribe</button>
                </form>
                <p className="text-center text-xs text-gray-700 mt-6">We care about your privacy. No spam. Unsubscribe anytime.</p>
            </div>
        </div>
    );
};

export default Newsletter;