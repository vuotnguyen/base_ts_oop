
import axios from 'axios'

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
    const token = localStorage.getItem('token');
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
    // Handle global errors here
    return Promise.reject(error);
});