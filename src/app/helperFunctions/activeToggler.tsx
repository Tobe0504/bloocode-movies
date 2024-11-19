import { Dispatch, SetStateAction } from "react";

export const activeToggler = (
  index: number | null,
  initState: any[],
  setState: Dispatch<SetStateAction<any[]>>,
  id?: string | number
) => {
  const stateCopy = initState?.map((data: any, i: number) => {
    if (!id) {
      if (i === index) {
        return { ...data, isActive: true };
      } else {
        return { ...data, isActive: false };
      }
    } else {
      if (data.id === id) {
        return { ...data, isActive: true };
      } else {
        return { ...data, isActive: false };
      }
    }
  });

  setState(stateCopy);
};