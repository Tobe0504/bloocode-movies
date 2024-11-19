import classes from "./CircularProgress.module.css";

type CircularProgressTypes = {
  width?: string;
  height?: string;
  color?: string;
};

const CircularProgress = ({
  width = "2rem",
  height = "2rem",
  color = "#E50000",
}: CircularProgressTypes) => {
  return (
    <svg
      className={classes.loader}
      viewBox="25 25 50 50"
      width={width}
      height={height}
    >
      <circle
        className={classes.loaderPath}
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default CircularProgress;
