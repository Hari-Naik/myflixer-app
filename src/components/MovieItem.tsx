"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { tituliam } from "./fonts";
import { Movie, TvShow } from "@/lib/definations";
import toast from "react-hot-toast";

type Props = {
  id: string;
  link: string;
  posterPath: string;
  title: string;
  releaseDate: string;
  rating: number;
  overview: string;
  type: string;
  handleRemoveFromFavourite?: (id: string, title: string) => Promise<void>;
};

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const MovieItem = ({
  id,
  link,
  posterPath,
  releaseDate,
  title,
  type,
  handleRemoveFromFavourite,
}: Props) => {
  const removeFromFavourite = () => {
    if (handleRemoveFromFavourite) {
      handleRemoveFromFavourite(id, title);
    }
  };

  return (
    <div className="relative h-max pb-4 group cursor-pointer group">
      <Link href={link} className="relative block h-max rounded-md">
        <div className="relative h-[258px] bg-[#b8bec3] rounded-t-md">
          <Image
            src={`${BASE_URL}${posterPath}`}
            fill
            className="rounded-t-md"
            alt={title}
          />
        </div>
        <div className="flex justify-between text-xs p-1 bg-[#bbd6e3] rounded-b-md">
          <span>{new Date(releaseDate).getFullYear()}</span>
          <span>{type}</span>
        </div>
      </Link>
      <Link
        href={link}
        className="hidden absolute top-0 z-40 w-full h-[258px] group-hover:flex items-center justify-center bg-gradient-to-b from-[#f9f9f9]/10 to-[#bbd6e3] p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 text-white -mt-7">
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>

      <div
        onClick={removeFromFavourite}
        className="hidden group-hover:flex absolute z-40 right-1 top-1 w-6 h-6 items-center justify-center ml-auto rounded bg-[#bbd6e3]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-[#223a5e]">
          <path
            fillRule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h2 className={`${tituliam.className} text-sm font-semibold text-center`}>
        {title?.length > 20 ? `${title.slice(0, 20)}...` : title}
      </h2>
      {/* <div className="hidden group-hover:block absolute top-[25%] left-[103%] z-50 w-[310px] h-[310px] bg-blue-200 rounded-md"></div> */}
    </div>
  );
};

export default MovieItem;
