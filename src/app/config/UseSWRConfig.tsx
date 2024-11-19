"use client";

import axios, { AxiosResponse } from "axios";
import { SWRConfig } from "swr";
import { config as requestConfig } from "./index";

type UseSWRConfigProps = {
  children: React.ReactNode;
};

type Fetcher = (
  ...args: Parameters<typeof axios.get>
) => Promise<AxiosResponse<any>>;

const fetcher: Fetcher = async (url, config) => {
  const axiosInstance = axios.create({
    baseURL: requestConfig.BASE_URL,
    headers: {
      ...config?.headers,
      Authorization: `Bearer ${requestConfig.READ_ACCESS_TOKEN}`,
    },
  });

  return axiosInstance.get(url, { ...config }).then((res) => res);
};

const UseSWRConfigProvider = ({ children }: UseSWRConfigProps) => {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
};

export default UseSWRConfigProvider;
