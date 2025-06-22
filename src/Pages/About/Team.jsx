
const Team = () => {
    return (
        <section className="bg-green-100 py-12 px-6 rounded-2xl">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                <div className="bg-green-50 rounded-xl p-6 shadow">
                    <img className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border border-green-200" src="https://i.postimg.cc/B6PjqBMM/Lip-Care.png" alt="" />
                    <h4 className="font-semibold text-green-700">Name</h4>
                    <p className="text-sm text-gray-500">Founder & Formulator</p>
                </div>
            </div>
        </section>
    );
};

export default Team;