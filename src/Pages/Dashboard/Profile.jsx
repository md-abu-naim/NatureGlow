import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import ProfileUpdate from "./Modals/ProfileUpdate";
import ChangePassword from "./Modals/ChangePassword";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const Profile = () => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false)
  const [openPassModal, setOpenPassModal] = useState(false)
  const [currentUser, setCurrentUser] = useState()
  const axiosCommon = useAxiosCommon()
  const { user, } = useAuth();

  console.log(currentUser);

  useEffect(() => {
          axiosCommon.get(`/users/${user?.email}`)
              .then(res => {
                  setCurrentUser(res.data)
              })
      }, [axiosCommon, user?.email])
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
              <button onClick={() => setOpenUpdateModal(true)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition">Update Profile</button>
              <button onClick={() => setOpenPassModal(true)} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-md border border-green-300">Change Password</button>
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
        openUpdateModal && <ProfileUpdate setOpenUpdateModal={setOpenUpdateModal} />
      }
      {
        openPassModal && <ChangePassword setOpenPassModal={setOpenPassModal} />
      }
    </div>
  );
};

export default Profile;
