"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { notificationsType } from "../utils/types";

type ErrorTypes = {
  children: React.ReactNode;
};

export const Error = ({ children }: ErrorTypes) => {
  // Context
  const { notifications, setNotifications } = useContext(AppContext);

  // Utils
  const filterNotifications = (id: string | number) => {
    const newNotifications = notifications?.filter((data) => {
      return data.id !== id;
    });

    setNotifications(newNotifications as notificationsType);
  };

  //   Effects
  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];

    notifications?.forEach((data) => {
      const timeoutId = setTimeout(() => {
        filterNotifications(data.id);
      }, 6000);
      timeoutIds.push(timeoutId);
    });

    // Clear timeouts unconditionally
    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };

    // eslint-disable-next-line
  }, [notifications]);

  return (
    <div className="relative font-body">
      <div>{children}</div>
      {notifications && (
        <div className="fixed w-errorContainerWidth bottom-5 right-2.5 z-10">
          {notifications?.map((data) => (
            <div
              key={data.id}
              className="rounded p-4 flex items-center justify-between mb-2 gap-4"
              style={{
                background: data.severity === "success" ? "#38CCB3" : "#DC362E",
                color: data.severity === "success" ? "#011627" : "#FFFFFF",
              }}
            >
              <div className="text-sm font-medium ">
                <p>{data.title}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="none"
                onClick={() => {
                  filterNotifications(data.id);
                }}
                className="w-6 h-6 cursor-pointer shrink-0"
              >
                <path
                  d="M10 30L30 10M10 10L30 30"
                  stroke={`${
                    data.severity === "success" ? "#011627" : "#FFFFFF"
                  }`}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
