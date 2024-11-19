"use client";

import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import MovieListContainer from "../components/MovieListContainer";
import { useNowPlaying, useUpcoming } from "../hooks/useMovies";
import { LOCAL_FAVOURITE_MOVIE_KEY } from "../utils/constants";
import { movieType } from "../utils/types";
import HomeHero from "./HomeHero";

const HomePage = () => {
  // Requests
  const { data: nowPlayingData, isLoading: nowPlayingIsLoading } =
    useNowPlaying();
  const { data: topRatedData, isLoading: topRatedIsLoading } = useNowPlaying();
  const { data: upcomingData, isLoading: upcomingIsLoading } = useUpcoming();

  // Utils
  const nowPlaying = nowPlayingData?.data?.results;
  const topRated = topRatedData?.data?.results;
  const upcoming = upcomingData?.data?.results;

  // States
  const [favouritesState, setFavouritesState] = useState<movieType[]>([]);

  // Effects
  useEffect(() => {
    if (typeof window !== "undefined") {
      const favourites: movieType[] = JSON.parse(
        localStorage &&
          (localStorage.getItem(LOCAL_FAVOURITE_MOVIE_KEY) as string)
      );

      if (favourites.length) {
        setFavouritesState(favourites);
      }
    }

    // eslint-disable-next-line
  }, []);

  return (
    <Layout className="pb-10 pt-headerHeight lg:px-20 px-4 ">
      <HomeHero setFavourites={setFavouritesState} />

      {favouritesState?.length > 0 && (
        <MovieListContainer title="Favourites" list={favouritesState} />
      )}

      <MovieListContainer
        title="Now Playing"
        list={nowPlaying}
        loading={nowPlayingIsLoading}
      />
      <MovieListContainer
        title="Top Rated"
        list={topRated}
        loading={topRatedIsLoading}
      />
      <MovieListContainer
        title="Upcoming"
        list={upcoming}
        loading={upcomingIsLoading}
      />
    </Layout>
  );
};

export default HomePage;
