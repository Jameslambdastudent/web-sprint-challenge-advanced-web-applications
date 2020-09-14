import axios from "axios";

const axiosWAuth = axios.create({headers: {Authorization: localStorage.getItem("token")}});

export default axiosWAuth;