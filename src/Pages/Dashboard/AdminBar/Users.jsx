import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import UpdateRole from "../Modals/UpdateRole";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import Swal from "sweetalert2";

const Users = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [userRole, setUserRole] = useState([])
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const axiosCommon = useAxiosCommon()

    const updateUserList = updatedUser => {
        setUsers(prev => prev.map(u => u._id === updatedUser._id ? updatedUser : u))
    }

    const HandleDeleteUser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            background: '#dcfce7',
            color: '#000000',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            buttonsStyling: false,
            customClass: {
                popup: 'rounded-lg shadow-lg',
                title: 'text-lg font-semibold text-yellow-400',
                htmlContainer: 'text-sm text-gray-300',
                confirmButton: 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2',
                cancelButton: 'bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                axiosCommon.delete(`/user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success",
                                background: '#dcfce7',
                                timer: 2300
                            });
                            setUsers(prev => prev.filter(p => p._id !== id))
                        }
                    })
            }
        });
    }

    useEffect(() => {
        axiosCommon.get(`/users?search=${search}`)
            .then(res => {
                setUsers(res.data)
            })
    }, [axiosCommon, search])
    return (
        <div>
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>All Users at a Glance</h1>
                <p className='text-green-600 text-sm mt-2'>Here you can see everyone using your platform. Manage roles, check details, and stay in control — all in one place.</p>
            </section>
            <form className='w-full bg-green-100 mt-3 p-3 rounded-lg'>
                <div className='relative lg:w-2xl mx-auto'>
                    <input onChange={(e) => setSearch(e.target.value)} placeholder="Search user name..." className="w-full px-4 pr-16 py-2 bg-green-50 border border-green-300 rounded-full shadow-sm focus:outline-none" type="text" name="search" />
                    <button type='submit' className="absolute top-1/2 -translate-y-1/2 right-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm transition">Search..</button>
                </div>
            </form>

            <section className="mt-7 overflow-x-auto rounded-lg shadow-lg border border-green-300">
                <table className="min-w-full text-sm text-left table-auto">
                    <thead className="bg-green-100 text-green-800 font-semibold">
                        <tr>
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Profile & Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Phone Number</th>
                            <th className="py-3 px-4">Address</th>
                            <th className="py-3 px-4">User Role</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 divide-y divide-green-100">
                        {
                            users?.map((u, i) => (
                                <tr key={i} className="hover:bg-green-100 transition-all">
                                    <td className="px-4 py-3 font-semibold">{i + 1}</td>
                                    <td className="px-4 py-3 flex items-center gap-1">
                                        <img src={u.profile} className="w-12 h-12 object-cover rounded-md border border-green-300" alt={u.name} />
                                        <h5>{u.name}</h5>
                                    </td>
                                    <td className="px-4 py-3">{u.email}</td>
                                    <td className="px-4 py-3 font-sans">{u.phone}</td>
                                    <td className="px-4 py-3">{u.address}</td>
                                    <td className="px-6 py-4 ">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${u.role === "Admin" ? "bg-green-200 text-green-800" : "bg-blue-200 text-blue-800"}`}>
                                            {u.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 flex items-center justify-center gap-4 text-green-600">
                                        <button onClick={() => { setIsOpen(true), setUserRole(u) }} title="Edit"><FaEdit className="hover:text-green-800 transition text-xl" /></button>
                                        <button onClick={() => HandleDeleteUser(u._id)} title="Delete"><FaTrash className="hover:text-red-500 transition text-xl" /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
            {
                isOpen && <UpdateRole setIsOpen={setIsOpen} user={userRole} setUser={setUserRole} updateUserList={updateUserList} />
            }
        </div>
    );
};

export default Users;