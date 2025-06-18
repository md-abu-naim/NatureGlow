import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex justify-between items-center bg-[url("/bg.jpg")] '>
            <div className='w-1/2 border pl-9'>
                <h6 className='font-semibold'>Hey, Welcome to</h6>
                <h1 className='font-black text-6xl'>NatureGlow</h1>
                <p>Discover our handcrafted organic skincare products made with botanical ingredients. Free from toxins, full of love — because your skin deserves the best nature has to offer.</p>
                <Link to={'/shop'}>SHOP NOW</Link>
            </div>
            <div className='w-1/2 flex items-center justify-center border'>
                <img className='h-[500px]' src="/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;