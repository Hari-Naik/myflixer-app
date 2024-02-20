"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { tituliam } from "../fonts";

type Props = {
  posterPath: string;
  title: string;
  rating: number;
  date: string;
  link: string;
  type?: string;
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const SimilarMovieItem: React.FC<Props> = ({
  posterPath,
  title,
  rating,
  date,
  link,
  type,
  setQuery,
}) => {
  return (
    <div
      onClick={() => (setQuery ? setQuery("") : "")}
      className="border-b border-[#264169] hover:bg-[#264169]/70 py-2 px-4 cursor-pointer">
      <Link href={link} className="flex items-center gap-6">
        <div
          className={`relative ${
            type === "search" ? "w-[35px] h-[47px]" : "w-[90px] h-[90px]"
          }`}>
          <Image
            src={`${BASE_URL}${posterPath}`}
            fill
            className="rounded-md"
            alt={title}
          />
        </div>
        <div className={`${tituliam.className} flex flex-col gap-2`}>
          <h3 className={`${type === "search" ? "text-xs" : ""}`}>{title}</h3>
          <div className="flex items-center gap-1 text-xs text-[#c0d0e8]">
            <div className="flex items-center gap-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>

              {Math.round(rating)}
            </div>
            <span>-</span>
            <span>{new Date(date).getFullYear()}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SimilarMovieItem;
