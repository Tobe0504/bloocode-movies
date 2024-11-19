import { LOCAL_FAVOURITE_MOVIE_KEY } from "../utils/constants";
import { movieType } from "../utils/types";

export const addToFavourites = (movie: movieType) => {
  const favouriteMovies: movieType[] = JSON.parse(
    localStorage.getItem(LOCAL_FAVOURITE_MOVIE_KEY) as string
  );

  const alreadyFavourited = favouriteMovies?.find(
    (data) => data?.id === movie?.id
  );

  if (alreadyFavourited) {
    return;
  }

  const newMovies =
    favouriteMovies?.length > 0 ? [...favouriteMovies, movie] : [movie];

  localStorage.setItem(LOCAL_FAVOURITE_MOVIE_KEY, JSON.stringify(newMovies));
};
