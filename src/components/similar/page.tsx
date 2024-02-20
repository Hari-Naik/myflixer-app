import { fetchSimilar } from "@/lib/data";

import SimilarMovieItem from "./SimilarMovieItem";
import { tituliam } from "../fonts";
import MediaItem from "../MediaItem";

type Props = {
  type: string;
  id: number;
};

export default async function SimilarMovies({ type, id }: Props) {
  const movies = await fetchSimilar(type, id);
  //   const [movies, setMovies] = useState<Movie[] | null>(null);

  //   useEffect(() => {
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US`,
  //       options
  //     )
  //       .then(res => res.json())
  //       .then(res => {
  //         setMovies(res.results);
  //       })
  //       .catch(err => console.log(err));
  //   }, [id]);

  //   if (!movies) {
  //     return <p>Loading...</p>;
  //   }

  return (
    <section className={`${tituliam.className} bg-[#1b2e4b] text-[#fff] pt-10`}>
      <h1 className="text-lg font-semibold p-4">You may also like</h1>

      {movies?.map((movie: any, index: number) => (
        <SimilarMovieItem
          key={movie.id}
          link={`/${type}/${movie.id}`}
          posterPath={movie.poster_path}
          title={type === "tv" ? movie.original_name : movie.original_title}
          rating={movie.vote_average}
          date={type === "tv" ? movie.first_air_date : movie.release_date}
        />
      ))}
    </section>
  );
}
