import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://path-backend.herokuapp.com',
});
