import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const ProfileUpdate = ({setOpenUpdateModal}) => {
    const {user, updateUser, setUser} = useAuth()
    const handleUpdateUser = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const photoURL = e.target.photoURL.value
    updateUser(name, photoURL)
    setUser({
      ...user,
      displayName: name,
      photoURL: photoURL
    })
    Swal.fire({
      title: "Updated successfully!",
      icon: "success",
      draggable: true,
      timer: 1500,
      background: '#dcfce7',
    });
    setOpenUpdateModal(false)
  }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-green-100 w-full max-w-md rounded-lg p-6 shadow-lg border border-green-300">
                <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Update Profile</h2>
                <form onSubmit={handleUpdateUser} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" placeholder={user?.displayName} type="text" name="name" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Photo</label>
                        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" type='file' name="photoURL" />
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