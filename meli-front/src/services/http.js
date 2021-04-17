import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:4000/",
  withCredentials: false, // This is the default
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});
http.interceptors.request.use(
  async function (config) {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default http;
