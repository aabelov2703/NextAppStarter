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

export interface ButtonProps {
  children?: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export interface SwitchProps {
  hint?: string;
  children?: React.ReactNode;
}
