import { getSalesWithFilters } from "../services/salesService.js";

export const getSales = async (req, res) => {
  try {
    const result = await getSalesWithFilters(req.query);
    res.json(result);
  } catch (error) {
    console.error("Error in controller:", error.message);
    res.status(500).json({ error: "Server Error" });
  }
};
