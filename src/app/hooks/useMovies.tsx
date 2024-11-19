import { config } from "../config";
import useGetHook from "./useGetHook";

const configOptions = {
  revalidateOnFocus: false,
  errorRetryCount: 1,
};

export const usePopulaeMovies = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${config.API_KEY}`;

  return useGetHook(url, configOptions);
};

export const useNowPlaying = () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${config.API_KEY}`;

  return useGetHook(url, configOptions);
};

export const useTopRated = () => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${config.API_KEY}`;

  return useGetHook(url, configOptions);
};

export const useUpcoming = () => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${config.API_KEY}`;

  return useGetHook(url, configOptions);
};

export const useMovieById = (id: string) => {
  const url = id
    ? `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${config.API_KEY}`
    : null;

  return useGetHook(url, configOptions);
};

export const useMovieCredits = (id: string) => {
  const url = id
    ? `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${config.API_KEY}`
    : null;

  return useGetHook(url, configOptions);
};
