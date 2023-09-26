import axios from 'axios';
import { getToken } from './JwtServices';

export const request = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setupInterceptors = () => {
    request.interceptors.request.use(
        (config) => {
            const token = getToken();
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
}
