import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:33' });

export default api;