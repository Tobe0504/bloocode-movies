export type movieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  isActive?: boolean;
  spoken_languages: spokenLanguageType[];
  genres: genreType[];
};

export type spokenLanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type genreType = {
  id: string;
  name: string;
};

export type movieCreditType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: string;
  character: string;
  credit_id: string;
  order: number;
  department: string;
};

export type notificationsType =
  | {
      title: string;
      severity: "success" | "error" | "mid";
      description?: string;
      id: string | number;
    }[]
  | null
  | undefined;
