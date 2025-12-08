import React, { useState } from "react";
import FiltersPanel from "../components/FiltersPanel";
import SalesTable from "../components/SalesTable";
import PaginationControls from "../components/PaginationControls";
import useSales from "../hooks/useSales";

export default function Dashboard() {
  const [filters, setFilters] = useState({
    search: "",
    region: "All",
    gender: "All",
    category: "All",
    payment: "All",
    sortBy: ""
  });

  const [page, setPage] = useState(1);

  const { data, pages } = useSales(filters, page);

  const updateFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
    setPage(1);
  };

  return (
    <div className="main-content">
      <h1>Retail Sales Dashboard</h1>

      <FiltersPanel filters={filters} setFilter={updateFilter} />

      <SalesTable data={data} />

      <PaginationControls page={page} pages={pages} onChange={setPage} />
    </div>
  );
}

