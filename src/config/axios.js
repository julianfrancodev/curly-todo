import axios from "axios";

const clientAxios = axios.create({
    baseUrl: process.env.REACT_APP_BACKEND_URL
});

export default clientAxios;