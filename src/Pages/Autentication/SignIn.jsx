import { FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaUnlock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const SignIn = () => {
    const { loginUser, signInWithGoogle, fbLogin, resetPassword } = useAuth();
    const [showPass, setShowPass] = useState(false)
    const axiosCommon = useAxiosCommon()
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((res) => {
                Swal.fire({
                    title: "Sign Up successfully",
                    icon: "success",
                    draggable: true,
                    timer: 1500,
                    background: '#dcfce7',
                });
                navigate(location.state || '/')
                const userInfo = {
                    name: res?.user?.displayName, email, password, cover: '',
                    profile: res?.user?.photoURL || '', status: 'Active', role: "User", address: '',
                    createdAt: new Date().toLocaleDateString(), lastLogin: new Date().toLocaleDateString(),
                    phone: res?.user?.phoneNumber || '', userId: res?.user?.uid || ''
                }
                axiosCommon.post('/user', userInfo)
                    .then(res => console.log(res.data))
                axiosCommon.post('/jwt', { email: res?.user?.email }, { withCredentials: true })
                    .then(res => console.log(res.data))
            })
            .catch((err) => toast.error(err.message));
    };

    const handleResetPassword = () => {
        const email = prompt("Please enter your email address:")
        if (!email) return

        resetPassword(email)
            .then(() => {
                alert("Password reset email sent! Check your inbox.");
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });
    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then((res) => {
                const userInfo = {
                    name: res?.user?.displayName, email: res?.user?.email, password: '', cover: '',
                    profile: res?.user?.photoURL || '', status: 'Active', role: "User", address: '',
                    createdAt: new Date().toLocaleDateString(), lastLogin: new Date().toLocaleDateString(),
                    phone: res?.user?.phoneNumber || '', userId: res?.user?.uid || ''
                }
                axiosCommon.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);
                        axiosCommon.post('/jwt', { email: res?.user?.email }, { withCredentials: true })
                            .then(res => {
                                console.log(res.data);
                                Swal.fire({
                                    title: "Sign Up successfully",
                                    icon: "success",
                                    draggable: true,
                                    timer: 1500,
                                    background: '#dcfce7',
                                });
                                navigate(location?.state || '/')
                            })
                    })
            })
            .catch((err) => toast.error(err.message));
    };

    const handleFacebook = () => {
        fbLogin()
            .then((res) => {

                const userInfo = {
                    name: res?.user?.displayName, email: res?.user?.email, password: '', cover: '',
                    profile: res?.user?.photoURL || '', status: 'Active', role: "User", address: '',
                    createdAt: new Date().toLocaleDateString(), lastLogin: new Date().toLocaleDateString(),
                    phone: res?.user?.phoneNumber || '', userId: res?.user?.uid || ''
                }
                axiosCommon.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);
                        axiosCommon.post('/jwt', { email: res?.user?.email }, { withCredentials: true })
                            .then(res => {
                                console.log(res.data);
                                Swal.fire({
                                    title: "Sign Up successfully",
                                    icon: "success",
                                    draggable: true,
                                    timer: 1500,
                                    background: '#dcfce7',
                                });
                                navigate(location?.state || '/')
                            })
                    })
            })
            .catch((err) => toast.error(err.message));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side */}
            <div className="bg-green-100 flex items-center justify-center pt-8">
                <div className="text-center space-y-6 max-w-md">
                    <h2 className="text-3xl font-bold text-green-800">Welcome Back to NatureGlow</h2>
                    <p className="text-green-700 text-sm">Discover the goodness of nature. Sign in to continue your journey towards natural beauty.</p>
                    <img src="/banner.png" alt="NatureGlow" className="mx-auto lg:h-96" />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center justify-center pt-8">
                <form onSubmit={handleLogin} className="w-full max-w-md space-y-5 bg-white p-8 rounded-2xl shadow border border-green-100">
                    <h3 className="text-2xl font-bold text-green-800 text-center">Sign In</h3>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-green-700 mb-1">Email</label>
                        <div className="relative">
                            <input name="email" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type="email" required placeholder="you@example.com" />
                            <FaEnvelope className="absolute right-4 top-3.5 text-green-400" />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-green-700 mb-1">Password</label>
                        <div className="relative">
                            <input name="password" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type={showPass ? 'text' : 'password'} required placeholder="••••••••" />
                            <span onClick={() => setShowPass(!showPass)} className="cursor-pointer">
                                {
                                    showPass ? <FaUnlock className="absolute right-4 top-3.5 text-green-400" /> :
                                        <FaLock className="absolute right-4 top-3.5 text-green-400" />
                                }
                            </span>
                        </div>
                        <div className="text-right">
                            <Link to="" onClick={() => handleResetPassword()} className="text-sm text-green-600 hover:underline">Forgot Password?</Link>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition duration-300">Sign In</button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                        <hr className="flex-1 border-gray-300" />
                        Or sign in with
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    {/* Social Login */}
                    <div className="flex flex-col gap-3">
                        <button onClick={handleGoogle} type="button" className="flex items-center justify-center gap-3 bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-2 rounded-full transition" >
                            <FaGoogle /> Sign in with Google
                        </button>
                        <button onClick={handleFacebook} type="button" className="flex items-center justify-center gap-3 bg-green-200 hover:bg-green-300 text-green-900 font-semibold py-2 rounded-full transition" > <FaFacebookF /> Sign in with Facebook </button>
                    </div>


                    <p className="text-sm text-center text-gray-600"> Don't have an account?{' '} <Link to="/signUp" className="text-green-700 font-medium hover:underline">Sign Up here</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
