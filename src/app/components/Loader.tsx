import React from "react";
import CircularProgress from "../assets/svgs/CircularProgress/CircularProgress";

const Loader = () => {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default Loader;
