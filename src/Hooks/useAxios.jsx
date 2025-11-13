import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://utility-bills-managment-server.vercel.app'
    // baseURL: 'http://localhost:3000'
    //Noo need
})

const useAxios = () => {
    return axiosInstance;
}

export default useAxios;