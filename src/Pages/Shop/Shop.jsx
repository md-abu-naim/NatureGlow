import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaFilter, FaSearch, FaTimes } from 'react-icons/fa';
import AllProducts from './AllProducts';

const Shop = () => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className='px-4 md:px-10 py-10'>
            {/* Page Title */}
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>Explore Natural Beauty</h1>
                <p className='text-green-600 text-sm mt-2'>Find the perfect organic essentials for your everyday self-care</p>
            </section>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-5'>
                {/* Filters Sidebar */}
                <aside className={`md:col-span-1  ${showFilters ? 'block' : 'hidden'} md:block`}>
                    <div className='bg-green-50 p-4 rounded-lg shadow py-4'>
                        {/* Category Filters */}
                        <div className='mb-6'>
                            <h3 className='font-semibold text-green-800 mb-2'>Category</h3>
                            <ul className="space-y-2 text-sm">
                                <li><input type="radio" name="category" className="mr-2" />All</li>
                                <li><input type="radio" name="category" className="mr-2" />Face Care</li>
                                <li><input type="radio" name="category" className="mr-2" />Body Care</li>
                                <li><input type="radio" name="category" className="mr-2" />Hair Care</li>
                                <li><input type="radio" name="category" className="mr-2" />Lip Care</li>
                            </ul>
                        </div>

                        {/* Pricr Range */}
                        <div>
                            <h3 className="font-semibold text-green-800 mb-2">Price Range</h3>
                            <input type="range" min='0' max='5000' className="w-full text-green-500" />
                        </div>

                        {/* Status Filter */}
                        <div>
                            <h3 className="font-semibold text-green-800 mb-2">Availability</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <input type="checkbox" id="status-instock" className='mr-2' />
                                    <label htmlFor="status-instock" className="cursor-pointer select-none">In Stock</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="status-soldout" className='mr-2' />
                                    <label htmlFor="status-soldout" className="cursor-pointer select-none">Sold Out</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="status-lowstock" className='mr-2' />
                                    <label htmlFor="status-lowstock" className="cursor-pointer select-none">Low Stock</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>

                <div className='md:col-span-3'>
                    <section className='flex flex-col md:flex-row justify-between items-center bg-green-50 p-5 gap-4 rounded-lg mb-6'>
                        {/* Search Bar */}
                        <form className='w-full  '>
                            <div className='relative'>
                                <input placeholder="Search products..." className="w-full px-4 pr-16 py-2 border border-green-300 rounded-full shadow-sm focus:outline-none" type="text" name="search" />
                                <button type='submit' className="absolute top-1/2 -translate-y-1/2 right-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm transition">Search..</button>
                            </div>
                        </form>

                        {/* Sorting */}
                        <select className="border border-green-300 rounded-full px-4 py-2 focus:outline-none w-full md:w-auto">
                            <option>Sort By</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest</option>
                            <option>Best Selling</option>
                        </select>

                        {/* Filter Toffle Button for Mobile */}
                        <div className='md:hidden mb-4 text-center flex items-center justify-center'>
                            <button onClick={() => setShowFilters(!showFilters)} className='flex items-center gap-4 px-4 py-2 bg-green-500 text-white rounded-full shadow-md'><FaFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}</button>
                        </div>
                    </section>

                    {/* Products Displaying */}
                    <AllProducts />

                    {/* Pagination */}
                    <div className='mt-10 flex justify-center items-center gap-3'>
                        {/* Previous Button */}
                        <button className='flex items-center gap-1 px-4 py-2 text-sm border border-green-300 rounded-full hover:bg-green-500 hover:text-white transition'> <FaArrowLeft /> Prev</button>

                        {/* Number of Page */}
                        {
                            [1, 2, 2].map(num => <button key={num} className='px-4 py-2 rounded-full border border-green-300 text-green-700 hover:bg-green-500 hover:text-white transition'>{num}</button>)
                        }

                        {/* Next Button */}
                        <button className='flex items-center gap-1 px-4 py-2 text-sm border border-green-300 rounded-full hover:bg-green-500 hover:text-white transition'>Next <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;