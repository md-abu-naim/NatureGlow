import axios from "axios";

const axiosCommon = axios.create({
    // baseURL: 'https://natureglow.vercel.app',
    baseURL: "http://localhost:3000",
})

const useAxiosCommon = () => {
    return axiosCommon
}


export default useAxiosCommon