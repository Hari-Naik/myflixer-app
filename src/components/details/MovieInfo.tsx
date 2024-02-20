"use client";
import React from "react";
import ProductionDetails from "./ProductionDetails";
import InfoHeader from "./InfoHeader";
import { tituliam } from "../fonts";

type Props = {
  title: string;
  rating: number;
  runtime: number;
  overview: string;
  releaseDate: string;
  countries?: string[];
  companies?: string[];
  genres?: string[];
  directors?: string[];
  type: "Movie" | "Tv";
  keyId: string;
};

const MovieInfo = (props: Props) => {
  return (
    <div className={`${tituliam.className} flex-1 text-white lg:ml-10`}>
      <InfoHeader
        title={props.title}
        rating={props.rating}
        runtime={props.runtime}
        keyId={props.keyId}
      />
      <div className="text-sm py-3 border-b border-b-[#264169]">
        <p className=" text-base font-semibold mb-2">Overview:</p>
        {props.overview}
      </div>

      <div className="py-4 text-sm">
        <div className="flex items-center gap-14 pb-1">
          <span className="text-base font-semibold">Type:</span>
          <span>{props.type}</span>
        </div>

        {props.countries && (
          <ProductionDetails items={props.countries} label="Country" val={9} />
        )}

        {props.genres && (
          <ProductionDetails items={props.genres} label="Genre" val={12} />
        )}

        <div className="flex gap-9 pb-1">
          <span className="text-base font-semibold">Release:</span>
          <span>{props.releaseDate}</span>
        </div>

        {props.directors && (
          <ProductionDetails items={props.directors} label="Director" val={9} />
        )}

        {props.companies && (
          <ProductionDetails
            items={props.companies}
            label="Production"
            val={4}
          />
        )}
      </div>
    </div>
  );
};
export default MovieInfo;
