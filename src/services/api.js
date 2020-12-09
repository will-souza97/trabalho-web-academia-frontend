import axios from 'axios';

const api = axios.create({
  baseURL: 'https://9f372c1fc4c6.ngrok.io',
});

export default api;
