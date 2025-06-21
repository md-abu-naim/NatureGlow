
const NewArrivals = () => {
    return (
        <div className="text-center my-16 px-2">
            <div className="w-fit mx-auto border-x-4 border-green-500 px-6 py-2 rounded-md">
                <h1 className="text-xl md:text-3xl font-bold leading-tight">New Arrivals</h1>
                <h3 className="font-medium text-green-500 text-sm mt-1">Nature’s newest touch.</h3>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
                <div className="group shadow-xl rounded-3xl p-5 relative hover:shadow-2xl transition duration-300">
                    <div className="overflow-hidden rounded-xl">
                        <img className="w-full h-52 object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" src="https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg" alt="" />
                    </div>
                    <div className="space-y-2 mt-4">
                        <h3 className="text-lg font-bold text-green-500 transition">Green Tea Cream</h3>
                        <p className="text-sm italic group-hover:text-green-500">Face Care</p>
                        <p className="text-gray-700 text-sm">Lightweight cream with aloe & green tea for nourished skin.</p>
                        <div className="flex items-center justify-between pt-2">
                            <span className="text-green-500 font-bold text-md">$8.50</span>
                            <span className="text-sm bg-green-100 text-green-500">In Stock</span>
                        </div>
                        <div className="flex gap-3 w-full pt-3">
                            <button className="flex-1 px-4 py-2 rounded-full text-sm font-medium border border-green-500 text-green-600 hover:bg-green-100 transition">View Details</button>
                            <button className="flex-1 px-4 py-2 rounded-full text-xm font-medium bg-green-500 text-white hover:bg-green-600 transition">Quick Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;