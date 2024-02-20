import React from "react";

type Props = {
  genres: number[];
  genre: {
    id: number;
    name: string;
  };
  handleChangeGeres: (id: number) => void;
};

const GenreItem: React.FC<Props> = ({ genre, genres, handleChangeGeres }) => {
  const active = genres.includes(genre.id);
  return (
    <li
      onClick={() => handleChangeGeres(genre.id)}
      className={`flex items-center gap-1 text-xs group hover:bg-[#bbd6e3] ${
        active ? "bg-[#bbd6e3] text-[#444d5a]" : "text-[#fff]"
      } p-1 rounded-sm mb-1`}>
      <div
        className={`h-[9px] w-[9px] border-2 group-hover:border-[#444d5a] ${
          active ? "border-[#444d5a]" : "border-[#fff] "
        } rounded-sm flex items-center justify-center`}>
        <span
          className={`text-[10px] -mt-[2px] font-bold ${
            active ? "block" : "hidden"
          }`}>
          +
        </span>
      </div>
      <span className="group-hover:text-[#444d5a]">{genre.name}</span>
    </li>
  );
};

export default GenreItem;
