import React, { SetStateAction } from "react";
import { tituliam } from "./fonts";
// import { tituliam } from "./Header";

type Props = {
  activeTab: string;
  setActiveTab: (value: SetStateAction<string>) => void;
};

const Tabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full flex flex-col items-center gap-1 md:flex-row md:gap-8">
      <span className={`${tituliam.className} text-xl font-semibold`}>
        Recommended
      </span>
      <div className="flex items-center gap-6 text-xs md:text-sm text-gray-500 font-semibold cursor-pointer">
        <span
          onClick={() => setActiveTab("movie")}
          className={`${
            activeTab === "movie"
              ? "border-[#bbd6e3] text-[#223a5e]"
              : "border-transparent"
          } border-b-2 hover:border-[#bbd6e3] transition duration-300`}>
          Movies
        </span>
        <span
          className={`${
            activeTab === "tv"
              ? "border-[#bbd6e3] text-[#223a5e]"
              : "border-transparent"
          } border-b-2 hover:border-[#bbd6e3] transition duration-300`}
          onClick={() => setActiveTab("tv")}>
          TV Shows
        </span>
      </div>
    </div>
  );
};

export default Tabs;
