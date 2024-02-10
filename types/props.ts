import { ReactNode } from "react";

export interface AppContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export interface BaseProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface Props extends BaseProps {
  [key: string]: any;
}

export interface Disabled {
  disabled?: boolean;
}

export interface ClickableProps extends BaseProps, Disabled, Props {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement> | null) => void;
}

export interface ChangableProps extends BaseProps, Disabled, Props {
  onChange?: (e?: React.ChangeEvent<HTMLInputElement> | null) => void;
}

export interface CommonProps extends ClickableProps, ChangableProps {}
