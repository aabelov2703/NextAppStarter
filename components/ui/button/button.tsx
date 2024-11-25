"use client";
import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "submit" | "reset" | "button";
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
  type = "button",
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) onClick(e);
  };

  const disabledClass = disabled
    ? `bg-neutral-0 cursor-not-allowed`
    : `bg-primary text-light hover:bg-primary-1 hover:text-background`;

  const buttonClass = `text-center py-1 rounded-sm shadow-sm transition duration-300 
    ${disabledClass} ${className}`;

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={handleClick}
      type={type ?? "submit"}
    >
      {children}
    </button>
  );
};

export default Button;
