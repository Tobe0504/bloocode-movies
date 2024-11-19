import Image from "next/image";
import React from "react";
import Calender from "../assets/svgs/Calender";
import Genre from "../assets/svgs/Genre";
import Language from "../assets/svgs/Language";
import { IMAGE_BASE_URL } from "../utils/constants";
import { movieCreditType, movieType } from "../utils/types";

type MovieDetailsOtherInfoType = {
  data: movieType;
  crew: movieCreditType[];
};

const MovieDetailsOtherInfo = ({ data, crew }: MovieDetailsOtherInfoType) => {
  const director = crew?.find((data) => data?.department === "Directing");

  return (
    <section>
      <div className="mb-[30px]">
        <div className="flex gap-2 items-center mb-3.5">
          <Calender />
          <span className="font-medium font-body text-grey-100 text-lg">
            Released Year
          </span>
        </div>

        <div className="font-semibold font-body text-white-100 text-xl">
          {data?.release_date.split("-")[0]}
        </div>
      </div>

      <div className="mb-[30px]">
        <div className="flex gap-2 items-center mb-3.5">
          <Language />
          <span className="font-medium font-body text-grey-100 text-lg">
            Available Languages
          </span>
        </div>

        <div className="flex items-center gap-3 flex-wrap shrink-0">
          {data?.spoken_languages?.map((data) => {
            return (
              <div
                className="font-semibold font-body text-white-100 text-lg border-2 border-black-300 py-2 px-3 bg-black-400 rounded-md"
                key={data?.english_name}
              >
                {data?.english_name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-[30px]">
        <div className="flex gap-2 items-center mb-3.5">
          <Genre />
          <span className="font-medium font-body text-grey-100 text-lg">
            Gernes
          </span>
        </div>

        <div className="flex items-center gap-3 flex-wrap shrink-0">
          {data?.genres?.map((data) => {
            return (
              <div
                className="font-semibold font-body text-white-100 text-lg border-2 border-black-300 py-2 px-3 bg-black-400 rounded-md"
                key={data?.id}
              >
                {data?.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-[30px]">
        <div className="flex gap-2 items-center mb-3.5">
          <span className="font-medium font-body text-grey-100 text-lg">
            Director
          </span>
        </div>

        <div className="">
          <div className="font-semibold font-body text-white-100 text-lg border-2 border-black-300 py-2 px-3 bg-black-400 rounded-md flex gap-4 items-center">
            <Image
              src={IMAGE_BASE_URL + director?.profile_path}
              alt={director?.original_name || "Director"}
              width={60}
              height={60}
            />
            <p className="font-medium font-body text-grey-100 text-lg">
              {director?.original_name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsOtherInfo;
