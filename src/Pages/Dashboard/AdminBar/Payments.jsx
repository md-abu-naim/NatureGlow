import { Link } from "react-router-dom";

const Payments = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-green-50 px-4">
            <div className="mb-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-40 h-40 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
                    />
                </svg>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">Feature Coming Soon 🚀</h1>
            <p className="text-gray-600 text-center max-w-md mb-6">
                This feature is currently under development. We’re working hard to bring
                it to you as soon as possible. Stay tuned for updates!
            </p>

            <Link to="/" className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">Go Back Home</Link>
        </div>
    );
};

export default Payments;