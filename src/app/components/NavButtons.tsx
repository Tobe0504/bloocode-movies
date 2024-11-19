import LeftArrow from "../assets/svgs/LeftArrow";
import RightArrow from "../assets/svgs/RightArrow";

type NavButtonProps = {
  onClick?: () => void;
};

const buttonStyles =
  "lg:p-3  p-2 bg-black-200 border-2 border-black-100 rounded-lg cursor-pointer flex items-center justify-center";

export const LeftButton = ({ onClick }: NavButtonProps) => {
  return (
    <div className={buttonStyles} onClick={onClick}>
      <LeftArrow />
    </div>
  );
};

export const RightButton = ({ onClick }: NavButtonProps) => {
  return (
    <div className={buttonStyles} onClick={onClick}>
      <RightArrow />
    </div>
  );
};
