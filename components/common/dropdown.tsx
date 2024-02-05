import { useAppContext } from "@/context/appContext";
import { DropdownProps } from "@/types/props";

const Dropdown: React.FC<DropdownProps> = ({
  onClick,
  header,
  className,
  children,
}) => {
  const { theme } = useAppContext();

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className={`fixed top-0 flex flex-col gap-2 justify-end inset-x-0 m-2 px-6 py-2 highlighted ${theme} ${className}`}
      onClick={handleClick}
    >
      {header && <p>{header}</p>}
      {children}
    </div>
  );
};

export default Dropdown;
