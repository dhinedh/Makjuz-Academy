import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-toaw.onrender.com/", // backend base
  withCredentials: true, // include cookies
});

export default api;
