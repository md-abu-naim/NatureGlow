import Swal from "sweetalert2";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";

const UpdateRole = ({ setIsOpen, setUser, user, updateUserList }) => {
    const axiosCommon = useAxiosCommon()

    const updateUserRole = e => {
        e.preventDefault()
        const role = e.target.role.value
        const updatedUser = { ...user, role }
        
        axiosCommon.patch(`/user/${user._id}`, updatedUser)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "User Role Updated Cuccessfully.",
                        icon: "success",
                        draggable: true,
                        timer: 2300,
                        background: '#dcfce7',
                    });
                    setUser(updatedUser)
                    updateUserList(updatedUser)
                    setIsOpen(false)
                }
            })
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end mr-6">
            <div className="bg-green-100 rounded-lg p-6 shadow-lg border border-green-300">
                <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Update User Role</h2>
                <form onSubmit={updateUserRole} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Role</label>
                        <select name="role" defaultValue={user.role} className="w-full mt-1 border rounded px-2 py-1" >
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-4 p-2">
                        <button onClick={() => setIsOpen(false)} type="button" className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cansel</button>
                        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateRole;