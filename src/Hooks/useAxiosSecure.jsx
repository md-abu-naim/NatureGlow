import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    // baseURL: 'https://natureglow.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const {LogoutUser} = useAuth()
    const navigate = useNavigate()
    
    axiosSecure.interceptors.response.use(res => {
        return res;
    })
    error => {
        if(error.response.status === 401 || error.response.status === 403){
            LogoutUser()
            .then(() => navigate('/signIn'))
        }
        return Promise.reject(error)
    }
};

export default useAxiosSecure;