"use client";

import React, { useRef } from "react";
// import Skeleton from "react-loading-skeleton";
import { movieType } from "../utils/types";
import Loader from "./Loader";
import MovieCard from "./MovieCard";
import { LeftButton, RightButton } from "./NavButtons";

type MovieListContainerTypes = {
  list?: movieType[];
  title?: string;
  loading?: boolean;
};

const MovieListContainer = ({
  list,
  title,
  loading,
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

  if (loading) {
    <Loader />;
  }

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
        {list?.length &&
          list?.map((data) => <MovieCard data={data} key={data?.id} />)}
      </div>
      {/* <div className="border-2 border-red-100">
        {!loading && (
          <Skeleton
            count={1}
            className="border-2 border-green-100 block rounded mb-0"
            height={300}
            width={224} // No need for quotes around numbers
            baseColor="#999999" // Base color for the skeleton
            highlightColor="#ffffff" // Highlight color for the shimmer effect
            duration={1.5} // Duration of the animation in seconds
          />
        )}
      </div> */}
    </section>
  );
};

export default MovieListContainer;
