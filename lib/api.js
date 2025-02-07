import axios from 'axios';

// Read the base URL from the environment variable
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'; // Fallback URL if not set

// Create an Axios instance
const api = axios.create({
    baseURL: baseURL, // Use the base URL from the .env file
    timeout: 10000, // Timeout for requests
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        // Example: Add any global headers (e.g., Authorization tokens)
        console.log('Request made with ', config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => {
        console.log('Response received:', response);
        return response;
    },
    (error) => {
        console.error('Error occurred:', error.response ? error.response.data : error.message);
        return Promise.reject(error);
    }
);

export default api;
