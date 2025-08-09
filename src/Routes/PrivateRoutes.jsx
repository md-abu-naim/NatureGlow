import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    
    if(loading) return <h3 className="text-xl text-green-800">Loading...</h3>
    if(user) return children;
    return <Navigate to='/signIn' state={location.pathname} replace={true} />
};

export default PrivateRoutes;