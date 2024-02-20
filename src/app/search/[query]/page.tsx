import Movies from "@/components/Movies";
import SearchQueryResults from "@/components/SearchQueryResults";
import Pagination from "@/components/pagination/Pagination";
import { fetchSearchResults } from "@/lib/data";

type PageProps = {
  params: { query: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ params, searchParams }: PageProps) {
  const page = searchParams["page"] || 1;
  const query = params.query.split("%20").join(" ");

  const { results, total_pages } = await fetchSearchResults(query, +page);

  return (
    <section className="pt-28 px-4">
      <h2 className="text-xl font-semibold mb-6">
        Search results for {`"${query}"`}
      </h2>
      <SearchQueryResults results={results} />
      {total_pages > 1 && (
        <Pagination currentPage={+page} totalPages={total_pages} />
      )}
    </section>
  );
}
