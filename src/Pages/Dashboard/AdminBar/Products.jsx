import { FaEdit, FaStar, FaTrash } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router-dom";

const Products = () => {
    const {data} = useLoaderData()
    const products = data

    const ratings = parseFloat(4.5)
    return (
        <div>
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>Manage All Products</h1>
                <p className='text-green-600 text-sm mt-2'>View, update, or remove products from your store inventory.</p>
            </section>
            <form className='w-full bg-green-100 mt-3 p-3 rounded-lg'>
                <div className='relative lg:w-2xl mx-auto'>
                    <input placeholder="Search user name..." className="w-full px-4 pr-16 py-2 bg-green-50 border border-green-300 rounded-full shadow-sm focus:outline-none" type="text" name="search" />
                    <button type='submit' className="absolute top-1/2 -translate-y-1/2 right-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm transition">Search..</button>
                </div>
            </form>

            <section className="mt-7 overflow-x-auto rounded-lg shadow-lg border border-green-300">
                <div className="bg-green-100 border-b flex justify-between items-center px-3 py-2 border-green-300">
                    <h1 className="text-lg font-bold text-green-800">All Products List</h1>
                    <NavLink to="/dashboard/addProduct" className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-lg transition">Add Product</NavLink>
                </div>
                <table className="min-w-full text-sm text-left table-auto">
                    <thead className="bg-green-100 text-green-800 font-semibold">
                        <tr>
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Image & Name</th>
                            <th className="py-3 px-4">Category</th>
                            <th className="py-3 px-4">Price</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Ratings</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 divide-y divide-green-100">
                        {
                            products?.map((product, i) => (
                                <tr key={i} className="hover:bg-green-100 transition-all">
                                    <td className="px-4 py-3 font-semibold">{i + 1}</td>
                                    <td className="px-4 py-3 flex items-center gap-1">
                                        <img src={product.image} className="w-12 h-12 object-cover rounded-md border border-green-300" alt={product.name} />
                                        <h5>{product.name}</h5>
                                    </td>
                                    <td className="px-4 py-3">{product.category}</td>
                                    <td className="px-4 py-3 font-sans font-semibold">$ {product.price}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 text-sm font-semibold rounded-full ${product.status === 'Low Stock' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}`}>{product.status}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full shadow-sm">
                                                <FaStar className="text-yellow-400 mr-1" />
                                                <span className="font-semibold text-sm">{ratings}</span>
                                            </div>
                                            <span className="text-gray-600 text-sm">55 Reviews</span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 flex items-center justify-center gap-4 text-green-600">
                                        <NavLink to={`/dashboard/update/${product._id}`} title="Edit"><FaEdit className="hover:text-green-800 transition text-xl" /></NavLink>
                                        <button title="Delete"><FaTrash className="hover:text-red-500 transition text-xl" /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Products;