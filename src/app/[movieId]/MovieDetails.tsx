"use client";

import { useParams } from "next/navigation";
import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import MovieDetailsCast from "../containers/MovieDetailsCast";
import MovieDetailsDescription from "../containers/MovieDetailsDescription";
import MovieDetailsHero from "../containers/MovieDetailsHero";
import MovieDetailsOtherInfo from "../containers/MovieDetailsOtherInfo";
import { useMovieById, useMovieCredits } from "../hooks/useMovies";
import { movieCreditType, movieType } from "../utils/types";

const MovieDetails = () => {
  // Params
  const { movieId } = useParams();

  // Requests
  const { data, isLoading } = useMovieById(movieId as string);
  const { data: movieCreditsData, isLoading: movieCreditsisdLoading } =
    useMovieCredits(movieId as string);

  const movieData: movieType = data?.data;
  const movieCast: movieCreditType[] = movieCreditsData?.data?.cast;
  const movieCrew: movieCreditType[] = movieCreditsData?.data?.crew;

  return (
    <Layout className="pb-10 pt-headerHeight lg:px-20 px-4">
      {isLoading || movieCreditsisdLoading ? (
        <Loader />
      ) : (
        <>
          <MovieDetailsHero data={movieData} />
          <div className="flex lg:flex-row flex-col items-start my-4 gap-5 ">
            <div className="flex-1 flex flex-col gap-5">
              <MovieDetailsDescription data={movieData} />
              <MovieDetailsCast data={movieCast} />
            </div>
            <div className="basis-[400px]">
              <Card>
                <MovieDetailsOtherInfo data={movieData} crew={movieCrew} />
              </Card>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default MovieDetails;
