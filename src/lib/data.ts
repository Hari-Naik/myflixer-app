import { unstable_noStore as noStore } from "next/cache";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWJkZDMzZjI0YzBkMDA1NDc4MjI2MzhjNmI1ODAyZCIsInN1YiI6IjYyNzU0MTc5NTgwMGM0NzliNzk5NzM1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m834_IaRazsaEZNqTkWnZSD434xllhb4u_kSH9Z7Ssk",
  },
};

export async function fetchMovies(page: number) {
  noStore();
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
    options
  );
  const { results } = await response.json();

  return results;
}

export async function fetchTvshows(page: number) {
  noStore();
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${page}`,
    options
  );
  const { results, total_pages } = await response.json();

  return { results, total_pages };
}

export async function fetchById(type: string, id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=cabdd33f24c0d00547822638c6b5802d&append_to_response=videos`,
    options
  );

  const data = await response.json();
  return data;
}

export async function fetchSimilar(type: string, id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US&page=1`,
    options
  );
  const { results } = await response.json();
  return results?.slice(0, 10);
}

export async function fetchPopular(type: string) {
  noStore();
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/popular?page=2`,
    options
  );
  const { results } = await response.json();
  return results;
}

type FilterTypes = {
  type: string;
  sortBy: string | string[] | undefined;
  genres: string | string[] | undefined;
  year: number;
  page: number;
};

export async function fetchFilterMoviesOrTvShows({
  type,
  sortBy,
  genres,
  year,
  page,
}: FilterTypes) {
  let api = `https://api.themoviedb.org/3/discover/${type}?&sort_by=${sortBy}`;

  if (genres) {
    api += `&with_genres=${genres}`;
  }
  if (year) {
    api += `&primary_release_year=${year}`;
  }

  //console.log(`${api}&page=${page}`);
  const response = await fetch(`${api}&page=${page}`, options);
  const { results, total_pages } = await response.json();

  return {
    results,
    total_pages,
  };
}

export async function fetchSearchResults(query: string, page: number) {
  noStore();
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}`,
    options
  );
  const { results, total_pages } = await response.json();

  return {
    results,
    total_pages,
  };
}
