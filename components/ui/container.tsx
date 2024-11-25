import { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const containerClass = `flex flex-col items-center grow p-4 rounded-sm shadow ${className}`;

  return <div className={containerClass}>{children}</div>;
};

export default Container;
