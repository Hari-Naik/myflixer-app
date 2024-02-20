"use client";

import MovieItem from "@/components/MovieItem";
import { tituliam } from "@/components/fonts";
import SkeltonLoading from "@/components/skeltons/SkeltonLoading";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type FavouriteType = {
  _id: string;
  uid: string;
  media_id: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  type: string;
};

const Page = () => {
  const { data: session } = useSession();
  const [favourites, setFavourites] = useState<FavouriteType[] | null>(null);
  const [loading, setLoading] = useState(true);

  console.log(favourites && favourites[0]);

  useEffect(() => {
    fetchFavourites();
  }, []);

  const fetchFavourites = async () => {
    const res = await fetch(`/api/favourites?uid=${session?.user?.id}`);
    const data = await res.json();
    setFavourites(data);
    setLoading(false);
  };

  const handleRemoveFromFavourite = async (id: string, title: string) => {
    try {
      const res = await fetch(`/api/favourites?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success(`${title} removed from favourites.`);
        fetchFavourites();
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      toast.error("error Something went wrong");
    }
  };

  return (
    <section className="w-full pt-32 px-4">
      {loading && <SkeltonLoading />}
      {!loading && (
        <h2 className={`${tituliam.className} text-xl font-semibold`}>
          Favourites
        </h2>
      )}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 mt-4">
        {favourites &&
          favourites.map(item => (
            <MovieItem
              key={item._id}
              id={item._id}
              link={`/${item.type}/${item.media_id}`}
              posterPath={item.poster_path}
              title={item.title}
              releaseDate={item.release_date}
              type={item.type}
              overview={item.overview}
              rating={item.vote_average}
              handleRemoveFromFavourite={handleRemoveFromFavourite}
            />
          ))}
      </div>
    </section>
  );
};

export default Page;
