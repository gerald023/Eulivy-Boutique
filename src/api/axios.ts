import axios from 'axios';


export const api = axios.create({
    baseURL: "https://aptech-python-project.onrender.com/",
    withCredentials: true,
})