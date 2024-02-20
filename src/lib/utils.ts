import { ReadonlyURLSearchParams } from "next/navigation";
import { options } from "./data";

export function generateFilterRoutePath(
  pathname: string,
  searchParams: ReadonlyURLSearchParams
) {
  const sortBy = searchParams.get("sort_by");
  const genres = searchParams.get("with_genres");
  const year = searchParams.get("year");
  const page = searchParams.get("page");

  let href = `${pathname}?sort_by=${sortBy}`;
  if (genres) {
    href += `&with_genres=${genres}`;
  }
  if (year) {
    href += `&year=${year}`;
  }

  return href;
}

export function generatePages(currentPage: number, totalPages: number) {
  let startPage = currentPage - 2;
  let endPage = currentPage + 2;

  const currPage = Math.min(Math.max(Number(currentPage), 1), totalPages);

  if (currPage <= 3) {
    startPage = 1;
    endPage = 5;
  } else if (currPage >= totalPages - 2) {
    startPage = totalPages - 4;
    endPage = totalPages;
  }

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
}

export async function fetchRecommendedMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  );
  const { results } = await res.json();
  return results.slice(0, 12);
}

export async function fetchRecommendedTvShows() {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    options
  );
  const { results } = await res.json();
  return results.slice(0, 12);
}
