import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    // baseURL: 'https://nature-glow-server.vercel.app',
    baseURL: 'https://natureglow.vercel.app',
    // baseURL: "http://localhost:3000",
    withCredentials: true
})

const useAxiosSecure = () => {
    const { LogoutUser } = useAuth();
    const navigate = useNavigate()

    axiosSecure.interceptors.response.use(res => {
        return res;
    },
        error => {
            if (error.response.status === 401 || error.response.status === 403) {
                LogoutUser()
                    .then(() => navigate('/signIn'))
            }
            return Promise.reject(error)
        }
    )
    return axiosSecure
};

export default useAxiosSecure;