import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [isAdmin, setIsAdmin] = useState()

    useEffect(() => {
        if (!user?.email) return;
        axiosSecure.get(`user/admin/${user?.email}`)
            .then(res => {
                // console.log(res.data);
                setIsAdmin(res.data?.Admin)
            })
    }, [axiosSecure, user?.email])
    return isAdmin
};

export default useAdmin;