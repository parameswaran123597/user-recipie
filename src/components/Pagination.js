import React from "react";

function Pagination({ total, perPage, currentPage, setCurrentPage }) {

  const totalPages = Math.ceil(total / perPage);

  if (totalPages <= 1) return null;

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="pagination justify-content-center">

        {/* PREVIOUS */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        </li>

        {/* PAGE NUMBERS */}
        {pages.map(p => (
          <li
            key={p}
            className={`page-item ${currentPage === p ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(p)}
            >
              {p}
            </button>
          </li>
        ))}

        {/* NEXT */}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default Pagination;