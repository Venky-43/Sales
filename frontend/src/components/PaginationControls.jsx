import React from "react";
export default function PaginationControls({ page, pages, onChange }) {
  const nums = [];

  for (let i = Math.max(1, page - 2); i <= Math.min(pages, page + 2); i++) {
    nums.push(i);
  }

  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => onChange(page - 1)}>
        Prev
      </button>

      {nums.map((n) => (
        <button
          key={n}
          className={n === page ? "active" : ""}
          onClick={() => onChange(n)}
        >
          {n}
        </button>
      ))}

      <button disabled={page === pages} onClick={() => onChange(page + 1)}>
        Next
      </button>
    </div>
  );
}


