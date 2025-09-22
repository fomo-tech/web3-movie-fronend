"use client";

import Link from "next/link";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    // Trang đầu
    if (currentPage > 3) {
      pages.push(1);
      if (currentPage > 4) pages.push("...");
    }

    // Các trang gần currentPage
    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      pages.push(i);
    }

    // Trang cuối
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <>
      {/* paginator desktop */}
      <ul className="paginator">
        {/* Prev */}
        <li className="paginator__item paginator__item--prev">
          {currentPage > 1 ? (
            <Link href={`?page/${currentPage - 1}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </Link>
          ) : (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </span>
          )}
        </li>

        {/* Pages */}
        {pages.map((p, idx) =>
          p === "..." ? (
            <li key={idx} className="paginator__item">
              <span>...</span>
            </li>
          ) : (
            <li
              key={idx}
              className={`paginator__item ${
                p === currentPage ? "paginator__item--active" : ""
              }`}
            >
              <Link href={`?page/${p}`} scroll={false}>
                {p}
              </Link>
            </li>
          )
        )}

        {/* Next */}
        <li className="paginator__item paginator__item--next">
          {currentPage < totalPages ? (
            <Link href={`?page/${currentPage + 1}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </Link>
          ) : (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </span>
          )}
        </li>
      </ul>
      {/* end paginator desktop */}
    </>
  );
};

export default Pagination;
