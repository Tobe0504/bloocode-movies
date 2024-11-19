import Image from "next/image";
import Link from "next/link";
import React from "react";
import Clock from "../assets/svgs/Clock";
import Rating from "../assets/svgs/Rating";
import { movieType } from "../utils/types";

type MovieCardTypes = {
  data: movieType;
};

const baseUrl = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ data }: MovieCardTypes) => {
  return (
    <Link
      href={`/${data?.id}`}
      className="w-[224px] max-h-[408px] border-2 border-black-100 p-4 bg-black-300 rounded-lg shrink-0 grow-0 hover:scale-105 duration-500"
    >
      <Image
        src={baseUrl + data.backdrop_path}
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
    </Link>
  );
};

export default MovieCard;
