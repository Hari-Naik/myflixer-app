"use client";
import { generateFilterRoutePath, generatePages } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  currentPage: number;
  totalPages: number;
  type?: string;
};

const Pagination: React.FC<Props> = ({ currentPage, totalPages, type }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChangeToFirstPage = () => {
    if (type === "filter") {
      const href = generateFilterRoutePath(pathname, searchParams);
      router.push(`${href}&page=1`);
    } else {
      router.push(`?page=1`);
    }
  };

  const handleChangeToLastPage = () => {
    if (type === "filter") {
      const href = generateFilterRoutePath(pathname, searchParams);
      router.push(`${href}&page=${totalPages}`);
    } else {
      router.push(`?page=${totalPages}`);
    }
  };

  const handleChangeToPrevPage = () => {
    if (type === "filter") {
      const href = generateFilterRoutePath(pathname, searchParams);
      router.push(`${href}&page=${currentPage - 1}`);
    } else {
      router.push(`?page=${currentPage - 1}`);
    }
  };

  const handleChangeToNextPage = () => {
    if (type === "filter") {
      const href = generateFilterRoutePath(pathname, searchParams);
      router.push(`${href}&page=${currentPage + 1}`);
    } else {
      router.push(`?page=${currentPage + 1}`);
    }
  };

  const handleChangePage = (pageId: number) => {
    if (type === "filter") {
      const href = generateFilterRoutePath(pathname, searchParams);
      router.push(`${href}&page=${pageId}`);
    } else {
      router.push(`?page=${pageId}`);
    }
  };

  const pages = generatePages(currentPage, totalPages);
  return (
    <div className="mt-4 w-full flex items-center justify-center gap-1">
      {currentPage > 3 && (
        <>
          <button
            onClick={handleChangeToFirstPage}
            // href={`?page=1`}
            className={`px-[10px] py-2 sm:px-[13px] sm:py-[12px] rounded-md bg-[#dbe4ea] text-sm`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3 h-3">
              <path
                fillRule="evenodd"
                d="M3.22 7.595a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-3.25 3.25Zm8.25-3.25-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={handleChangeToPrevPage}
            // href={`?page=${currentPage - 1}`}
            className={`px-[10px] py-2 sm:px-[13px] sm:py-[12px] rounded-md bg-[#dbe4ea] text-sm`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3 h-3">
              <path
                fillRule="evenodd"
                d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </>
      )}

      {pages.map(page => (
        <button
          onClick={() => handleChangePage(page)}
          key={`page_${page}`}
          //   href={`?page=${page}`}
          className={`px-3 py-1 sm:px-4 sm:py-[8px] rounded-md ${
            page === currentPage ? "bg-[#bbd6e3]" : "bg-[#dbe4ea]"
          } text-sm`}>
          {page}
        </button>
      ))}

      {currentPage < totalPages - 2 && (
        <>
          <button
            onClick={handleChangeToNextPage}
            // href={`?page=${currentPage + 1}`}
            className={`px-[10px] py-2 sm:px-[13px] sm:py-[12px] rounded-md bg-[#dbe4ea] text-sm`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3 h-3">
              <path
                fillRule="evenodd"
                d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            onClick={handleChangeToLastPage}
            // href={`?page=${totalPages}`}
            className={`px-[10px] py-2 sm:px-[13px] sm:py-[12px] rounded-md bg-[#dbe4ea] text-sm`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3 h-3">
              <path
                fillRule="evenodd"
                d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
