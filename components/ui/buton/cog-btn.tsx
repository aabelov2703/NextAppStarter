import { useAppContext } from "@/context/appContext";
import { useRef, useState } from "react";
import Dropdown from "@/components/common/dropdown";
import Switch from "@/components/common/switch";
import Cog from "../svg/cog";
import useOutsideClick from "@/hooks/use-outside-click";

const CogBtn: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const { theme } = useAppContext();
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setToggle(false));

  const strHint = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  const handleClick = () => {
    setToggle((prev) => !prev);
    onClick && onClick();
  };

  return (
    <div ref={ref}>
      {toggle ? (
        <Dropdown onClick={handleClick} header="Settings">
          <Switch hint={strHint}>{strHint}</Switch>
        </Dropdown>
      ) : (
        <div onClick={handleClick}>
          <Cog color={theme === "dark" ? "var(--light)" : "var(--dark)"} />
        </div>
      )}
    </div>
  );
};

export default CogBtn;
