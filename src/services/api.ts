import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.20.0.7:3333',
});
