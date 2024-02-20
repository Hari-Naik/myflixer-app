"use client";
import React, { useContext, useEffect, useState } from "react";

import CustomMultiSelect from "./CustomMultiSelect";
import { useRouter, useSearchParams } from "next/navigation";
import { tituliam } from "../fonts";
import { Context } from "@/context/context";

const sortByOptions = [
  { id: 1, name: "popularity.asc" },
  { id: 2, name: "popularity.desc" },
  { id: 3, name: "primary_release_date.asc" },
  { id: 4, name: "primary_release_date.desc" },
  { id: 5, name: "vote_average.asc" },
  { id: 6, name: "vote_average.desc" },
  { id: 7, name: "vote_count.asc" },
  { id: 8, name: "vote_count.desc" },
];

const Filter = () => {
  const [type, setType] = useState("");
  const [genres, setGenres] = useState<number[] | []>([]);
  const [year, setYear] = useState<number | string>("");
  const [sortBy, setSortBy] = useState(sortByOptions[1].name);

  //   const { type, genres, year, sortBy, setType, setGenres, setYear, setSortBy } =
  //     useContext(Context);

  const router = useRouter();
  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const genre = genres.join(",");
    let href = `/filter/${type}?sort_by=${sortBy}`;

    if (genres?.length >= 1) {
      href += `&with_genres=${genre}`;
    }
    if (year) {
      href += `&year=${year}`;
    }

    router.push(`${href}&page=1`);
  };

  return (
    <form
      onSubmit={handleFilter}
      className={`${tituliam.className} w-full flex items-center flex-wrap gap-4 my-4 `}>
      {/* types */}
      <select
        name="type"
        id="type"
        required
        value={type}
        onChange={e => setType(e.target.value)}
        className="w-[45%] sm:w-[18%] sm:flex-1 p-2 bg-[#dbe4ea]/40 rounded text-sm text-[#867ba6] hover:bg-[#d4e5ed] cursor-pointer">
        <option value="" disabled hidden>
          Type
        </option>
        <option value="movie">Movies</option>
        <option value="tv">TV Shows</option>
      </select>

      {/* genre */}
      <CustomMultiSelect genres={genres} setGenres={setGenres} />

      {/* year */}
      <select
        name="year"
        id="year"
        value={year}
        onChange={e => setYear(+e.target.value)}
        className="w-[45%] sm:w-[18%] sm:flex-1 p-2 bg-[#dbe4ea]/40 rounded text-sm text-[#867ba6] hover:bg-[#d4e5ed] cursor-pointer">
        <option value="" disabled hidden>
          Year
        </option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>

      {/* sort_by */}

      <select
        name="sortBy"
        id="sortBy"
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
        className="w-[45%] sm:w-[18%] sm:flex-1 p-2 bg-[#dbe4ea]/40 rounded text-sm text-[#867ba6] hover:bg-[#d4e5ed] cursor-pointer">
        {sortByOptions.map(opt => (
          <option key={opt.id} value={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="w-full flex items-center justify-center sm:w-[18%] sm:flex-1 bg-black text-sm text-white rounded p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4">
          <path d="M14 2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2.172a2 2 0 0 0 .586 1.414l2.828 2.828A2 2 0 0 1 6 9.828v4.363a.5.5 0 0 0 .724.447l2.17-1.085A2 2 0 0 0 10 11.763V9.829a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 0 14 4.172V2Z" />
        </svg>
        <span>Filter</span>
      </button>
    </form>
  );
};

export default Filter;
