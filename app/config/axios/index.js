import axios from "axios";

const instance = axios.create({

  headers: {
    "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_BASE_API_HOST}`,
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    Accept: "application/json text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    ApiKey: `${process.env.NEXT_PUBLIC_BASE_API_KEY}`,
  },
  // withCredentials: true
});

instance.interceptors.response.use((response) => response.data);
export default instance;
