"use client";

import { useContext, useEffect } from "react";
import useSWR, { SWRConfiguration } from "swr";
import { AppContext } from "../context/AppContext";
import { setNotiticationFunction } from "../helperFunctions/setNotificationFunction";

const useGetHook = (url: string | null, props?: SWRConfiguration) => {
  const { data, error, isLoading, isValidating } = useSWR(url, { ...props });

  //   Context
  const { setNotifications } = useContext(AppContext);

  const errorMessage =
    error?.response?.data?.message ||
    error?.message ||
    "There was an issue making this request";

  // Effects
  useEffect(() => {
    if (error) {
      setNotiticationFunction(setNotifications, errorMessage);
    }

    // eslint-disable-next-line
  }, [error, errorMessage]);

  return { data, error, isLoading, isValidating };
};

export default useGetHook;
