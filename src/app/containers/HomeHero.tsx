"use client";

import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Add from "../assets/svgs/Add";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { LeftButton, RightButton } from "../components/NavButtons";
import { AppContext } from "../context/AppContext";
import { activeToggler } from "../helperFunctions/activeToggler";
import { addToFavourites } from "../helperFunctions/addToFavourites";
import { setNotiticationFunction } from "../helperFunctions/setNotificationFunction";
import { usePopulaeMovies } from "../hooks/useMovies";
import { LOCAL_FAVOURITE_MOVIE_KEY } from "../utils/constants";
import { movieType } from "../utils/types";

const baseUrl = "https://image.tmdb.org/t/p/original";

type HomeHeroTypes = {
  setFavourites: Dispatch<SetStateAction<movieType[]>>;
};

const HomeHero = ({ setFavourites }: HomeHeroTypes) => {
  // Requests
  const { isLoading, data } = usePopulaeMovies();
  const movies: movieType[] = useMemo(() => data?.data?.results, [data]);

  //   Router
  const router = useRouter();

  //   States
  const [moviesState, setMoviesState] = useState<movieType[]>([]);
  const [activeMovieIndex, setActiveMovieIndex] = useState(0);

  //   Context
  const { setNotifications } = useContext(AppContext);

  // Utils
  const activeMovie = useMemo(
    () => moviesState.find((data) => data?.isActive),
    [moviesState]
  );

  // Effects
  useEffect(() => {
    if (movies?.length) {
      setMoviesState(
        movies.map((data, i) => {
          if (i === 0) {
            return { ...data, isActive: true };
          } else {
            return { ...data, isActive: false };
          }
        })
      );
    }

    // eslint-disable-next-line
  }, [movies]);

  useEffect(() => {
    if (movies?.length) {
      const interval = setInterval(() => {
        if (activeMovieIndex < movies?.length) {
          setActiveMovieIndex((prevState) => prevState + 1);
        } else {
          setActiveMovieIndex(0);
        }
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }

    // eslint-disable-next-line
  }, [movies, activeMovieIndex]);

  useEffect(() => {
    if (moviesState?.length) {
      activeToggler(activeMovieIndex, moviesState, setMoviesState);
    }

    // eslint-disable-next-line
  }, [activeMovieIndex]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section
      className={`relative h-full  w-full bg-cover bg-center z-1 pt-headerHeight rounded-lg`}
      style={{
        backgroundImage: `url(${
          activeMovie?.backdrop_path
            ? baseUrl + activeMovie.backdrop_path
            : "/fallback-image.jpg"
        })`,
      }}
    >
      <div className="absolute h-full w-full  top-0  bg-custom-gradient"></div>
      <div className="absolute bottom-4 w-full text-center px-10">
        <h2 className="text-body font-bold text-3xl text-white-100">
          {activeMovie?.original_title}
        </h2>
        <p className="text-body font-semibold text-base text-grey-100 sm:px-4 lg:px-[120px] my-6">
          {activeMovie?.overview}
        </p>

        <div className="flex items-center gap-5 justify-center">
          <Button
            onClick={() => {
              router.push(`/${activeMovie?.id}`);
            }}
          >
            <span>View movie details</span>
          </Button>

          <div
            className="p-3 bg-black-200 border-2 border-black-100 rounded-lg cursor-pointer"
            onClick={() => {
              if (typeof window !== "undefined") {
                const favouritedMovies: movieType[] = JSON.parse(
                  localStorage.getItem(LOCAL_FAVOURITE_MOVIE_KEY) as string
                );
                const movieIsFavourited = favouritedMovies?.find(
                  (data) => data?.id === activeMovie?.id
                );

                if (movieIsFavourited) {
                  setNotiticationFunction(
                    setNotifications,
                    "Movie is already in favourites"
                  );
                  return;
                }

                addToFavourites(activeMovie as movieType);
                const localFavourites = JSON.parse(
                  localStorage.getItem(LOCAL_FAVOURITE_MOVIE_KEY) as string
                );
                setFavourites(localFavourites);

                setNotiticationFunction(
                  setNotifications,
                  "Movie added to favourites",
                  "success"
                );
              }
            }}
          >
            <Add />
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
          <LeftButton
            onClick={() => {
              if (activeMovieIndex >= 0) {
                setActiveMovieIndex((prevState) => prevState - 1);
              }
            }}
          />
          <RightButton
            onClick={() => {
              if (activeMovieIndex < movies?.length - 1) {
                setActiveMovieIndex((prevState) => prevState + 1);
              } else {
                setActiveMovieIndex(0);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
