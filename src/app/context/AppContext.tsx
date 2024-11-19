"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { notificationsType } from "../utils/types";

type AppContextValuesTypes = {
  notifications: notificationsType;
  setNotifications: Dispatch<SetStateAction<notificationsType>>;
};

type AppContextProviderypes = {
  children: React.ReactNode;
};

export const AppContext = createContext({} as AppContextValuesTypes);

const AppContextProvider = ({ children }: AppContextProviderypes) => {
  // States
  const [notifications, setNotifications] = useState<notificationsType>([]);

  return (
    <AppContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
