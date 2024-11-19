import React from "react";
import Card from "../components/Card";
import { movieType } from "../utils/types";

type MovieDetailsDescriptionType = {
  data: movieType;
};

const MovieDetailsDescription = ({ data }: MovieDetailsDescriptionType) => {
  return (
    <Card>
      <h4 className="font-medium lg:text-xl text-md text-grey-100 mb-3.5">
        Description
      </h4>
      <p className="font-medium lg:text-lg text-sm text-white-100 ">
        {data?.overview}
      </p>
    </Card>
  );
};

export default MovieDetailsDescription;
