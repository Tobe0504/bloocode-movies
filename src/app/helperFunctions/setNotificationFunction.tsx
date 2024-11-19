import { notificationsType } from "../utils/types";
import { Dispatch, SetStateAction } from "react";
import { capitalize } from "../helperFunctions/capitalize";

export const setNotiticationFunction = (
  setState: Dispatch<SetStateAction<notificationsType>>,
  errorMessage: string,
  severity?: string
) => {
  if (setState) {
    setState((prevState: any) => {
      if (prevState) {
        return [
          ...prevState,
          {
            title: capitalize(errorMessage as string),
            severity: severity || "error",
            id: Math.floor(Math.random() * 1000000),
          },
        ];
      } else {
        return [
          {
            title: capitalize(errorMessage as string),
            severity: severity || "error",
            id: Math.floor(Math.random() * 1000000),
          },
        ];
      }
    });
  }
};
