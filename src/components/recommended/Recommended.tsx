"use client";

// import { fetchMovies, fetchTvshows, options } from "@/lib/data";

import React, { useEffect, useState } from "react";
import Tabs from "../Tabs";
import Movies from "../Movies";
import TvShows from "../TvShows";
import SkeltonLoading from "../skeltons/SkeltonLoading";
import { fetchRecommendedMovies, fetchRecommendedTvShows } from "@/lib/utils";

const Recommended = () => {
  const [activeTab, setActiveTab] = useState("movie");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecommended = async () => {
      if (activeTab === "movie") {
        const movies = await fetchRecommendedMovies();
        setData(movies);
      } else {
        const tvshows = await fetchRecommendedTvShows();
        setData(tvshows);
      }

      setLoading(false);
    };

    fetchRecommended();
  }, [activeTab]);

  if (loading) {
    return <SkeltonLoading />;
  }

  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "movie" ? (
        <Movies movies={data} />
      ) : (
        <TvShows tvshows={data} />
      )}
    </div>
  );
};

export default Recommended;
