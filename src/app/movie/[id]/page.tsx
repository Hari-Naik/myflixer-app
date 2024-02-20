import Movies from "@/components/Movies";
import MovieInfo from "@/components/details/MovieInfo";
import Poster from "@/components/details/Poster";
import SimilarMovies from "@/components/similar/page";
import { fetchById } from "@/lib/data";
import { MovieDetails } from "@/lib/definations";
import { url } from "inspector";

type CountryType = {
  iso_3166_1: string;
  name: string;
};

type CompanyType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type GenreType = {
  id: number;
  name: string;
};

const BASE_URL = "https://image.tmdb.org/t/p/original/";

export default async function MovieDetails({
  params,
}: {
  params: { id: number };
}) {
  const movie = await fetchById("movie", params.id);
  //   const [movie, setMovie] = useState<MovieDetails | null>(null);
  //   const { id } = useParams();

  //   useEffect(() => {
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/${id}?api_key=cabdd33f24c0d00547822638c6b5802d&append_to_response=videos`,
  //       options
  //     )
  //       .then(res => res.json())
  //       .then(data => {
  //         setMovie(data);
  //       })
  //       .catch(err => alert(err));
  //   }, []);

  const productionCountries = movie?.production_countries.map(
    (country: CountryType) => country.name
  );
  const productionCompanies = movie?.production_companies.map(
    (company: CompanyType) => company.name
  );
  const genres = movie?.genres.map((genre: GenreType) => genre.name);

  const imgUrl = movie && `${BASE_URL}${movie.backdrop_path}`;

  return (
    <section>
      <div
        className={`h-screen bg-[#1b2e4b] flex items-center justify-center`}
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_6fr] w-full xl:max-w-[80%] px-10">
          <Poster posterPath={movie?.poster_path} />
          <MovieInfo
            title={movie.original_title}
            rating={movie.vote_average}
            runtime={movie.runtime}
            overview={movie.overview}
            releaseDate={movie.release_date}
            countries={productionCountries}
            companies={productionCompanies}
            genres={genres}
            type="Movie"
            keyId={movie?.videos?.results[0]?.key}
          />
        </div>
      </div>

      <SimilarMovies type="movie" id={movie?.id} />
    </section>
  );
}
