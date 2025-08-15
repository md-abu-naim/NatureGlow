import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <div className="flex justify-center items-center h-screen w-full bg-green-50 backdrop-blur-sm">
            <div className="relative w-24 h-24">
                <div className="absolute w-full h-full border-[6px] border-green-400 border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
            </div>
        </div>
    }

    if (user) return children;

    return <Navigate to='/signIn' state={location.pathname} replace={true} />
};

export default PrivateRoutes;