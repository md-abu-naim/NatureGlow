import { Link } from "react-router-dom";

const PromoSection = () => {
    return (
        <div>

            <div className="flex flex-col md:flex-row items-center bg-green-50 rounded-md p-5 md:p-16 my-16 shadow-lg">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                    <h2 className="text-4xl font-extrabold text-green-800 mb-4">Discover the Secret to Radiant Skin</h2>
                    <p className="text-green-700 mb-6 leading-relaxed">Pamper yourself with our exclusive spa collection made from
                        natural ingredients, designed to rejuvenate your skin and soul.</p>
                    <Link to={'/shop'} className='bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-green-700 transition duration-300' >SHOP NOW</Link>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img className="rounded-3xl max-w-full shadow-lg border border-green-200" src="https://i.postimg.cc/x1B4Ztw5/Exfoliating-Coffee-Body-Scrub.webp" alt="" />
                </div>
            </div>

        </div>
    );
};

export default PromoSection;