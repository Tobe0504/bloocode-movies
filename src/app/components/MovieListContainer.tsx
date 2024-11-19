"use client";

import React, { Dispatch, SetStateAction, useRef } from "react";
import { movieType } from "../utils/types";
import Loader from "./Loader";
import MovieCard from "./MovieCard";
import { LeftButton, RightButton } from "./NavButtons";

type MovieListContainerTypes = {
  list?: movieType[];
  title?: string;
  loading?: boolean;
  setFavouriteState?: Dispatch<SetStateAction<movieType[]>>;
};

const MovieListContainer = ({
  list,
  title,
  loading,
  setFavouriteState,
}: MovieListContainerTypes) => {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);

  // Utils
  const scrollLeft = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({
        left: -containerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({
        left: containerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="my-10">
      <div className="flex items-center justify-between gap-4  my-5">
        <h4 className="text-bold font-body text-lg lg:text-3xl font-bold">
          {title}
        </h4>

        <div className="flex items-center gap-4  ">
          <LeftButton
            onClick={() => {
              scrollLeft();
            }}
          />
          <RightButton
            onClick={() => {
              scrollRight();
            }}
          />
        </div>
      </div>

      <div
        className="flex overflow-auto gap-5 p-4 scrollbar-none"
        ref={containerRef}
      >
        {loading ? (
          <div className="flex items-center justify-center  w-full">
            <Loader />
          </div>
        ) : (
          list?.length &&
          list?.map((data) => (
            <MovieCard
              data={data}
              key={data?.id}
              setFavouritesState={setFavouriteState}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default MovieListContainer;
