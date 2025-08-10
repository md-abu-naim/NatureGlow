import axios from "axios";

const axiosCommon = axios.create({
    baseURL: `http://localhost:3000`,
    // baseURL: `https://natureglow.vercel.app`,
})

const useAxiosCommon = () => {
    return axiosCommon
}


export default useAxiosCommon