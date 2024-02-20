import React from "react";
import MovieItem from "./MovieItem";
import { TvShow } from "@/lib/definations";
import MediaItem from "./MediaItem";

type Props = {
  tvshows: TvShow[];
};

const TvShows = ({ tvshows }: Props) => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 mt-4">
      {tvshows?.map((tvshow: TvShow, index) => (
        // <MovieItem
        //   key={tvshow.id}
        //   link={`/tv/${tvshow.id}`}
        //   posterPath={tvshow.poster_path}
        //   date={tvshow.first_air_date}
        //   title={tvshow.original_name}
        //   type="tv"
        // />

        <MediaItem key={tvshow.id} data={tvshow} type="tv" index={index + 1} />
      ))}
    </div>
  );
};

export default TvShows;
