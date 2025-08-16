// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//     baseURL: 'https://natureglow.vercel.app',
//     // baseURL: "http://localhost:3000",
//     withCredentials: true
// })

// const useAxiosSecure = () => {
//     const { LogoutUser } = useAuth();
//     const navigate = useNavigate()

//     axiosSecure.interceptors.response.use(res => {
//         return res;
//     },
//         error => {
//             if (error.response.status === 401 || error.response.status === 403) {
//                 LogoutUser()
//                     .then(() => navigate('/signIn'))
//             }
//             return Promise.reject(error)
//         }
//     )
//     return axiosSecure
// };

// export default useAxiosSecure;

import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:3000'
    baseURL: 'https://natureglow.vercel.app',
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { LogoutUser } = useAuth();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });


    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await LogoutUser();
            navigate('/signIn');
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;
