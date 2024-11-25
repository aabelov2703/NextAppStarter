import { ReactNode } from "react";

type BtnIconType = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

const BtnIcon: React.FC<BtnIconType> = ({
  className,
  children,
  onClick,
  type = "button",
}) => {
  const btnClass = `border border-neutral-0 rounded-sm shadow text-foreground hover:shadow-inner min-w-6 h-6 cursor-pointer hover:text-warning-1
    ${className}`;

  return (
    <button type={type} className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnIcon;
