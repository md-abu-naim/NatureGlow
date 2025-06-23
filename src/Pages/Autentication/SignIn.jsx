import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div>

            <div>
                {/* Left Side */}
                <div>
                    <div>
                        <h2>Welcome Back to NatureGlow</h2>
                        <p>Discover the goodness of nature. Sign in to continue your journey towards natural beauty.</p>
                        <img src="/banner.png" alt="NatureGlow" className="mx-auto h-96" />
                    </div>
                </div>
            </div>

            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
                {/* Left Section */}
                <div className="bg-green-100 flex items-center justify-center pt-8">
                    <div className="text-center space-y-6 max-w-md">
                        <h2 className="text-3xl font-bold text-green-800">Welcome Back to NatureGlow</h2>
                        <p className="text-green-700 text-sm">
                            Discover the goodness of nature. Sign in to continue your journey towards natural beauty.
                        </p>
                        <img src="/banner.png" alt="NatureGlow" className="mx-auto h-96" />
                    </div> 
                </div>

                {/* Right Section */}
                <div className="flex items-center justify-center p-10 bg-white">
                    <form className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow border border-green-100">
                        <h3 className="text-2xl font-bold text-green-800 text-center">Sign In</h3>

                        <div>
                            <label className="block text-sm font-medium text-green-700 mb-1">Email</label>
                            <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-green-700 mb-1">Password</label>
                            <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />
                        </div>

                        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition duration-300">
                            Sign In
                        </button>

                        <p className="text-sm text-center text-gray-600">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-green-700 font-medium hover:underline">
                                Sign Up here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default SignIn;