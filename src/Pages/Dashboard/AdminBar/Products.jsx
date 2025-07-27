import { FaEdit, FaTrash } from "react-icons/fa";

const Products = () => {
    const products = [
        {
            _id: '1',
            name: 'Aloe Vera Face Gel',
            category: 'Face Care',
            price: 18,
            status: 'In Stock',
            image: 'https://i.ibb.co/z7kQQsX/aloe-vera.jpg'
        },
        {
            _id: '2',
            name: 'Herbal Hair Oil',
            category: 'Hair Care',
            price: 25,
            status: 'Low Stock',
            image: 'https://i.ibb.co/3sSM0Tg/hair-oil.jpg'
        },
        {
            _id: '3',
            name: 'Natural Lip Balm',
            category: 'Lip Care',
            price: 10,
            status: 'Sold Out',
            image: 'https://i.ibb.co/hWfR4b7/lip-balm.jpg'
        },
    ];
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
                <table className="min-w-full text-sm text-left table-auto">
                    <thead className="bg-green-100 text-green-800 font-semibold">
                        <tr>
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Category</th>
                            <th className="py-3 px-4">Price</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 divide-y divide-green-100">
                        {
                            products?.map((product, i) => (
                                <tr key={product.id} className="hover:bg-green-100 transition-all">
                                    <td className="px-4 py-3 font-semibold">{i + 1}</td>
                                    <td className="px-4 py-3 "><img src={product.image}className="w-12 h-12 object-cover rounded-md border border-green-300" alt={product.name}/></td>
                                    <td className="px-4 py-3 ">{product.name}</td>
                                    <td className="px-4 py-3 ">{product.category}</td>
                                    <td className="px-4 py-3 ">{product.price}</td>
                                    <td className="px-4 py-3 ">{product.status}</td>
                                    <td className="px-6 py-4 flex items-center justify-center gap-4 text-green-600">
                                        <button title="Edit"><FaEdit className="hover:text-green-800 transition text-xl" /></button>
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