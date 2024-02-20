import React, { SetStateAction } from "react";

type Props = {
  setShowTrailer: (value: SetStateAction<boolean>) => void;
  keyId: string;
};

const VideoPlayer: React.FC<Props> = ({ setShowTrailer, keyId }) => {
  return (
    <div
      onClick={e => {
        e.stopPropagation();
        setShowTrailer(false);
      }}
      className="absolute top-0 left-0 z-30 w-full h-full bg-[#060709]/90">
      <div className="relative w-[90%] md:w-[70%] lg:w-[50%] h-[40%] sm:h-[60%] mt-32 mx-auto">
        <div
          onClick={() => setShowTrailer(false)}
          className="w-[20px] h-[20px] flex items-center justify-center bg-white rounded-full cursor-pointer absolute right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-black">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </div>
        <iframe
          src={`https://www.youtube.com/embed/${keyId}?autoplay=1`}
          width="100%"
          height="100%"
          loading="lazy"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
