import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [isAdmin, setIsAdmin] = useState()

    useEffect(() => {
        if (!user?.email) return;

        const fetchAdmin = async () => {
            try {
                const res = await axiosSecure.get(`user/admin/${user.email}`);
                setIsAdmin(res.data?.Admin);
            } catch (err) {
                console.error('Admin fetch error:', err);
                setIsAdmin(false);
            }
        };

        fetchAdmin();
    }, [axiosSecure, user?.email])



    return isAdmin
};

export default useAdmin;