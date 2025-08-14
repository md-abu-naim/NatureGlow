import axios from "axios";

const axiosCommon = axios.create({
    // baseURL: 'https://nature-glow-server.vercel.app',
    baseURL: 'https://natureglow.vercel.app',
})

const useAxiosCommon = () => {
    return axiosCommon
}


export default useAxiosCommon