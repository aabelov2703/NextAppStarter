"use client";
import React, { createContext, useContext, useState } from "react";

type AppContextType = {
  navBurgerOpen: boolean;
  setNavBurgerOpen: (val: boolean | ((prev: boolean) => boolean)) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (val: boolean | ((prev: boolean) => boolean)) => void;
  searchOpen: boolean;
  setSearchOpen: (val: boolean | ((prev: boolean) => boolean)) => void;
  modalOpen: boolean;
  setModalOpen: (val: boolean | ((prev: boolean) => boolean)) => void;
};

type AppContextProps = {
  children?: React.ReactNode;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [navBurgerOpen, setNavBurgerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const contextValue = {
    navBurgerOpen,
    setNavBurgerOpen,
    dropdownOpen,
    setDropdownOpen,
    searchOpen,
    setSearchOpen,
    modalOpen,
    setModalOpen,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppContext");
  return context;
};
