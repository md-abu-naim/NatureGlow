
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-16 px-6 py-12">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-green-600 drop-shadow-md">404</h1>
                <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-300">Page Not Found</p>
                <p className="mt-2 text-md text-gray-400">The page you’re looking for doesn’t exist or has been moved. </p>

                <div className="mt-6">
                    <Link to="/" className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-lg shadow-lg transition duration-200">⬅️ Back to Home </Link>
                </div>
            </div>

            <div className="mt-12 max-w-lg">
                <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="404 Illustration" className="w-72 mx-auto opacity-80" />
            </div>
        </div>
    );
};

export default NotFound;
