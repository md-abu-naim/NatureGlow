import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Provider/useAuth";

const SignIn = () => {
    const {loginUser} = useAuth()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        loginUser(email, password)
        .then(result => console.log(result.user))
    }
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
                    <div>
                        <label className="text-sm font-medium text-green-700 mb-1">Email</label>
                        <div className="relative">
                            <input name="email" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type="email" placeholder="you@example.com" />
                            <FaEnvelope className="absolute right-4 top-3.5 text-green-400" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-green-700 mb-1">Password</label>
                        <div className="relative">
                            <input name="password" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type="password" placeholder="••••••••" />
                            <FaLock className="absolute right-4 top-3.5 text-green-400" />
                        </div>
                        <div className="text-right">
                            <Link to="" className="text-sm text-green-600 hover:underline">Forgot Password?</Link>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition duration-300">Sign In</button>
                    <p className="text-sm text-center text-gray-600">Don't have an account?{' '} <Link to="/signUp" className="text-green-700 font-medium hover:underline">Sign Up here</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;