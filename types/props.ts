import { ReactNode } from "react";

export interface AppContextProps {
  theme: string;
  setTheme: (theme: string) => void;
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

export interface DropdownProps {
  onClick?: () => void;
  header?: string;
  className?: string;
  children?: React.ReactNode;
}
