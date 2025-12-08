import { useState, useEffect } from "react";
import { fetchSales } from "../services/api";
import { buildQuery } from "../utils/buildQuery";

export default function useSales(filters, page) {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const load = async () => {
      const params = buildQuery(filters, page);
      const res = await fetchSales(params);

      setData(res.sales);
      setPages(res.pages);
    };

    load();
  }, [filters, page]);

  return { data, pages };
}
