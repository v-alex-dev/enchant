import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router";

const baseURL = "http://127.0.0.1:8000/";

const useAxios = () => {
    const { authTokens } = useContext(AuthContext);
    const navigate = useNavigate()

    const axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: `Token ${authTokens?.token}` }
    });

    axiosInstance.interceptors.request.use(async req => {
        const user = authTokens.token;
    });

    return axiosInstance;
};

export default useAxios;