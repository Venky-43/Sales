import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: "https://sales-2-6b8q.onrender.com/api/sales",
});


// Function to fetch sales with query params
export const fetchSales = async (params) => {
  const res = await API.get("/", { params });
  return res.data;
};

