import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex justify-between items-center mx-10 rounded-2xl my-10 bg-[url("/bg.jpg")] '>
            <div className='w-1/2 mt-0 pt-0 pl-20'>
                <h6 className='font-semibold'>Hey, Welcome to</h6>
                <h1 className='font-black text-6xl py-3'>NatureGlow</h1>
                <p className='pb-5'>Discover our handcrafted organic skincare products made with botanical ingredients. Free from toxins, full of love — because your skin deserves the best nature has to offer.</p>
                <Link to={'/shop'} className='border-b-2 hover:bg-yellow-50 p-2' >SHOP NOW</Link>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <img className='h-[500px]' src="/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;