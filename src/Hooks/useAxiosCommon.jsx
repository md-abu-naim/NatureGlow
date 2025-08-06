import axios from "axios";


const axiosCommon = axios.create({
    baseURL: `http://localhost:300`
})

const useAxiosCommon = () => {
    return axiosCommon
}


export default useAxiosCommon