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