import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure()
    const [isAdmin, setIsAdmin] = useState()

    useEffect(() => {
        if (loading || !user?.email) return;
        (async () => {
            try {
                const res = await axiosSecure.get(`user/admin/${user.email}`);
                setIsAdmin(res.data?.admin);
            } catch {
                setIsAdmin(false);
            }
        })();
    }, [axiosSecure, user?.email, loading]);

    return isAdmin
};

export default useAdmin;


// import { useEffect, useState } from "react";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = () => {
//     const { user, loading } = useAuth();
//     const axiosSecure = useAxiosSecure();
//     const [isAdmin, setIsAdmin] = useState(false); // Initialize with false
//     const [isAdminLoading, setIsAdminLoading] = useState(true);

//     useEffect(() => {
//         // Only run if user exists, not loading, and email is available
//         if (user && user.email && !loading) {
//             (async () => {
//                 try {
//                     setIsAdminLoading(true);
//                     const res = await axiosSecure.get(`/user/admin/${user.email}`);
//                     console.log(res.data);
//                     setIsAdmin(res.data?.Admin);
//                 } catch (err) {
//                     console.error("Admin check failed:", err);
//                     setIsAdmin(false);
//                 } finally {
//                     setIsAdminLoading(false);
//                 }
//             })();
//         } else {
//             // If there's no user, or still loading, reset state
//             setIsAdmin(false);
//             setIsAdminLoading(false);
//         }
//     }, [axiosSecure, user, loading]); // Depend on the full user object and loading state

//     return [isAdmin, isAdminLoading];
// };

// export default useAdmin;