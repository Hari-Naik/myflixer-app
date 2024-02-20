import { Movie, TvShow } from "@/lib/definations";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { tituliam } from "./fonts";
import MediaItemInfo from "./MediaItemInfo";

type PropType = {
  data: Movie | TvShow;
  type: string;
  index?: number;
};

const isTvShow = (data: Movie | TvShow): data is TvShow => {
  return (data as TvShow).original_name !== undefined;
};

// type Media = Movie | TvShow;

// type Props<T extends Media> = {
//   data: T;
//   type: string;
// };

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const MediaItem = ({ data, type, index }: PropType) => {
  return (
    <div className="relative h-max pb-4 group cursor-pointer group">
      <Link
        href={`/${type}/${data.id}`}
        className="relative block h-max rounded-md">
        <div className="relative h-[258px] bg-[#b8bec3] rounded-t-md">
          <Image
            src={`${BASE_URL}${data.poster_path}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-t-md"
            alt={isTvShow(data) ? data.original_name : data.original_title}
          />
        </div>
        <div className="flex justify-between text-xs p-1 bg-[#bbd6e3] rounded-b-md">
          <span>
            {new Date(
              isTvShow(data) ? data.first_air_date : data.release_date
            ).getFullYear()}
          </span>
          <span>{type}</span>
        </div>
      </Link>
      <Link
        href={`/${type}/${data.id}`}
        className="hidden absolute top-0 z-40 w-full h-[258px] group-hover:flex items-center justify-center bg-gradient-to-b from-[#f9f9f9]/10 to-[#bbd6e3]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 text-white">
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <h2 className={`${tituliam.className} text-sm font-semibold text-center`}>
        {isTvShow(data) ? data.original_name : data.original_title}
      </h2>

      <MediaItemInfo data={data} type={type} index={index} />
    </div>
  );
};

export default MediaItem;
