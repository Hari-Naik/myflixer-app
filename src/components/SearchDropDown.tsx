import React from "react";
import SimilarMovieItem from "./similar/SimilarMovieItem";
import Link from "next/link";
import { SearchResultType } from "@/lib/definations";

type Props = {
  results: SearchResultType[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchDropDown: React.FC<Props> = ({ results, query, setQuery }) => {
  return (
    <ul className="absolute z-50 bg-[#223a5e] rounded-sm text-[#fff] h-max w-full md:max-w-2xl mt-2 shadow-lg">
      {results?.map(item => (
        <SimilarMovieItem
          key={item.id}
          link={`/${item.media_type}/${item.id}`}
          posterPath={item.poster_path}
          title={item.original_title}
          rating={item.vote_average}
          date={item.release_date}
          type="search"
          setQuery={setQuery}
        />
      ))}
      <Link
        onClick={() => setQuery("")}
        href={`/search/${query}`}
        className="w-full text-center block text-sm p-4 bg-[#1b2e4b] rounded-b-md">
        View All Results
      </Link>
    </ul>
  );
};

export default SearchDropDown;
