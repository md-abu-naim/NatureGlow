import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import UpdateRole from "../Modals/UpdateRole";

const users = [
    {
        id: 1,
        name: "Naim Web Dev",
        email: "naim@example.com",
        role: "Admin",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 2,
        name: "Sarah Islam",
        email: "sarah@example.com",
        role: "Student",
        image: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: 3,
        name: "Mizan Rahman",
        email: "mizan@example.com",
        role: "Admin",
        image: "https://i.pravatar.cc/150?img=8",
    },
];


const Users = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [userRole, setUserRole] = useState([])
    return (
        <div>
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>All Users at a Glance</h1>
                <p className='text-green-600 text-sm mt-2'>Here you can see everyone using your platform. Manage roles, check details, and stay in control — all in one place.</p>
            </section>
            <form className='w-full bg-green-100 mt-3 p-3 rounded-lg'>
                <div className='relative lg:w-2xl mx-auto'>
                    <input placeholder="Search user name..." className="w-full px-4 pr-16 py-2 bg-green-50 border border-green-300 rounded-full shadow-sm focus:outline-none" type="text" name="search" />
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
                                        <img src={u.image} className="w-12 h-12 object-cover rounded-md border border-green-300" alt={u.name} />
                                        <h5>{u.name}</h5>
                                    </td>
                                    <td className="px-4 py-3">{u.email}</td>
                                    <td className="px-4 py-3 font-sans">+8801882585833</td>
                                    <td className="px-4 py-3">kalam beparir fild, Khajuria, senbag, Noakhalim, chittagang</td>
                                    <td className="px-6 py-4 ">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${u.role === "Admin" ? "bg-green-200 text-green-800" : "bg-blue-200 text-blue-800"}`}>
                                            {u.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 flex items-center justify-center gap-4 text-green-600">
                                        <button onClick={() => { setIsOpen(true), setUserRole(u) }} title="Edit"><FaEdit className="hover:text-green-800 transition text-xl" /></button>                                        <button title="Delete"><FaTrash className="hover:text-red-500 transition text-xl" /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
            {
                isOpen && <UpdateRole setIsOpen={setIsOpen} user={userRole} />
            }
        </div>
    );
};

export default Users;