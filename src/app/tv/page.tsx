import TvShows from "@/components/TvShows";
import Filter from "@/components/filter/Filter";
import { tituliam } from "@/components/fonts";
import Pagination from "@/components/pagination/Pagination";

import { fetchTvshows } from "@/lib/data";

type PageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function Tv({ searchParams }: PageProps) {
  const page = searchParams["page"] || 1;
  const { results, total_pages } = await fetchTvshows(+page);

  return (
    <div className="pt-28 px-4">
      <h1 className={`${tituliam.className} text-xl font-semibold`}>
        TV Shows
      </h1>
      <Filter />
      <TvShows tvshows={results} />
      <Pagination currentPage={+page} totalPages={total_pages} />
    </div>
  );
}
