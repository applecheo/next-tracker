"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = () => {
  const pageCount = 10;
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");

  const pageNumbers = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > pageCount) return;
    router.push(`/?page=${newPage}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-center lg:px-0 sm:px-6 px-4">
      <div className="lg:w-3/5 w-full flex items-center justify-between border-t border-gray-700">
        <div
          className={`flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer ${
            page <= 1 && "invisible"
          }`}
          onClick={() => handlePageChange(page - 1)}
        >
          <p className="text-sm ml-1 font-medium leading-none">Previous</p>
        </div>
        <div className="sm:flex hidden">
          {pageNumbers.map((pageNumber) => (
            <p
              key={pageNumber}
              className={`text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ${
                pageNumber === page && "text-indigo-700 border-indigo-400"
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </p>
          ))}
        </div>
        <div
          className={`flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer ${
            page >= pageCount && "invisible"
          }`}
          onClick={() => handlePageChange(page + 1)}
        >
          <p className="text-sm font-medium leading-none mr-3">Next</p>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1665 4H12.8332"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 7.33333L12.8333 4"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 0.666687L12.8333 4.00002"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
