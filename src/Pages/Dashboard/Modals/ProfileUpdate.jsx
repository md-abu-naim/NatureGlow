import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ProfileUpdate = ({ setOpenUpdateModal, setCurrentUser, currentUser }) => {
    const [profile_url, setProfile_url] = useState(null)
    const [cover_url, setCover_url] = useState(null)
    const axiosSecure = useAxiosSecure()

    const handleProfile = e => {
        const img = e.target.files[0]
        const formData = new FormData()
        formData.append('image', img)
        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`, formData)
            .then(res => {
                setProfile_url(res.data.data.display_url)
            })
    }

    const handleCover = e => {
        const img = e.target.files[0]
        const formData = new FormData()
        formData.append('image', img)
        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`, formData)
            .then(res => {
                setCover_url(res.data.data.display_url)
            })
    }

    const handleUpdateUser = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const profile = profile_url || currentUser.profile
        const cover = cover_url || currentUser.cover

        const updateUser = { ...currentUser, name, profile, cover }
        console.log(updateUser);

        axiosSecure.put(`/user/${currentUser._id}`, updateUser)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Product Updated successfully!",
                        icon: "success",
                        draggable: true,
                        timer: 2300,
                        background: '#dcfce7',
                    });
                    setOpenUpdateModal(false)
                    setCurrentUser(prev => ({ ...prev, name, profile, cover }))
                }
            })

    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-green-100 w-full max-w-md rounded-lg p-6 shadow-lg border border-green-300">
                <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Update Profile</h2>
                <form onSubmit={handleUpdateUser} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input defaultValue={currentUser?.name} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Type Full Name" type="text" name="name" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Profile</label>
                        <input onChange={handleProfile} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" type='file' name="profile" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Cover</label>
                        <input onChange={handleCover} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" type='file' name="cover" />
                    </div>

                    <div className="flex justify-end gap-4 p-2">
                        <button onClick={() => setOpenUpdateModal(false)} type="button" className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cansel</button>
                        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdate;