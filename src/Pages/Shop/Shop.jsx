import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaFilter, } from 'react-icons/fa';
import AllProducts from './AllProducts';
import useAxiosCommon from '../../Hooks/useAxiosCommon';

const Shop = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('')
    const [search, setSearch] = useState('')
    const [price, setPrice] = useState(0)
    const [sort, setSort] = useState('')
    const axiosCommon = useAxiosCommon()

    console.log(price);
    const handleSearch = e => {
        const search = e.target.value
        setSearch(search)
    }

    const handleSort = e => {
        const sort = e.target.value
        setSort(sort)
    }

    useEffect(() => {
        axiosCommon.get(`/products?search=${search}&sort=${sort}&category=${category}&price=${price}`)
            .then(res => {
                setProducts(res.data)
            })
    }, [axiosCommon, search, sort, category, price])

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
                                <li>
                                    <label htmlFor="all" className="cursor-pointer">
                                        <input onChange={() => setCategory('')} type="radio" value="All" id="all" name="category" className="mr-2 text-green-600 focus:ring-green-500" />
                                        All
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="face" className="cursor-pointer">
                                        <input onChange={(e) => setCategory(e.target.value)} type="radio" id="face" value='Face Care' name="category" className="mr-2 text-green-600 focus:ring-green-500" />
                                        Face Care
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="body" className="cursor-pointer">
                                        <input onChange={(e) => setCategory(e.target.value)} type="radio" id="body" value='Body Care' name="category" className="mr-2 text-green-600 focus:ring-green-500" />
                                        Body Care
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="hair" className="cursor-pointer">
                                        <input onChange={(e) => setCategory(e.target.value)} type="radio" id="hair" value='Hair Care' name="category" className="mr-2 text-green-600 focus:ring-green-500" />
                                        Hair Care
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="lip" className="cursor-pointer">
                                        <input onChange={(e) => setCategory(e.target.value)} type="radio" id="lip" value='Lip Care' name="category" className="mr-2 text-green-600 focus:ring-green-500" />
                                        Lip Care
                                    </label>
                                </li>
                            </ul>

                        </div>

                        {/* Pricr Range */}
                        <div>
                            <h3 className="font-semibold text-green-800 mb-2">Price Range</h3>
                            <input onChange={(e) => setPrice(e.target.value)} type="range" min='1' max='10' className="w-full text-green-600 focus:ring-green-500" />
                            <div className='flex items-center justify-between text-green-600'>
                                <p>min: $1</p>
                                <p>crnt:$ {price}</p>
                                <p>max: $10</p>
                            </div>
                        </div>

                        {/* Status Filter */}
                        <div className='mt-2'>
                            <h3 className="font-semibold text-green-800 mb-2">Availability</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <input value='In Stock' type="checkbox" id="status-instock" className='mr-2' />
                                    <label htmlFor="status-instock" className="cursor-pointer select-none focus:ring-green-500">In Stock</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="status-lowstock" value='Low Stock' className='mr-2' />
                                    <label htmlFor="status-lowstock" className="cursor-pointer select-none focus:ring-green-500">Low Stock</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="status-Coming" value='Coming Soon' className='mr-2' />
                                    <label htmlFor="status-Coming" className="cursor-pointer select-none focus:ring-green-500">Coming Soon</label>
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
                                <input onChange={handleSearch} placeholder="Search products..." className="w-full px-4 pr-16 py-2 border border-green-300 rounded-full shadow-sm focus:outline-none" type="text" name="search" />
                                <button type='submit' className="absolute top-1/2 -translate-y-1/2 right-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm transition">Search..</button>
                            </div>
                        </form>

                        {/* Sorting */}
                        <select onChange={handleSort} className="border border-green-300 rounded-full px-4 py-2 focus:outline-none w-full md:w-auto">
                            <option>Sort By</option>
                            <option value="price_asc">Price: Low to High</option>
                            <option value="price-dsc">Price: High to Low</option>
                            <option value="newest">Newest</option>
                            <option value="best">Best Selling</option>
                        </select>

                        {/* Filter Toffle Button for Mobile */}
                        <div className='md:hidden mb-4 text-center flex items-center justify-center'>
                            <button onClick={() => setShowFilters(!showFilters)} className='flex items-center gap-4 px-4 py-2 bg-green-500 text-white rounded-full shadow-md'><FaFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}</button>
                        </div>
                    </section>

                    {/* Products Displaying */}
                    <AllProducts products={products} />

                    {/* Pagination */}
                    <section className='mt-10 flex justify-center items-center gap-3'>
                        {/* Previous Button */}
                        <button className='flex items-center gap-1 px-4 py-2 text-sm border border-green-300 rounded-full hover:bg-green-500 hover:text-white transition'> <FaArrowLeft /> Prev</button>

                        {/* Number of Page */}
                        {
                            [1, 2, 3].map(num => <button key={num} className='px-4 py-2 rounded-full border border-green-300 text-green-700 hover:bg-green-500 hover:text-white transition'>{num}</button>)
                        }

                        {/* Next Button */}
                        <button className='flex items-center gap-1 px-4 py-2 text-sm border border-green-300 rounded-full hover:bg-green-500 hover:text-white transition'>Next <FaArrowRight /></button>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Shop;