import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center py-5 md:py-0 my-10 rounded-2xl bg-green-200 shadow-md overflow-hidden'>
            <div className='md:w-1/2 md:pl-10 lg:pl-20 p-5 text-center md:text-start'>
                <h6 className='font-medium md:font-medium text-green-500'>Hey, Welcome to</h6>
                <h1 className='font-black text-4xl lg:text-6xl md:py-2 lg:py-3'>NatureGlow</h1>
                <p className='pb-5 text-gray-700'>Discover our handcrafted organic skincare products made with botanical ingredients. Free from toxins, full of love — because your skin deserves the best nature has to offer.</p>
                <Link to={'/shop'} className='bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600 transition duration-300' >SHOP NOW</Link>
            </div>
            <div className='md:w-1/2 flex items-center justify-center'>
                <img className='w-[80%] max-w-[400px] lg:max-w-[500px] object-contain' src="/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;