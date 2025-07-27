
const AddProduct = () => {
    return (
        <div>
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>Add a New Product</h1>
                <p className='text-green-600 text-sm mt-2'>Easily add your product details here — upload images, write descriptions, set pricing, and categorize your products to reach your customers better.</p>
            </section>

            <section className="bg-green-50 mt-6 p-5 rounded-2xl shadow border border-green-400">
                <form className="">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full">
                            <label className="block text-green-700 font-medium mb-1">Name*</label>
                            <input type="text" name="" className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Enter product name..." required />
                        </div>
                        <div className="w-full">
                            <label className="block text-green-700 font-medium mb-1">Price*</label>
                            <input type="number" name="" className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Enter product price..." required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 mt-4">
                        <div className="w-full">
                            <label className="block text-green-700 font-medium mb-1">Category*</label>
                            <select name="category" className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50">
                                <option selected disabled>Select a category</option>
                                <option value="Face Care">Face Care</option>
                                <option value="Body Care">Body Care</option>
                                <option value="Hair Care">Hair Care</option>
                                <option value="Lip Care">Lip Care</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="block text-green-700 font-medium mb-1">Status</label>
                            <select name="category" className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50">
                                <option value="In Stock">In Stock</option>
                                <option value="Low Stock">Low Stock</option>
                                <option value="Cooming soon">Coming Soon</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 mt-4">
                        <div>
                            <label className="block text-green-700 font-medium mb-1">Image</label>
                            <input type="file" name="image" accept="image/*" className="w-full px-3 py-2 border border-green-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-green-100 file:text-green-700 hover:file:bg-green-200" />
                        </div>
                        {/* <div className="flex items-center justify-center">
                            {selectedImage ? (
                                <img src={selectedImage} alt="Preview" className="h-24 rounded-md" />
                            ) : (
                                <div className="text-gray-400">No image selected</div>
                            )}
                        </div> */}
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;

// const AddProduct = () => {
//     const [selectedImage, setSelectedImage] = useState(null);

// const handleImagePreview = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//         setSelectedImage(URL.createObjectURL(file));
//     }
// };

//     return (
//         <div className="bg-green-50 min-h-screen px-6 py-8">
//             <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow border border-green-200">
//                 <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Product Name */}
//                     <div className="col-span-2">
//                         <label className="block text-green-700 font-medium mb-1">Product Name</label>
//                         <input type="text" name="name" placeholder="Enter product name"
//                             className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//                             required />
//                     </div>

//                     {/* Image Upload */}
// <div>
//     <label className="block text-green-700 font-medium mb-1">Product Image</label>
//     <input type="file" name="image" accept="image/*" onChange={handleImagePreview}
//         className="w-full px-3 py-2 border rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-green-100 file:text-green-700 hover:file:bg-green-200" />
// </div>

//                     {/* Image Preview */}
// <div className="flex items-center justify-center">
//     {selectedImage ? (
//         <img src={selectedImage} alt="Preview" className="h-24 rounded-md" />
//     ) : (
//         <div className="text-gray-400">No image selected</div>
//     )}
// </div>

//                     {/* Price */}
//                     <div>
//                         <label className="block text-green-700 font-medium mb-1">Price ($)</label>
//                         <input type="number" name="price" placeholder="Enter price"
//                             className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" required />
//                     </div>

//                     {/* Category */}
// <div className="col-span-2">
//     <label className="block text-green-700 font-medium mb-1">Category</label>
//     <select name="category"
//         className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">
//         <option disabled selected>Select a category</option>
//         <option value="Face Care">Face Care</option>
//         <option value="Hair Care">Hair Care</option>
//         <option value="Body Care">Body Care</option>
//         <option value="Lip Care">Lip Care</option>
//     </select>
// </div>

//                     {/* Status */}
//                     <div>
//                         <label className="block text-green-700 font-medium mb-1">Status</label>
//                         <select name="status"
//                             className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">
//                             <option value="In Stock">In Stock</option>
//                             <option value="Sold Out">Sold Out</option>
//                             <option value="Coming Soon">Coming Soon</option>
//                         </select>
//                     </div>

//                     {/* Short Bio */}
//                     <div className="col-span-2">
//                         <label className="block text-green-700 font-medium mb-1">Short Bio</label>
//                         <textarea name="shortBio" rows="2" placeholder="A short one-liner about the product"
//                             className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//                     </div>

//                     {/* Description */}
//                     <div className="col-span-2">
//                         <label className="block text-green-700 font-medium mb-1">Full Description</label>
//                         <textarea name="description" rows="4" placeholder="Describe the product in detail"
//                             className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//                     </div>

//                     {/* Features */}
//                     <div className="col-span-2">
//                         <label className="block text-green-700 font-medium mb-1">Key Features</label>
//                         <textarea name="features" rows="3" placeholder="List features, separated by commas or lines"
//                             className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//                     </div>

//                     {/* Buttons */}
//                     <div className="col-span-2 flex justify-end gap-4">
//                         <button type="reset" className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Reset</button>
//                         <button type="submit" className="px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700">Add Product</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddProduct;

