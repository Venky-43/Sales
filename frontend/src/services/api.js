import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchSales = async (params) => {
  const res = await API.get("/", { params });
  return res.data;
};


