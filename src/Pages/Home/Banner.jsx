import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex justify-between items-center border bg-[url("/bg.jpg")] '>
            <div>
                <h6>Hey, Welcome to</h6>
                <h1>NatureGlow</h1>
                <p>Discover our handcrafted organic skincare products made with botanical ingredients. Free from toxins, full of love — because your skin deserves the best nature has to offer.</p>
                <Link to={'/shop'}>SHOP NOW</Link>
            </div>
            <div>
                <img src="/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;