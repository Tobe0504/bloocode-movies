import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useContext } from "react";
import Clock from "../assets/svgs/Clock";
import Delete from "../assets/svgs/Delete";
import Rating from "../assets/svgs/Rating";
import { AppContext } from "../context/AppContext";
import { setNotiticationFunction } from "../helperFunctions/setNotificationFunction";
import { IMAGE_BASE_URL, LOCAL_FAVOURITE_MOVIE_KEY } from "../utils/constants";
import { movieType } from "../utils/types";
import Button from "./Button";

type MovieCardTypes = {
  data: movieType;
  setFavouritesState?: Dispatch<SetStateAction<movieType[]>>;
};

const MovieCard = ({ data, setFavouritesState }: MovieCardTypes) => {
  // Context
  const { setNotifications } = useContext(AppContext);

  return (
    <Link
      href={`/${data?.id}`}
      className="group w-[224px] border-2 border-black-100 p-4 bg-black-300 rounded-lg shrink-0 grow-0 hover:scale-105 duration-500 relative overflow-hidden"
    >
      <Image
        src={IMAGE_BASE_URL + data.backdrop_path}
        alt="Image"
        className="w-full h-[232px] object-cover"
        width={300}
        height={232}
      />

      <h4 className="text-center font-bold font-body mt-4">
        {data?.original_title}
      </h4>
      <div className="flex items-center justify-between mt-4 font-body text-[12px] text-grey-100 ">
        <div className="flex items-center bg-black-400 p-1 rounded-[51px]">
          <Clock />
          <span>{data?.release_date}</span>
        </div>

        <div className="flex items-center bg-black-400 p-1 rounded-[51px]">
          <Rating />
          <span>{Math.floor(data?.popularity)}</span>
        </div>
      </div>

      {setFavouritesState && (
        <div
          className=" flex items-center justify-center gap-4 w-full text-[12px] font-semibold font-body mt-4 cursor-pointer  relative bottom-[-100px] group-hover:bottom-[0px] transition-all ease-in-out"
          onClick={(e) => {
            e.preventDefault();

            if (typeof window !== "undefined") {
              const localItems: movieType[] = JSON.parse(
                localStorage.getItem(LOCAL_FAVOURITE_MOVIE_KEY) as string
              );

              if (localItems.includes(data)) {
                setNotiticationFunction(
                  setNotifications,
                  "This item is not favourited yet"
                );

                return;
              }

              const filteredLocal: movieType[] = localItems.filter(
                (localData) => localData?.id !== data?.id
              );

              localStorage.setItem(
                LOCAL_FAVOURITE_MOVIE_KEY,
                JSON.stringify(filteredLocal)
              );

              if (setFavouritesState) {
                setFavouritesState(filteredLocal);
              }
            }
          }}
        >
          <Delete />
          <span>Delete from favoirites</span>
        </div>
      )}
    </Link>
  );
};

export default MovieCard;
