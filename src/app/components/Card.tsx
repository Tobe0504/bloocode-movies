import React from "react";

type CardType = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardType) => {
  return (
    <section
      className={`p-4 lg:p-10 bg-black-400 rounded-xl border-2 border-black-500 ${className}`}
    >
      {children}
    </section>
  );
};

export default Card;
