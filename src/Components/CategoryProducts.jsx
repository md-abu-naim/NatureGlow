import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CategoryProducts = () => {
  const [products, setProducts] = useState()
  const [search, setSearch] = useState('')
  const { category } = useParams()


  const handleSearch = e => {
    const search = e.target.value
    setSearch(search)
  }

  console.log(products);

  useEffect(() => {
        axios(`http://localhost:3000/products/${category}?search=${search}`)
            .then(res => {
                setProducts(res.data)
            })
    }, [category, search])
  return (
    <div className='lg:mx-10 px-4 py-10'>
      {/* Page Title */}
      <section className='bg-green-100 py-8 text-center rounded-lg'>
        <h1 className='text-4xl font-extrabold text-green-800'>{category} Products</h1>
        <p className='text-green-600 text-sm mt-2'> Discover the best of our curated <span className="font-semibold">{category}</span> collection, designed to naturally nourish and enhance your beauty.</p>
      </section>

      <section className='flex flex-col md:flex-row justify-center items-center bg-green-50 p-5 mt-7 gap-4 rounded-lg mb-6'>
        {/* Search Bar */}
        <form className='w-3xl  '>
          <div className='relative'>
            <input onChange={handleSearch} placeholder="Search your fvrt products..." className="w-full px-4 pr-16 py-2 border border-green-300 rounded-full shadow-sm focus:outline-none" type="text" name="search" />
            <button type='submit' className="absolute top-1/2 -translate-y-1/2 right-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm transition">Search..</button>
          </div>
        </form>

        {/* Sorting */}
        <select className="border border-green-300 rounded-full px-4 py-2 focus:outline-none w-full md:w-auto">
          <option>Sort By</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price-dsc">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="best">Best Selling</option>
        </select>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10">
        {
          products?.map(product => <div key={product._id} className="group shadow-xl rounded-3xl p-5 relative hover:shadow-2xl transition duration-300">
            <div className="overflow-hidden rounded-xl">
              <img className="w-full h-52 object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" src={product.image} alt={product.name} />
            </div>
            <div className="space-y-2 mt-4">
              <h3 className="text-lg font-bold text-green-500 transition">{product.name}</h3>
              <p className="text-sm italic group-hover:text-green-500">{product.category}</p>
              <p className="text-gray-700 text-sm">{product.shortBio}</p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-green-500 font-bold text-md">${product.price}</span>
                <span className="text-sm bg-green-100 text-green-500 p-1.5 rounded-lg">{product.status}</span>
              </div>
              <div className="flex gap-3 w-full pt-3">
                <Link to={`/details/${product._id}`} className="flex-1 px-4 py-2 rounded-full text-sm font-medium border border-green-500 text-green-600 hover:bg-green-100 transition">View Details</Link>
                <Link to={`/checkout/${product._id}`} className="flex-1 px-4 py-2 rounded-full text-xm font-medium bg-green-500 text-white hover:bg-green-600 transition">Quick Buy</Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default CategoryProducts;