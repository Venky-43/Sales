import React from "react";
import SearchBar from "./SearchBar";

export default function FiltersPanel({ filters, setFilter }) {
  return (
    <div className="filters-wrapper">

      <SearchBar
        value={filters.search}
        onChange={(v) => setFilter("search", v)}
      />

      <select
        className="select"
        onChange={(e) => setFilter("region", e.target.value)}
      >
        <option value="All">All Regions</option>
        <option>North</option>
        <option>South</option>
        <option>East</option>
        <option>West</option>
      </select>

      <select
        className="select"
        onChange={(e) => setFilter("gender", e.target.value)}
      >
        <option value="All">All Genders</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select
        className="select"
        onChange={(e) => setFilter("category", e.target.value)}
      >
        <option value="All">All Categories</option>
        <option>Clothing</option>
        <option>Electronics</option>
        <option>Beauty</option>
      </select>

      <select
        className="select"
        onChange={(e) => setFilter("payment", e.target.value)}
      >
        <option value="All">All Payments</option>
        <option>Cash</option>
        <option>UPI</option>
        <option>Card</option>
      </select>

      <select
        className="select"
        onChange={(e) => setFilter("sortBy", e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="finalAmount">Amount</option>
        <option value="quantity">Quantity</option>
      </select>

    </div>
  );
}

