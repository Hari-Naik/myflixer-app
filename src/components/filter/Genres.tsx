import React from "react";
import { MovieGenre } from "./CustomMultiSelect";
import GenreItem from "./GenreItem";

type Props = {
  movieGenres: MovieGenre | null;
  genres: number[];
  handleChangeGeres: (id: number) => void;
};

const Genres: React.FC<Props> = ({
  movieGenres,
  genres,
  handleChangeGeres,
}) => {
  return (
    <ul
      onClick={e => e.stopPropagation()}
      className="absolute z-50 bg-[#223a5e] rounded w-[45%] sm:max-w-[18%] h-[320px] px-2 py-1 -ml-2 mt-3 overflow-hidden overflow-y-auto">
      {movieGenres?.map(genre => (
        <GenreItem
          key={genre.id}
          genre={genre}
          genres={genres}
          handleChangeGeres={handleChangeGeres}
        />
      ))}
    </ul>
  );
};

export default Genres;
