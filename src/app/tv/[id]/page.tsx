import MovieInfo from "@/components/details/MovieInfo";
import Poster from "@/components/details/Poster";

import SimilarMovies from "@/components/similar/page";
import { fetchById, options } from "@/lib/data";
import { TvshowDetails } from "@/lib/definations";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

export default async function TvShowDetails({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;
  const tvshow = await fetchById("tv", id);
  //   const [tvshow, setTvshow] = useState<TvshowDetails | null>(null);
  //   const { id } = useParams();

  //   useEffect(() => {
  //     fetch(
  //       `https://api.themoviedb.org/3/tv/${id}?api_key=cabdd33f24c0d00547822638c6b5802d&append_to_response=videos`,
  //       options
  //     )
  //       .then(res => res.json())
  //       .then(data => {
  //         setTvshow(data);
  //       })
  //       .catch(err => console.log(err));
  //   }, [id]);

  const productionCountries = tvshow?.production_countries?.map(
    (country: any) => country.name
  );
  const productionCompanies = tvshow?.production_companies?.map(
    (company: any) => company.name
  );

  const directors = tvshow?.created_by?.map((director: any) => director.name);

  const imgUrl = `${BASE_URL}${tvshow.backdrop_path}`;

  return (
    <div>
      {/* <div className="bg-[#1b2e4b] p-4 rounded-md grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4 mt-32">
        <Poster posterPath={tvshow.poster_path} />
        <MovieInfo
          title={tvshow?.original_name}
          rating={tvshow?.vote_average}
          runtime={tvshow?.episode_run_time[0] || 0}
          overview={tvshow?.overview}
          releaseDate={tvshow?.first_air_date}
          countries={productionCountries}
          companies={productionCompanies}
          directors={directors}
          type="Tv"
          keyId={tvshow?.videos?.results[0]?.key}
        />
      </div> */}

      <div
        className={`h-screen flex items-center justify-center`}
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_6fr] w-full xl:max-w-[80%] h-max px-10">
          <Poster posterPath={tvshow.poster_path} />
          <MovieInfo
            title={tvshow?.original_name}
            rating={tvshow?.vote_average}
            runtime={tvshow?.episode_run_time[0] || 0}
            overview={tvshow?.overview}
            releaseDate={tvshow?.first_air_date}
            countries={productionCountries}
            companies={productionCompanies}
            directors={directors}
            type="Tv"
            keyId={tvshow?.videos?.results[0]?.key}
          />
        </div>
      </div>
      <SimilarMovies type="tv" id={tvshow.id} />
    </div>
  );
}
