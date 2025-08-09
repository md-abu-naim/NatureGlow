import { FaEnvelope, FaLock, FaUnlock, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const SignUp = () => {
    const { createUser, updateUser, setUser, user } = useAuth()
    const [showPass, setShowPass] = useState(false)
    const axiosCommon = useAxiosCommon()
    const navigate = useNavigate()
    const location = useLocation()


    const handleSingUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const status = "Active"
        const createdAt = new Date().toLocaleDateString()
        const role = 'User'
        const lastLogin = ''
        const address = ''

        if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return toast.error('Please enter your valid email')
        }
        if (password === '') {
            return toast.error('Please fulfill your form')
        }
        else if (password.length < 6) {
            return toast.error('Password should be at least 6 characters or longer')
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error('Your password should have at least one Uppercase characters')
        }
        else if (!/[a-z]/.test(password)) {
            return toast.error('Your password should have at least one Lowercase characters')
        }

        createUser(email, password)
            .then(result => {
                updateUser(name, result?.user?.photoURL)
                setUser({
                    ...user,
                    displayName: name,
                    photoURL: result?.user?.photoURL
                })
                
                const userInfo = {
                    name, email, password, 
                    profile: result?.user?.photoURL || '',
                    status, createdAt, role, lastLogin, address,
                    phone: result?.user?.phoneNumber || '',
                    userId: result?.user?.uid || ''
                }
                axiosCommon.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Sign Up successfully",
                                icon: "success",
                                draggable: true,
                                timer: 1500,
                                background: '#dcfce7',
                            });
                        }
                        e.target.reset()
                        navigate(location.state || '/')
                    })
            })
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side */}
            <div className="bg-green-100 flex items-center justify-center pt-8">
                <div className="text-center space-y-6 max-w-md px-5">
                    <h2 className="text-3xl font-bold text-green-800">Join the NatureGlow Family</h2>
                    <p className="text-green-700 text-sm">Create your account and start your journey towards clean and natural beauty.</p>
                    <img src="/banner.png" alt="NatureGlow" className="mx-auto lg:h-96" />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center justify-center py-8">
                <form onSubmit={handleSingUp} className="w-full max-w-md space-y-5 bg-white p-8 rounded-2xl shadow border border-green-100">
                    <h3 className="text-2xl font-bold text-green-800 text-center">Create Account</h3>
                    <div>
                        <label className="text-sm font-medium text-green-700 mb-1">Full Name</label>
                        <div className="relative">
                            <input name="name" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type="text" placeholder="Your Name" />
                            <FaUser className="absolute right-4 top-3.5 text-green-400" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-green-700 mb-1">Email</label>
                        <div className="relative">
                            <input name="email" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type="email" required placeholder="you@example.com" />
                            <FaEnvelope className="absolute right-4 top-3.5 text-green-400" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-green-700 mb-1">Password</label>
                        <div className="relative">
                            <input name="password" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type={showPass ? 'text' : 'password'} required placeholder="••••••••" />
                            <span onClick={() => setShowPass(!showPass)} title="Show Password" className="cursor-pointer">
                                {
                                    showPass ? <FaUnlock className="absolute right-4 top-3.5 text-green-400" /> :
                                        <FaLock className="absolute right-4 top-3.5 text-green-400" />
                                }
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition duration-300">Sign Up</button>
                    <p className="text-sm text-center text-gray-600">Already have an account?{' '} <Link to="/signIn" className="text-green-700 font-medium hover:underline">Sign In here</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;