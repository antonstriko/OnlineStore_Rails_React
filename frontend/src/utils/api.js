import axios from 'axios';

const API = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
  headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage?.token}`},
});

export default API;
// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;