import { useAppContext } from "@/context/appContext";
import { useState } from "react";
import { calcBtn } from "@/utils/calcStyles";

const Button = ({
  children,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  onClick: () => void;
  [key: string]: any;
}) => {
  const { theme } = useAppContext();
  const [isHover, setIsHover] = useState<boolean>(false);
  const { className = "" } = props;

  const btnStyles = calcBtn(theme, { ...props, isHover });

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`m-1 rounded-full ${className}`}
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
