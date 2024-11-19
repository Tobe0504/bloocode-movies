import React, { useContext } from "react";
import Add from "../assets/svgs/Add";
import Button from "../components/Button";
import { AppContext } from "../context/AppContext";
import { addToFavourites } from "../helperFunctions/addToFavourites";
import { setNotiticationFunction } from "../helperFunctions/setNotificationFunction";

import { IMAGE_BASE_URL, LOCAL_FAVOURITE_MOVIE_KEY } from "../utils/constants";
import { movieType } from "../utils/types";

type MovieDetailsHeroType = {
  data: movieType;
};

const MovieDetailsHero = ({ data }: MovieDetailsHeroType) => {
  // Context
  const { setNotifications } = useContext(AppContext);
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
              if (typeof window !== "undefined") {
                const favouritedMovies: movieType[] = JSON.parse(
                  localStorage.getItem(LOCAL_FAVOURITE_MOVIE_KEY) as string
                );
                const movieIsFavourited = favouritedMovies?.find(
                  (data) => data?.id === data?.id
                );

                if (movieIsFavourited) {
                  setNotiticationFunction(
                    setNotifications,
                    "Movie is already in favourites"
                  );
                  return;
                }

                addToFavourites(data as movieType);

                setNotiticationFunction(
                  setNotifications,
                  "Movie added to favourites",
                  "success"
                );
              }
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
