import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://lingovid.mas-ai.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
