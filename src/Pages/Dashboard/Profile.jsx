
const Profile = () => {
  //   const { user } = useAuth();
  const user = {
    name: "Abu Naim",
    userId: "USR123456",
    email: "naim@example.com",
    image: "https://i.pravatar.cc/150?img=3",
    role: "User"
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="bg-green-50 shadow-lg border border-green-500 rounded-2xl w-full max-w-2xl text-center"></div>
      </div>

      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="bg-green-50 shadow-lg border border-green-500 rounded-2xl w-full max-w-2xl text-center">
          <img
            alt="cover"
            src={user.image}
            className="w-full h-36 object-cover rounded-t-2xl"
          />

          <div className="-mt-14 flex flex-col items-center">
            <img
              alt="profile"
              src={user?.image}
              className="h-28 w-28 rounded-full border-4 border-green-500 object-cover"
            />

            <p className="mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              Role: <span className="font-medium">{user.role || "User"}</span>
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-gray-800">
              {user.displayName || "Anonymous"}
            </h2>

            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Email:</span> {user.email}
            </p>

            <p className="text-gray-600 text-sm">
              <span className="font-semibold">User ID:</span> {user.uid}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition">
                Update Profile
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-md border border-green-300">
                Change Password
              </button>
            </div>

            {/* Role Update Request Button */}
            {user.role !== "admin" && (
              <div className="my-6">
                <button className="text-sm bg-green-100 hover:bg-green-200 text-green-700 border border-green-300 px-5 py-2 rounded-md">
                  Request Role Update
                </button>
                <p className="text-xs text-gray-400 mt-1">
                  Want to become a seller or admin? Request role change.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
