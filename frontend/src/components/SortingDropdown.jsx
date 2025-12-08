import React from "react";
export default function SortingDropdown({ onChange }) {
  return (
    <select className="select" onChange={(e) => onChange(e.target.value)}>
      <option value="">Sort By</option>
      <option value="finalAmount">Final Amount</option>
      <option value="quantity">Quantity</option>
      <option value="age">Age</option>
    </select>
  );
}

