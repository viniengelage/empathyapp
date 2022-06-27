import axios, { AxiosError } from 'axios';

export const api = axios.create({
  baseURL: 'https://path-backend.herokuapp.com',
});

// api.interceptors.response.use(
//   response => response,
//   (error: AxiosError) => {
//     console.log(error.response);
//     Promise.reject(error);
//   },
// );
