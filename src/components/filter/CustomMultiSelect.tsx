"use client";
import React, { useEffect, useState } from "react";

import { options } from "@/lib/data";
import { Span } from "next/dist/trace";
import Genres from "./Genres";
import { tituliam } from "../fonts";

export type MovieGenre = {
  id: number;
  name: string;
}[];

type PropTypes = {
  genres: number[];
  setGenres: React.Dispatch<React.SetStateAction<[] | number[]>>;
};

const CustomMultiSelect: React.FC<PropTypes> = ({ genres, setGenres }) => {
  const [showGenres, setShowGenres] = useState<boolean>(false);
  const [movieGenres, setMovieGenres] = useState<MovieGenre | null>(null);

  useEffect(() => {
    fetchMovieGenres();
  }, []);

  async function fetchMovieGenres() {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    );
    const { genres } = await response.json();
    setMovieGenres(genres);
  }

  const handleChangeGeres = (id: number) => {
    if (genres.includes(id)) {
      const filteredGenres = genres.filter(genreId => genreId !== id);
      setGenres([...filteredGenres]);
    } else {
      setGenres([...genres, id]);
    }
  };

  return (
    <div
      onClick={() => setShowGenres(!showGenres)}
      className={`${tituliam.className} w-[45%] sm:w-[18%] sm:flex-1 p-2 bg-[#dbe4ea]/40 rounded text-sm text-[#867ba6] hover:bg-[#d4e5ed] cursor-pointer`}>
      <div className="w-full flex items-center justify-between ">
        <h3>{genres.length >= 1 ? `${genres.length} selected` : "Genre"}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`w-4 h-4 ${showGenres && "rotate-180"}`}>
          <path
            fillRule="evenodd"
            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {showGenres && (
        <Genres
          movieGenres={movieGenres}
          genres={genres}
          handleChangeGeres={handleChangeGeres}
        />
      )}
    </div>
  );
};

export default CustomMultiSelect;
