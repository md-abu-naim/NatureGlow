import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaLock, FaUnlock } from "react-icons/fa";

const Profile = () => {
  const { user, updateUser, setUser } = useAuth();
  const [activeUpdateModal, setActiveUpdateModal] = useState(false)
  const [showOldPass, setShowOldPass] = useState(false)
  const [newPass, setNewPass] = useState(false)
  const [confirmPass, setConfirmPass] = useState(false)

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
    setActiveUpdateModal(false)
  }

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="bg-green-50 shadow-lg border border-green-500 rounded-2xl w-full max-w-2xl text-center">
          <img src={user?.photoURL} alt="Cover" className="w-full h-36 object-cover rounded-t-2xl" />
          <div className="-mt-14 flex flex-col items-center">
            <img src={user?.photoURL} alt="Profile" className="h-28 w-28 rounded-full border-4 border-green-500 object-cover" />
            <p className="mt-2 px-3 py-1 bg-green-200 text-green-700 rounded-full text-sm">
              Role: <span className="font-medium">{user?.role || "User"}</span>
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-black">{user?.displayName || "Anonymous"}</h2>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Email: </span> {user?.email}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">User ID: </span> {user?.uid}</p>

            <div className={`flex flex-col md:flex-row justify-center gap-4 ${user?.role === 'admin' ? 'my-6' : 'mt-6'}`}>
              <button onClick={() => setActiveUpdateModal(true)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition">Update Profile</button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-md border border-green-300">Change Password</button>
            </div>

            {/* Role Update Request Button */}
            {
              user?.role !== 'admin' && (
                <div className="my-6">
                  <button className="text-sm bg-green-100 hover:bg-green-200 text-green-700 border border-green-300 px-5 py-2 rounded-md">Request Role Update</button>
                  <p className="text-gray-600 text-sm mt-1">Want to become a seller or admin? Request role change.</p>
                </div>
              )
            }
          </div>
        </div>
      </div>

      {
        activeUpdateModal && (
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
                  <button onClick={() => setActiveUpdateModal(false)} type="button" className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cansel</button>
                  <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Save</button>
                </div>
              </form>
            </div>
          </div>
        )
      }

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-green-100 w-full max-w-lg rounded-lg p-6 shadow-lg border border-green-300">
          <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Change Password</h2>
          <form onSubmit={handleUpdateUser} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-green-700 mb-1">Current Password</label>
              <div className="relative">
                <input name="password" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type={showOldPass ? 'text' : 'password'} required placeholder="••••••••" />
                <span onClick={() => setShowOldPass(!showOldPass)} title="Show Password" className="cursor-pointer">
                  {
                    showOldPass ? <FaUnlock className="absolute right-4 top-3.5 text-green-400" /> :
                      <FaLock className="absolute right-4 top-3.5 text-green-400" />
                  }
                </span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-green-700 mb-1">New Password</label>
              <div className="relative">
                <input name="password" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type={newPass ? 'text' : 'password'} required placeholder="••••••••" />
                <span onClick={() => setNewPass(!newPass)} title="Show Password" className="cursor-pointer">
                  {
                    newPass ? <FaUnlock className="absolute right-4 top-3.5 text-green-400" /> :
                      <FaLock className="absolute right-4 top-3.5 text-green-400" />
                  }
                </span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-green-700 mb-1">Confirm Password</label>
              <div className="relative">
                <input name="password" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type={confirmPass ? 'text' : 'password'} required placeholder="••••••••" />
                <span onClick={() => setConfirmPass(!confirmPass)} title="Show Password" className="cursor-pointer">
                  {
                    confirmPass ? <FaUnlock className="absolute right-4 top-3.5 text-green-400" /> :
                      <FaLock className="absolute right-4 top-3.5 text-green-400" />
                  }
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-4 p-2">
              <button type="button" className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cansel</button>
              <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Update Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
