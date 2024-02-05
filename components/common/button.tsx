"use client";
import { useAppContext } from "@/context/appContext";
import { useState } from "react";
import { calcBtn } from "@/utils/calcStyles";
import { ButtonProps } from "@/types/props";

const Button: React.FC<ButtonProps> = ({ onClick, children, ...props }) => {
  const { theme } = useAppContext();
  const [isHover, setIsHover] = useState<boolean>(false);

  const btnStyles = calcBtn(theme, { ...props, isHover });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`m-1 rounded-full ${props?.className || ""}`}
      style={{
        ...btnStyles,
        ...(props?.style && props.style),
      }}
    >
      {children}
    </button>
  );
};

export default Button;
