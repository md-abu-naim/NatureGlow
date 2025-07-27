
const Products = () => {
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
        </div>
    );
};

export default Products;

// import { useEffect, useState } from 'react';

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Dummy data for UI
//     const dummy = [
//       {
//         _id: '1',
//         name: 'Aloe Vera Face Gel',
//         category: 'Face Care',
//         price: 18,
//         stock: 'In Stock',
//         image: 'https://i.ibb.co/z7kQQsX/aloe-vera.jpg'
//       },
//       {
//         _id: '2',
//         name: 'Herbal Hair Oil',
//         category: 'Hair Care',
//         price: 25,
//         stock: 'Low Stock',
//         image: 'https://i.ibb.co/3sSM0Tg/hair-oil.jpg'
//       },
//       {
//         _id: '3',
//         name: 'Natural Lip Balm',
//         category: 'Lip Care',
//         price: 10,
//         stock: 'Sold Out',
//         image: 'https://i.ibb.co/hWfR4b7/lip-balm.jpg'
//       },
//     ];
//     setProducts(dummy);
//   }, []);

//   return (
//     <section className="p-6 bg-white rounded-xl shadow-md">
//       <h1 className="text-2xl font-bold text-green-700 mb-4">Manage All Products</h1>

//       <div className="overflow-x-auto rounded-lg border border-green-200">
//         <table className="min-w-full text-sm text-left table-auto">
//           <thead className="bg-green-100 text-green-800 font-semibold">
//             <tr>
//               <th className="py-3 px-4">#</th>
//               <th className="py-3 px-4">Image</th>
//               <th className="py-3 px-4">Product Name</th>
//               <th className="py-3 px-4">Category</th>
//               <th className="py-3 px-4">Price</th>
//               <th className="py-3 px-4">Stock</th>
//               <th className="py-3 px-4 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700 divide-y divide-green-100">
//             {products.map((product, index) => (
//               <tr key={product._id} className="hover:bg-green-50 transition-all">
//                 <td className="px-4 py-3 font-semibold">{index + 1}</td>
//                 <td className="px-4 py-3">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-12 h-12 object-cover rounded-md border border-green-300"
//                   />
//                 </td>
//                 <td className="px-4 py-3">{product.name}</td>
//                 <td className="px-4 py-3">{product.category}</td>
//                 <td className="px-4 py-3">${product.price}</td>
//                 <td className="px-4 py-3">
//                   <span className={`px-2 py-1 text-xs font-semibold rounded-full 
//                     ${product.stock === 'In Stock' ? 'bg-green-200 text-green-800' :
//                       product.stock === 'Low Stock' ? 'bg-yellow-200 text-yellow-800' :
//                         'bg-red-200 text-red-800'}`}>
//                     {product.stock}
//                   </span>
//                 </td>
//                 <td className="px-4 py-3 flex items-center justify-center gap-2">
//                   <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs">
//                     Update
//                   </button>
//                   <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default AllProducts;
