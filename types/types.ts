import { ReactNode } from "react";

export interface AppContextProps {
  theme: string;
  setTheme: (theme: string) => void;
  toggleFilter: boolean;
  setToggleFilter: (toggleFilter: boolean) => void;
  toggleMap: boolean;
  setToggleMap: (toggleMap: boolean) => void;
}

export interface AppContextProviderProps {
  children: ReactNode;
}
