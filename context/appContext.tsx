"use client";
import { AppContextProps, BaseProps } from "@/types/props";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<BaseProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const appContextValues: AppContextProps = {
    theme,
    setTheme,
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
