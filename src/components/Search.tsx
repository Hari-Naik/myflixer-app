"use client";

import { options } from "@/lib/data";
import { SearchResultType } from "@/lib/definations";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SearchDropDown from "./SearchDropDown";

import _debounce from "lodash/debounce";
import { set } from "lodash";

const Search = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResultType[]>([]);

  //   useEffect(() => {
  //     fetch(`https://api.themoviedb.org/3/search/multi?query=${query}`, options)
  //       .then(response => response.json())
  //       .then(res => setResults(res.results.slice(0, 6)));
  //   }, [query]);

  const fetchSuggestions = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}`,
      options
    );
    const { results } = await response.json();
    setResults(results.slice(0, 6));
  };

  const debounceFetchSuggestions = _debounce(() => {
    fetchSuggestions();
  }, 1000);

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    debounceFetchSuggestions();
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 w-full md:max-w-2xl bg-white px-1 py-[4px] rounded-sm">
        <Link
          href={"/filter/movie"}
          className="flex w-max bg-[#223a5e] rounded-sm text-white text-[15px] px-1 py-[2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Filter</span>
        </Link>
        <input
          type="text"
          value={query}
          onChange={handleChangeQuery}
          className="flex-1 outline-none"
          placeholder="Search movies & TV Series and more..."
        />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-[#223a5e]">
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {query.length >= 4 && (
        <SearchDropDown results={results} query={query} setQuery={setQuery} />
      )}
    </div>
  );
};

export default Search;
