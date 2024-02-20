import Movies from "@/components/Movies";
import TvShows from "@/components/TvShows";
import Filter from "@/components/filter/Filter";
import Pagination from "@/components/pagination/Pagination";
import { fetchFilterMoviesOrTvShows } from "@/lib/data";

type PageProps = {
  params: { type: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ params, searchParams }: PageProps) {
  //   console.log(params);
  //   console.log(searchParams);

  const page = searchParams["page"] || 1;

  const args = {
    type: params.type,
    sortBy: searchParams.sort_by,
    genres: searchParams.with_genres,
    year: Number(searchParams.year),
    page: Number(page),
  };

  const { results, total_pages } = await fetchFilterMoviesOrTvShows(args);

  return (
    <section className="pt-28 px-4">
      <h2 className="text-2xl font-semibold">Filter</h2>
      <Filter />
      {!results && (
        <p className="text-sm text-center text-[#867ba6]">No result</p>
      )}
      {params.type === "movie" ? (
        <Movies movies={results} />
      ) : (
        <TvShows tvshows={results} />
      )}
      <Pagination currentPage={+page} totalPages={total_pages} type="filter" />
    </section>
  );
}
