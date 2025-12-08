import React from "react";
export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="input"
      placeholder="Search customer / product / employee..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

