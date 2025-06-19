
const FeaturedCategories = () => {
    return (
        <div className="text-center my-16">
            <div className="w-[450px] mx-auto border-b-4 p-2">
                <h1 className="text-3xl font-semibold pb-1.5">Featured Categories</h1>
                <h3 className="font-medium">Pick what your skin needs.</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-10">
                <div className="">
                    <img className="border-2 rounded-full" src="/Hair Care.png" alt="" />
                    <h2 className="text-2xl pt-2 font-semibold">Hair Care</h2>
                    <p className="font-medium">💡 Full body nourishing products</p>
                </div>
                <div className="">
                    <img className="border border-red-400 rounded-full" src="/Hair Care.png" alt="" />
                    <h2 className="text-2xl pt-1.5 font-semibold">Hair Care</h2>
                    <p className="font-medium">💡 Full body nourishing products</p>
                </div>
                <div className="">
                    <img className="border rounded-full" src="/Hair Care.png" alt="" />
                    <h2 className="text-2xl pt-1.5 font-semibold">Hair Care</h2>
                    <p className="font-medium">💡 Full body nourishing products</p>
                </div>
                <div className="">
                    <img className="border rounded-full" src="/Hair Care.png" alt="" />
                    <h2 className="text-2xl pt-1.5 font-semibold">Hair Care</h2>
                    <p className="font-medium">💡 Full body nourishing products</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCategories;