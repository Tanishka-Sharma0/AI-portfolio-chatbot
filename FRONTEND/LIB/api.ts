import axios from "axios";
import { errorMonitor } from "events";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 15000,
});

// Global response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error?.response?.data?.message || error?.message || "Something went wrong";
        console.error("[API ERROR]:", message);
        return Promise.reject(message);
    }
);


export default api;