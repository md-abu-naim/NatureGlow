import { FaEdit, FaTrash } from "react-icons/fa";

const users = [
    {
        id: 1,
        name: "Naim Web Dev",
        email: "naim@example.com",
        role: "admin",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 2,
        name: "Sarah Islam",
        email: "sarah@example.com",
        role: "student",
        image: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: 3,
        name: "Mizan Rahman",
        email: "mizan@example.com",
        role: "tutor",
        image: "https://i.pravatar.cc/150?img=8",
    },
];
const Users = () => {
    return (
        <div>
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>All Users at a Glance</h1>
                <p className='text-green-600 text-sm mt-2'>Here you can see everyone using your platform. Manage roles, check details, and stay in control — all in one place.</p>
            </section>
            <form className='w-full bg-green-100 mt-3 p-2 rounded-lg'>
                <div className='relative lg:w-2xl mx-auto'>
                    <input placeholder="Search user name..." className="w-full px-4 pr-16 py-2 border border-green-300 rounded-full shadow-sm focus:outline-none" type="text" name="search" />
                    <button type='submit' className="absolute top-1/2 -translate-y-1/2 right-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm transition">Search..</button>
                </div>
            </form>

            <section className="p-4 md:p-8 overflow-x-auto rounded-lg shadow-lg border border-green-400">
                <table className="min-w-full bg-green-50 divide-y divide-green-200"></table>
            </section>

            {/* <div className="p-4 md:p-8"> */}
                <div className="overflow-x-auto rounded-lg shadow-lg border border-green-200">
                    <table className="min-w-full bg-white divide-y divide-green-200">
                        <thead className="bg-green-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-bold text-green-700">Profile</th>
                                <th className="px-6 py-3 text-left text-sm font-bold text-green-700">Name</th>
                                <th className="px-6 py-3 text-left text-sm font-bold text-green-700">Email</th>
                                <th className="px-6 py-3 text-left text-sm font-bold text-green-700">Role</th>
                                <th className="px-6 py-3 text-center text-sm font-bold text-green-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-green-100">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-green-50 transition-all">
                                    <td className="px-6 py-4">
                                        <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">{user.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${user.role === "admin"
                                                ? "bg-green-200 text-green-800"
                                                : user.role === "tutor"
                                                    ? "bg-blue-200 text-blue-800"
                                                    : "bg-yellow-200 text-yellow-800"
                                                }`}
                                        >
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 flex items-center justify-center gap-4 text-green-600">
                                        <button title="Edit">
                                            <FaEdit className="hover:text-green-800 transition" />
                                        </button>
                                        <button title="Delete">
                                            <FaTrash className="hover:text-red-500 transition" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            {/* </div> */}
        </div>
    );
};

export default Users;