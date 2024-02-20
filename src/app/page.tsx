import PopularMovies from "@/components/popular/PopularMovies";
import PopularTvShows from "@/components/popular/PopularTvShows";
import Recommended from "@/components/recommended/Recommended";
import SkeltonLoading from "@/components/skeltons/SkeltonLoading";

import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="px-4 pt-32">
      <Recommended />

      <Suspense fallback={<SkeltonLoading />}>
        <PopularMovies />
      </Suspense>
      <Suspense fallback={<SkeltonLoading />}>
        <PopularTvShows />
      </Suspense>
    </main>
  );
}
