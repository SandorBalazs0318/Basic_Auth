import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:6001/api',
});

export default apiClient;
