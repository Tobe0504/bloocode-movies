import React from "react";
import CircularProgress from "../assets/svgs/CircularProgress/CircularProgress";

type ButtonPropTypes = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary" | "null" | "invalid";
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  icon?: React.ReactNode;
};

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
  className,
  icon,
}: ButtonPropTypes) => {
  return (
    <button
      className={`${className} py-4 px-6 font-body text-sm rounded-lg  font-semibold flex items-center justify-center gap-1 ${
        type === "secondary"
          ? "bg-white-100 text-red-100"
          : "bg-red-100 text-white-100"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <CircularProgress width="1.5rem" height="1.5rem" color="inherit" />
      ) : (
        children
      )}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
