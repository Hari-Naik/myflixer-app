"use client";
import { Movie, TvShow } from "@/lib/definations";
import React from "react";
import { tituliam } from "./fonts";
import Link from "next/link";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

type PropType = {
  data: Movie | TvShow;
  type: string;
  index?: number;
};

const isTvShow = (data: Movie | TvShow): data is TvShow => {
  return (data as TvShow).original_name !== undefined;
};

const MediaItemInfo: React.FC<PropType> = ({ data, type, index }) => {
  const position = index && index % 6 === 0 ? "right-[103%]" : "left-[103%]";
  const { data: session } = useSession();

  const handleAddToFavourites = async () => {
    const media = {
      uid: session?.user?.id,
      media_id: data.id,
      poster_path: data.poster_path,
      title: isTvShow(data) ? data.original_name : data.original_title,
      overview: data.overview,
      release_date: isTvShow(data) ? data.first_air_date : data.release_date,
      vote_average: data.vote_average,
      type: type,
    };

    try {
      const res = await fetch("/api/favourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(media),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.msg);
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div
      className={`${tituliam.className} hidden group-hover:block absolute top-[25%] ${position} z-50 w-[310px] h-[310px] rounded-md`}>
      <div className="w-full bg-[#1b2e4b] p-3 rounded-t-md text-sm text-[#fff]">
        <h2 className="text-base font-semibold">
          {isTvShow(data) ? data.original_name : data.original_title}
        </h2>
        <div className="flex items-center gap-2">
          <div className="px-1 bg-[#c0d0e8] text-xs text-[#1b2e4b] rounded">
            HD
          </div>
          <div className="flex items-center gap-1">
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

            {Math.round(data.vote_average)}
          </div>
          <span>
            {new Date(
              isTvShow(data) ? data.first_air_date : data.release_date
            ).getFullYear()}
          </span>
          <div className="ml-auto" onClick={handleAddToFavourites}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-3 py-4 bg-[#223a5e] rounded-b-md text-sm text-[#fff]">
        {data.overview}
        <Link
          href={`/${type}/${data.id}`}
          className="w-full py-2 px-3 flex items-center justify-center gap-1 bg-[#bbd6e3] text-[#1b2e4b] rounded-md mt-4">
          <span className="text-sm">Watch Now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default MediaItemInfo;
