import React from "react";
import MovieItem from "./MovieItem";
import { SearchResultType } from "@/lib/definations";
import MediaItem from "./MediaItem";

type Props = {
  results: SearchResultType[];
};

const SearchQueryResults = ({ results }: Props) => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 mt-4">
      {results?.map((item, index) => (
        <MediaItem
          key={item.id}
          data={item}
          type={item.media_type}
          index={index + 1}
        />
      ))}
    </div>
  );
};

export default SearchQueryResults;
