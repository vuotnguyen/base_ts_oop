
import axios from 'axios';

export const apiConfig = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

apiConfig.interceptors.request.use(config => {
    // You can add authorization headers or other custom headers here
    // add token authorization 
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
}, error => {
    return Promise.reject(error);
});

apiConfig.interceptors.response.use(response => {
        return response;
}, error => {
     // ❌ Không kết nối được server
    if (!error.response) {
      return Promise.reject({
        type: "NETWORK_ERROR",
        message: "Không thể kết nối đến máy chủ",
      });
    }
    // ❌ Server trả về lỗi
    return Promise.reject({
      type: "SERVER_ERROR",
      code: error.code || "UNKNOWN_ERROR",
      status: error.response.status,
      message:
        error.response.data?.message ||
        "Có lỗi xảy ra từ máy chủ",
    });
});