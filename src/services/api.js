import axios from 'axios';

const api = axios.create({
  baseURL: 'https://a6364e6d4a21.ngrok.io',
});

export default api;
