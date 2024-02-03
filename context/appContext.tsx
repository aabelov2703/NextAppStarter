"use client";
import { AppContextProps, AppContextProviderProps } from "@/types/types";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [toggleMap, setToggleMap] = useState<boolean>(false);

  const appContextValues: AppContextProps = {
    theme,
    setTheme,
    toggleFilter,
    setToggleFilter,
    toggleMap,
    setToggleMap,
  };

  return (
    <AppContext.Provider value={appContextValues}>
      {children}
    </AppContext.Provider>
  );
};

// helper: userHook
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
