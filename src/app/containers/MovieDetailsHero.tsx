import React from "react";
import Add from "../assets/svgs/Add";
import Button from "../components/Button";
import { addToFavourites } from "../helperFunctions/addToFavourites";

import { IMAGE_BASE_URL } from "../utils/constants";
import { movieType } from "../utils/types";

type MovieDetailsHeroType = {
  data: movieType;
};

const MovieDetailsHero = ({ data }: MovieDetailsHeroType) => {
  return (
    <section
      className={`relative h-full  w-full bg-cover bg-center z-1 pt-headerHeight rounded-lg`}
      style={{
        backgroundImage: `url(${
          data?.backdrop_path
            ? IMAGE_BASE_URL + data.backdrop_path
            : "/fallback-image.jpg"
        })`,
      }}
    >
      <div className="absolute h-full w-full top-0  bg-custom-gradient"></div>
      <div className="absolute bottom-4 w-full text-center lg:px-10 px-4">
        <h2 className="text-body font-bold text-3xl text-white-100">
          {data?.original_title}
        </h2>
        <p className="text-body font-semibold text-base text-grey-100 my-6">
          {data?.overview}
        </p>

        <div className="flex items-center gap-5 justify-center">
          <Button
            onClick={() => {
              addToFavourites(data);
            }}
          >
            <Add />
            <span>Add to Favourites</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsHero;
