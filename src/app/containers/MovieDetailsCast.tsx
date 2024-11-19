import Image from "next/image";
import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { IMAGE_BASE_URL } from "../utils/constants";
import { movieCreditType } from "../utils/types";

type MovieDetailsCastType = {
  data: movieCreditType[];
};

const MovieDetailsCast = ({ data }: MovieDetailsCastType) => {
  // States
  const [showMore, setShowMore] = useState(false);

  return (
    <Card>
      <h4 className="font-bold lg:text-2xl text-lg text-body mb-4 ">Cast</h4>
      <div className="flex gap-4 flex-wrap ">
        {showMore
          ? data
              ?.sort((a, b) => a?.order - b?.order)
              ?.map((data) => {
                return (
                  <div
                    key={data?.id}
                    className="shrink-0 grow-0 lg:basis-[200px] basis-full w-full"
                  >
                    <Image
                      src={IMAGE_BASE_URL + data?.profile_path}
                      alt={data?.original_name}
                      width={2000}
                      className="w-full lg:w-[200px] max-h-[350px] object-cover rounded-md "
                      height={200}
                      layout="responsive"
                    />
                    <p className="font-semibold text-center text-body mt-4">
                      {data?.original_name}
                    </p>
                  </div>
                );
              })
          : data
              ?.sort((a, b) => a?.order - b?.order)
              ?.slice(0, 8)
              ?.map((data) => {
                return (
                  <div
                    key={data?.id}
                    className="shrink-0 grow-0 lg:basis-[200px] basis-full w-full"
                  >
                    <Image
                      src={IMAGE_BASE_URL + data?.profile_path}
                      alt={data?.original_name}
                      width={2000}
                      className="w-full lg:w-[200px] max-h-[350px] object-cover rounded-md "
                      height={200}
                      layout="responsive"
                    />
                    <p className="font-semibold text-center text-body mt-4">
                      {data?.original_name}
                    </p>
                  </div>
                );
              })}
      </div>

      <div className="flex justify-end mt-8">
        <Button onClick={() => setShowMore((prevState) => !prevState)}>
          {showMore ? "Hide" : "Show more"}
        </Button>
      </div>
    </Card>
  );
};

export default MovieDetailsCast;
