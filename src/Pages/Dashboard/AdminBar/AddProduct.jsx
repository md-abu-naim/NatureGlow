import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddProduct = () => {
    const [image_url, setImage_url] = useState(null)
    const axiosSecure = useAxiosSecure()

    const handleImagePreview = e => {
        const img = e.target.files[0]
        const formData = new FormData()
        formData.append('image', img)
        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`, formData)
            .then(res => {
                setImage_url(res.data.data.display_url)
            })
    }

    const handleAddProduct = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const price = form.price.value
        const category = form.category.value
        const status = form.status.value
        const totalSold = 0
        const image = image_url
        const shortBio = form.shortBio.value
        const description = form.description.value
        const rawEeatures = form.features.valu
        const createdAt = new Date().toLocaleDateString()

        const features = rawEeatures?.split('\n').map(f => f.replace(/^-\s*/, '').trim()).filter(f => f)
        const product = { name, price, category, status, image, createdAt, totalSold, shortBio, description, features }

        axiosSecure.post('/product', product)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Product added successfully!",
                        icon: "success",
                        draggable: true,
                        timer: 2300,
                        background: '#dcfce7',
                    });
                    e.target.reset()
                }
            })

    }
    return (
        <div>
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>Add a New Product</h1>
                <p className='text-green-600 text-sm mt-2'>Easily add your product details here — upload images, write descriptions, set pricing, and categorize your products to reach your customers better.</p>
            </section>

            <section className="bg-green-50 mt-6 p-5 rounded-2xl shadow border border-green-400">
                <form onSubmit={handleAddProduct} className="">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full">
                            <label className="block text-green-700 font-medium mb-1">Name*</label>
                            <input type="text" name="name" className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Enter product name..." required />
                        </div>
                        <div className="w-full">
                            <label className="block text-green-700 font-medium mb-1">Price*</label>
                            <input type="number" name="price" className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Enter product price..." required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 mt-4">
                        <div className="w-full">
                            <label className="block text-green-700 font-medium mb-1">Category*</label>
                            <select name="category" className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50">
                                <option value="Face Care">Face Care</option>
                                <option value="Body Care">Body Care</option>
                                <option value="Hair Care">Hair Care</option>
                                <option value="Lip Care">Lip Care</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="block text-green-700 font-medium mb-1">Status</label>
                            <select name="status" className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50">
                                <option value="In Stock">In Stock</option>
                                <option value="Low Stock">Low Stock</option>
                                <option value="Cooming soon">Coming Soon</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 mt-4">
                        <div className=" w-full">
                            <label className="block text-green-700 font-medium mb-1">Image</label>
                            <input onChange={handleImagePreview} type="file" name="image" accept="image/*" className="w-full px-3 py-2 border border-green-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-green-100 file:text-green-700 hover:file:bg-green-200" />
                        </div>
                        <div className="flex items-center justify-center  w-full">
                            {image_url ? (
                                <img src={image_url} alt="Preview" className="h-24 rounded-md" />
                            ) : (
                                <div className="text-gray-400">No image selected</div>
                            )}
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <label className="block text-green-700 font-medium mb-1">Short Bio*</label>
                        <textarea name="shortBio" rows='2' className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50" placeholder="A short one-liner about the product"></textarea>
                    </div>
                    <div className="w-full mt-4">
                        <label className="block text-green-700 font-medium mb-1">Description</label>
                        <textarea name="description" rows='4' className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50" placeholder="A short one-liner about the product"></textarea>
                    </div>
                    <div className="w-full mt-4">
                        <label className="block text-green-700 font-medium mb-1">Description</label>
                        <textarea name="features" rows='3' className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50" placeholder={`Write features line by line:\n- Feature 1\n- Feature 2`}></textarea>
                    </div>
                    <div className="mt-5 flex justify-end gap-4">
                        <button type="reset" className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Reset</button>
                        <button type="submit" className="px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700">Add Product</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;