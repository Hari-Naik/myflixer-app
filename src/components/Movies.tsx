import React from "react";
import MovieItem from "./MovieItem";
import { Movie } from "@/lib/definations";
import Item from "./MediaItem";
import MediaItem from "./MediaItem";

type Props = {
  movies: Movie[];
};

const Movies = ({ movies }: Props) => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 mt-4">
      {movies?.map((movie: Movie, index) => {
        return (
          // <MovieItem
          //   key={movie.id}
          //   link={`/movie/${movie.id}`}
          //   posterPath={movie.poster_path}
          //   date={movie.release_date}
          //   title={movie.original_title}
          //   type="movie"
          // />
          <MediaItem
            key={movie.id}
            data={movie}
            type="movie"
            index={index + 1}
          />
        );
      })}
    </div>
  );
};

export default Movies;
