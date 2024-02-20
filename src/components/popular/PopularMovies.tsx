import { fetchPopular } from "@/lib/data";
import Movies from "../Movies";
// import { useEffect, useState } from "react";
// import { Movie } from "@/lib/definations";
// import { tituliam } from "../Header";
import { Suspense } from "react";
import SkeltonLoading from "../skeltons/SkeltonLoading";
import { tituliam } from "../fonts";
import Link from "next/link";

export default async function PopularMovies() {
  const popularMovies = await fetchPopular("movie");

  //   const [popularMovies, setPopularMovies] = useState<Movie[] | null>(null);

  //   useEffect(() => {
  //     const fetchPopularMovies = async () => {
  //       const movies = await fetchPopular("movie");
  //       setPopularMovies(movies);
  //     };

  //     fetchPopularMovies();
  //   }, []);

  //   //   if (!popularMovies) {
  //     return <p>Loading...</p>;
  //   }

  return (
    <div className="mt-4">
      <div className="w-full flex justify-center sm:justify-between items-center">
        <h1 className={`${tituliam.className} text-xl font-semibold`}>
          Popular Movies
        </h1>
        <Link href={"/movie"} className="hidden sm:flex items-center gap-1">
          <span className={`${tituliam.className} text-sm font-semibold`}>
            View All
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <Movies movies={popularMovies?.slice(0, 12)} />
    </div>
  );
}
