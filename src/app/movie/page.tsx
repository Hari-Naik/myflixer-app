import Movies from "@/components/Movies";
import Filter from "@/components/filter/Filter";
import Pagination from "@/components/pagination/Pagination";
import { fetchMovies } from "@/lib/data";
import { Movie } from "@/lib/definations";
import { tituliam } from "@/components/fonts";

export default async function Movie({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] || 1;
  const movies = await fetchMovies(+page);

  return (
    <div className="pt-28 px-4">
      <h1 className={`${tituliam.className} text-xl font-semibold`}>Movies</h1>
      <Filter />
      <Movies movies={movies} />
      <Pagination currentPage={+page} totalPages={159} />
    </div>
  );
}
