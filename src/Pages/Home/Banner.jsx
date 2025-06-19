import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center pt-5 md:pt-0 md:mx-10 my-10 rounded-2xl bg-[url("/bg.jpg")] '>
            <div className='md:w-1/2 md:pl-10 lg:pl-20 p-5'>
                <h6 className='font-medium md:font-semibold'>Hey, Welcome to</h6>
                <h1 className='font-black text-4xl lg:text-6xl md:py-2 lg:py-3'>NatureGlow</h1>
                <p className='pb-5'>Discover our handcrafted organic skincare products made with botanical ingredients. Free from toxins, full of love — because your skin deserves the best nature has to offer.</p>
                <Link to={'/shop'} className='border-b-2 hover:bg-yellow-50 p-2' >SHOP NOW</Link>
            </div>
            <div className='md:w-1/2 flex items-center justify-center'>
                <img className='lg:h-[500px]' src="/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;