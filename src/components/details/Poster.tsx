import Image from "next/image";

type Props = {
  posterPath: string;
};

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const Poster = ({ posterPath }: Props) => {
  return (
    <div className="relative h-[320px] w-[90%] max-w-[270px] md:w-full mx-auto md:mx-0 mb-10">
      <Image
        src={`${BASE_URL}${posterPath}`}
        fill
        className="rounded-md"
        alt="movie"
      />
    </div>
  );
};

export default Poster;
