"use client";
import { useState } from "react";
import VideoPlayer from "../VideoPlayer";

type Props = {
  title: string;
  rating: number;
  runtime: number;
  keyId: string;
};

const InfoHeader = ({ title, rating, runtime, keyId }: Props) => {
  const [showTrailer, setShowTrailer] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center md:items-start border-b border-b-[#264169] pb-3">
        <h2 className="text-2xl">{title}</h2>
        <div className="flex mt-2 items-center  gap-2">
          <div className="px-1 bg-[#c0d0e8] text-xs text-[#1b2e4b] rounded">
            HD
          </div>
          <div
            onClick={() => setShowTrailer(true)}
            className="flex items-center gap-1 border border-[#c0d0e8] px-1 text-xs text-[#c0d0e8] rounded cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <span>Trailer</span>
          </div>
          <div className="flex gap-1 px-1 bg-[#c0d0e8] rounded text-xs text-[#1b2e4b]">
            <span>IMDB</span>
            <span>{Math.round(rating)}</span>
          </div>
          <span className="text-sm">{runtime} min</span>
        </div>
      </div>
      {showTrailer && (
        <VideoPlayer keyId={keyId} setShowTrailer={setShowTrailer} />
      )}
    </>
  );
};

export default InfoHeader;
